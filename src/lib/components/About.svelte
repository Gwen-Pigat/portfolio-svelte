<section class="section" id="about">
	<div class="container">
		<div class="about-box">
			<div class="about-profile-wrapper">
				<img
					src="/images/gwenael_pigat.jpg"
					alt="Gwenaël PIGAT - Développeur Web PHP / Symfony & Tech Lead"
					class="about-profile-img"
				/>
			</div>

			<div class="about-text">
				<span class="section-tag">À Propos</span>
				<h3>Gwenaël PIGAT</h3>
				<p>
					Spécialisé en <strong>PHP et Symfony</strong>, je suis un développeur web passionné avec une solide
					expérience dans la conception et le déploiement de sites internet et d'applications web d'entreprise.
				</p>
				<p>
					En tant que Tech Lead et développeur fullstack, j'accorde une importance majeure à la propreté du code, au
					respect des standards de sécurité et à la qualité de l'expérience utilisateur.
				</p>

				<div class="leadership-highlights">
					<div class="highlight-item">
						<i class="fa-brands fa-symfony highlight-icon icon-purple"></i>
						<div>
							<strong>Expertise PHP & Symfony</strong>
							<p class="highlight-subtext">Développement d'applications web solides, sécurisées et maintenables.</p>
						</div>
					</div>

					<div class="highlight-item">
						<i class="fa-solid fa-code highlight-icon"></i>
						<div>
							<strong>Développement Web Sur-mesure</strong>
							<p class="highlight-subtext">Sites vitrines, plateformes SaaS et extensions sur-mesure.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about-box {
		background: var(--bg-card);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-xl);
		padding: 48px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 48px;
		align-items: center;
	}

	.about-profile-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.about-profile-img {
		width: 100%;
		max-width: 320px;
		border-radius: 24px;
		object-fit: cover;
		border: 2px solid var(--border-glow);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 35px rgba(99, 102, 241, 0.3);
		transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.about-profile-img:hover {
		transform: scale(1.03);
	}

	.about-text h3 {
		font-size: 2rem;
		font-weight: 800;
		margin-bottom: 16px;
	}

	.about-text p {
		color: var(--text-secondary);
		font-size: 1rem;
		line-height: 1.8;
		margin-bottom: 20px;
	}

	.leadership-highlights {
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin-top: 24px;
	}

	.highlight-item {
		display: flex;
		align-items: flex-start;
		gap: 16px;
		background: rgba(255, 255, 255, 0.03);
		padding: 16px;
		border-radius: var(--radius-md);
		border: 1px solid var(--border-light);
	}

	.highlight-icon {
		font-size: 1.4rem;
		color: var(--accent-cyan);
		margin-top: 2px;
	}

	.highlight-subtext {
		font-size: 0.88rem;
		color: var(--text-secondary);
		margin-bottom: 0 !important;
	}

	@media (max-width: 1024px) {
		.about-box {
			grid-template-columns: 1fr;
			gap: 36px;
			padding: 36px;
			text-align: center;
		}

		.about-profile-img {
			max-width: 260px;
		}

		.leadership-highlights {
			text-align: left;
		}
	}

	@media (max-width: 768px) {
		.about-box {
			padding: 24px;
		}
	}
</style>
