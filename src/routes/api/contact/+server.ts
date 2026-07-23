import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { name, email, subject, message } = await request.json();

		if (!name || !email || !subject || !message) {
			return json(
				{
					error: 'Champs invalides',
					details: 'Tous les champs (nom, email, sujet, message) sont obligatoires.'
				},
				{ status: 400 }
			);
		}

		console.log(`📩 Nouveau message reçu de ${name} (${email}) : [${subject}]`);

		const brevoApiKey = env.BREVO_API_KEY || env.SMTP_PASS;
		const senderEmail = env.SENDER_EMAIL || env.SMTP_FROM || 'contact@orizenh.com';
		const toEmail = env.CONTACT_TO_EMAIL || 'gwenael.pigat@gmail.com';

		if (!brevoApiKey) {
			console.warn("⚠️ Variable BREVO_API_KEY non définie.");
			return json(
				{
					error: 'Configuration manquante',
					details: "La clé API Brevo (BREVO_API_KEY) n'est pas configurée."
				},
				{ status: 500 }
			);
		}

		const response = await fetch('https://api.brevo.com/v3/smtp/email', {
			method: 'POST',
			headers: {
				accept: 'application/json',
				'content-type': 'application/json',
				'api-key': brevoApiKey
			},
			body: JSON.stringify({
				sender: { name: name, email: senderEmail },
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
			console.error('⚠️ Response Brevo API Error:', response.status, errorData);
			throw new Error(errorData.message || `Erreur API Brevo (${response.status})`);
		}

		console.log("✅ E-mail envoyé avec succès via l'API Brevo !");
		return json({
			status: 'success',
			message: 'Message transmis avec succès par e-mail à Gwenaël PIGAT !'
		});
	} catch (err: any) {
		console.error(`⚠️ Erreur lors de l'envoi de l'email :`, err);
		return json(
			{
				status: 'error',
				error: "Erreur d'envoi d'e-mail",
				details: err?.message || "Erreur lors de la connexion à l'API Brevo."
			},
			{ status: 500 }
		);
	}
};
