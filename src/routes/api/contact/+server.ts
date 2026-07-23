import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { name, email, subject, message } = await request.json();

		if (!name || !email || !subject || !message) {
			return json(
				{
					error: 'Champs invalides',
					details: 'All fields (name, email, subject, message) are required.'
				},
				{ status: 400 }
			);
		}

		console.log(`📩 Nouveau message reçu de ${name} (${email}) : [${subject}]`);

		const smtpHost = env.SMTP_HOST;
		const smtpPort = parseInt(env.SMTP_PORT || '587', 10);
		const smtpUser = env.SMTP_USER;
		const smtpPass = env.SMTP_PASS;
		const smtpFrom = env.SMTP_FROM || smtpUser || 'portfolio@orizenh.com';
		const toEmail = env.CONTACT_TO_EMAIL || 'gwenael.pigat@gmail.com';

		if (!smtpHost) {
			console.log(
				"ℹ️ [SMTP] Variable SMTP_HOST non définie. Définissez SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS pour activer l'envoi réel."
			);
			return json({
				status: 'success',
				message: "Message reçu (mode développement, pas d'envoi SMTP)."
			});
		}

		// Option A: Brevo HTTP API v3 (Si BREVO_API_KEY ou une clé xkeysib est fournie)
		const brevoApiKey =
			env.BREVO_API_KEY ||
			(env.SMTP_PASS && env.SMTP_PASS.startsWith('xkeysib-') ? env.SMTP_PASS : undefined);
		if (brevoApiKey) {
			console.log("🚀 Envoi via l'API HTTP Brevo (Port 443)...");
			const response = await fetch('https://api.brevo.com/v3/smtp/email', {
				method: 'POST',
				headers: {
					accept: 'application/json',
					'content-type': 'application/json',
					'api-key': brevoApiKey
				},
				body: JSON.stringify({
					sender: { name: name, email: smtpFrom },
					to: [{ email: toEmail, name: 'Gwenaël PIGAT' }],
					replyTo: { name: name, email: email },
					subject: `[Portfolio Contact] ${subject}`,
					htmlContent: `
					<!DOCTYPE html>
					<html>
					<head><meta charset="utf-8"></head>
					<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
						<div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
							<h2 style="color: #6366f1;">Nouveau message depuis Orizenh.com</h2>
							<p><strong>Expéditeur :</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
							<p><strong>Sujet :</strong> ${subject}</p>
							<hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
							<h3>Message :</h3>
							<p style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
							<hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
							<p style="font-size: 0.8em; color: #888;">Ce message a été envoyé depuis le formulaire de contact de votre portfolio Orizenh.</p>
						</div>
					</body>
					</html>
					`
				})
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(errorData.message || `Erreur API Brevo (${response.status})`);
			}

			return json({
				status: 'success',
				message: 'Message transmis avec succès par e-mail à Gwenaël PIGAT !'
			});
		}

		// Option B: Envoi SMTP avec fallback automatique de ports (2525, 587, 465)
		const portsToTry = [smtpPort, 2525, 587, 465].filter(
			(val, idx, self) => self.indexOf(val) === idx && !isNaN(val)
		);

		const mailOptions = {
			from: `"${name}" <${smtpFrom}>`,
			to: toEmail,
			replyTo: `"${name}" <${email}>`,
			subject: `[Portfolio Contact] ${subject}`,
			html: `
			<!DOCTYPE html>
			<html>
			<head><meta charset="utf-8"></head>
			<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
				<div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
					<h2 style="color: #6366f1;">Nouveau message depuis Orizenh.com</h2>
					<p><strong>Expéditeur :</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
					<p><strong>Sujet :</strong> ${subject}</p>
					<hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
					<h3>Message :</h3>
					<p style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
					<hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
					<p style="font-size: 0.8em; color: #888;">Ce message a été envoyé depuis le formulaire de contact de votre portfolio Orizenh.</p>
				</div>
			</body>
			</html>
			`
		};

		let lastError: any = null;
		for (const currentPort of portsToTry) {
			try {
				console.log(`⏳ Tentative d'envoi SMTP sur ${smtpHost}:${currentPort}...`);
				const transporter = nodemailer.createTransport({
					host: smtpHost,
					port: currentPort,
					secure: currentPort === 465,
					auth:
						smtpUser && smtpPass
							? {
									user: smtpUser,
									pass: smtpPass
								}
							: undefined,
					connectionTimeout: 4000, // 4s timeout rapide par port
					greetingTimeout: 4000,
					socketTimeout: 6000
				});

				await transporter.sendMail(mailOptions);
				console.log(`✅ E-mail envoyé avec succès via le port ${currentPort} !`);
				return json({
					status: 'success',
					message: 'Message transmis avec succès par e-mail à Gwenaël PIGAT !'
				});
			} catch (err: any) {
				console.warn(`⚠️ Échec SMTP sur le port ${currentPort}: ${err.message}`);
				lastError = err;
			}
		}

		throw lastError || new Error('Impossible de se connecter aux ports SMTP (2525, 587, 465).');
	} catch (err: any) {
		console.error(`⚠️ Erreur lors de l'envoi de l'email :`, err);
		return json(
			{
				status: 'error',
				error: "Erreur d'envoi d'e-mail",
				details: err?.message || 'Erreur lors de la connexion SMTP Brevo.'
			},
			{ status: 500 }
		);
	}
};
