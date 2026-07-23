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
				Un projet de site web en PHP / Symfony, une application sur-mesure ou une extension Chrome ? Contactez-moi !
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
							placeholder="Projet PHP / Symfony, Site Web, Extension..."
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
