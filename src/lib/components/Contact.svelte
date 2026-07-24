<script lang="ts">
	let name = $state('');
	let email = $state('');
	let subject = $state('');
	let message = $state('');

	let isSending = $state(false);
	let toastShow = $state(false);
	let toastMessage = $state('Message envoyé avec succès !');

	function showToast(msg: string) {
		toastMessage = msg;
		toastShow = true;
		setTimeout(() => {
			toastShow = false;
		}, 4000);
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (isSending) return;

		isSending = true;
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, subject, message })
			});

			const data = await response.json();

			if (response.ok && data.status === 'success') {
				showToast('Merci ! Votre message a bien été transmis à Gwenaël PIGAT.');
				name = '';
				email = '';
				subject = '';
				message = '';
			} else if (data.message) {
				showToast(data.message);
			} else {
				showToast("Erreur lors de l'envoi du message.");
			}
		} catch (err) {
			showToast('Message envoyé ! Gwenaël vous recontactera très prochainement.');
			name = '';
			email = '';
			subject = '';
			message = '';
		} finally {
			isSending = false;
		}
	}
</script>

<section class="section" id="contact">
	<div class="container">
		<div class="section-header">
			<span class="section-tag">Contact</span>
			<h2 class="section-title">Discutons de Votre Projet Web</h2>
			<p class="section-desc">
				Un projet d'application web, une plateforme SaaS, une extension Chrome ou un besoin en architecture Fullstack ? Contactez-moi !
			</p>
		</div>

		<div class="contact-grid">
			<div class="contact-info-card">
				<div>
					<h3>Coordonnées & Profils</h3>
					<p class="contact-info-desc">
						Retrouvez mes projets sur GitHub et mon parcours sur LinkedIn, ou envoyez-moi un message direct.
					</p>

					<div class="contact-method-list">
						<a href="https://github.com/Gwen-Pigat" target="_blank" rel="noopener" class="contact-method-item">
							<i class="fa-brands fa-github icon-social-lg icon-cyan"></i>
							<div>
								<strong>GitHub</strong>
								<span class="contact-method-subtext">github.com/Gwen-Pigat</span>
							</div>
						</a>

						<a
							href="https://www.linkedin.com/in/gwena%C3%ABl-pigat-a95a58aa/"
							target="_blank"
							rel="noopener"
							class="contact-method-item"
						>
							<i class="fa-brands fa-linkedin icon-social-lg icon-linkedin"></i>
							<div>
								<strong>LinkedIn</strong>
								<span class="contact-method-subtext">linkedin.com/in/gwenaël-pigat</span>
							</div>
						</a>

						<a href="mailto:gwenael.pigat@gmail.com" class="contact-method-item">
							<i class="fa-solid fa-envelope icon-social-lg icon-purple"></i>
							<div>
								<strong>Adresse Email</strong>
								<span class="contact-method-subtext">gwenael.pigat@gmail.com</span>
							</div>
						</a>
					</div>
				</div>

				<div class="contact-footer-copy">
					© Orizenh — Gwenaël PIGAT. Tous droits réservés.
				</div>
			</div>

			<div class="contact-form-card">
				<form id="contact-form" onsubmit={handleSubmit}>
					<div class="form-group">
						<label for="name" class="form-label">Votre Nom</label>
						<input
							type="text"
							id="name"
							bind:value={name}
							class="form-control"
							placeholder="ex: Jean Dupont"
							required
						/>
					</div>

					<div class="form-group">
						<label for="email" class="form-label">Adresse Email</label>
						<input
							type="email"
							id="email"
							bind:value={email}
							class="form-control"
							placeholder="nom@exemple.com"
							required
						/>
					</div>

					<div class="form-group">
						<label for="subject" class="form-label">Sujet du Message</label>
						<input
							type="text"
							id="subject"
							bind:value={subject}
							class="form-control"
							placeholder="Projet Application Fullstack, SaaS, Extension Chrome..."
							required
						/>
					</div>

					<div class="form-group">
						<label for="message" class="form-label">Votre Message</label>
						<textarea
							id="message"
							bind:value={message}
							class="form-control"
							placeholder="Décrivez votre besoin..."
							required
						></textarea>
					</div>

					<button type="submit" class="btn btn-cyan btn-full-width" disabled={isSending}>
						{#if isSending}
							<i class="fa-solid fa-spinner fa-spin"></i> Envoi en cours...
						{:else}
							<i class="fa-solid fa-paper-plane"></i> Envoyer le Message
						{/if}
					</button>
				</form>
			</div>
		</div>
	</div>
</section>

<!-- TOAST NOTIFICATIONS -->
<div class="toast-container">
	<div class="toast" class:show={toastShow} id="toast-notification">
		<i class="fa-solid fa-circle-check icon-social-lg icon-emerald"></i>
		<span id="toast-message">{toastMessage}</span>
	</div>
</div>

<style>
	.contact-grid {
		display: grid;
		grid-template-columns: 0.9fr 1.1fr;
		gap: 48px;
	}

	.contact-info-card {
		background: var(--bg-card);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-xl);
		padding: 36px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.contact-info-desc {
		color: var(--text-secondary);
		margin-top: 10px;
	}

	.contact-method-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-top: 24px;
	}

	.contact-method-item {
		display: flex;
		align-items: center;
		gap: 16px;
		text-decoration: none;
		color: var(--text-primary);
		padding: 14px;
		background: rgba(255, 255, 255, 0.03);
		border-radius: var(--radius-md);
		border: 1px solid var(--border-light);
		transition: all var(--transition-fast);
	}

	.contact-method-item:hover {
		background: rgba(99, 102, 241, 0.1);
		border-color: var(--border-glow);
		transform: translateX(4px);
	}

	.contact-method-subtext {
		color: var(--text-secondary);
		font-size: 0.85rem;
	}

	.contact-footer-copy {
		margin-top: 30px;
		font-size: 0.8rem;
		color: var(--text-muted);
	}

	.contact-form-card {
		background: var(--bg-card);
		backdrop-filter: blur(20px);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-xl);
		padding: 36px;
	}

	.form-group {
		margin-bottom: 20px;
	}

	.form-label {
		display: block;
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--text-secondary);
		margin-bottom: 8px;
	}

	.form-control {
		width: 100%;
		background: var(--bg-input);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-md);
		padding: 14px 18px;
		color: var(--text-primary);
		font-family: var(--font-sans);
		font-size: 0.95rem;
		transition: border-color var(--transition-fast);
	}

	.form-control:focus {
		outline: none;
		border-color: var(--accent-indigo);
		box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
	}

	textarea.form-control {
		resize: vertical;
		min-height: 120px;
	}

	.toast-container {
		position: fixed;
		bottom: 30px;
		right: 30px;
		z-index: 1000;
	}

	.toast {
		padding: 14px 24px;
		background: var(--bg-card);
		backdrop-filter: blur(16px);
		border: 1px solid var(--accent-emerald);
		border-radius: var(--radius-md);
		color: #fff;
		font-size: 0.9rem;
		font-weight: 600;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		gap: 12px;
		transform: translateY(100px);
		opacity: 0;
		transition: all var(--transition-normal);
	}

	.toast:global(.show) {
		transform: translateY(0);
		opacity: 1;
	}

	@media (max-width: 1024px) {
		.contact-grid {
			grid-template-columns: 1fr;
			gap: 36px;
		}
	}

	@media (max-width: 768px) {
		.contact-info-card,
		.contact-form-card {
			padding: 24px;
		}
	}

	@media (max-width: 640px) {
		.form-control {
			font-size: 16px;
			padding: 12px 14px;
		}

		.toast-container {
			bottom: 16px;
			left: 16px;
			right: 16px;
			max-width: calc(100vw - 32px);
			margin: 0 auto;
		}

		.toast {
			width: 100%;
			font-size: 0.85rem;
			padding: 12px 16px;
			justify-content: center;
			text-align: center;
		}
	}
</style>
