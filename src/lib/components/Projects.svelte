<script lang="ts">
	interface ProjectLink {
		text: string;
		url: string;
		icon: string;
		btnClass: string;
	}

	interface Project {
		name: string;
		badgeText: string;
		badgeClass: string;
		badgeIcon: string;
		thumb: string;
		iconClass: string;
		desc: string;
		techTags: string[];
		links: ProjectLink[];
	}

	const projects: Project[] = [
		{
			name: 'Tasker',
			badgeText: 'Application Web & Extension',
			badgeClass: '',
			badgeIcon: 'fa-solid fa-globe',
			thumb: '/images/tasker_mockup.png',
			iconClass: 'fa-solid fa-list-check icon-cyan',
			desc: 'Une application de gestion de tâches premium et moderne. Tasker permet de suivre vos objectifs quotidiens, consulter vos statistiques de productivité et prendre des notes instantanément. Accessible en application web et en extension pour le panneau latéral de Chrome.',
			techTags: ['Application Web', 'Extension Chrome Side Panel', 'Gestion de Tâches', 'Interface Sombre'],
			links: [
				{
					text: 'Visiter le site web',
					url: 'https://tasker.orizenh.com/',
					icon: 'fa-solid fa-globe',
					btnClass: 'btn-cyan'
				},
				{
					text: 'Extension Chrome',
					url: 'https://chromewebstore.google.com/detail/Tasker/lfcmbfdkbfcnjoaggdlmcgldgpammdpo?hl=fr',
					icon: 'fa-brands fa-chrome',
					btnClass: 'btn-primary'
				}
			]
		},
		{
			name: 'ToolsBox 4 DEV',
			badgeText: 'Extension & Outils Web',
			badgeClass: 'badge-purple',
			badgeIcon: 'fa-brands fa-chrome',
			thumb: '/images/toolsbox_mockup.png',
			iconClass: 'fa-solid fa-toolbox icon-purple',
			desc: "Une suite complète d'outils utilitaires pour développeurs directement accessible dans le panneau latéral de Chrome et 100% privée (traitement hors-ligne) : formateur JSON, encodeur Base64, générateurs UUID v4 et mots de passe bcrypt, et convertisseurs d'images (WebP, AVIF, SVG).",
			techTags: ['Extension Chrome', 'Outils Utilitaires', 'Formateur JSON', 'Cryptographie & Convertisseurs'],
			links: [
				{
					text: 'Extension Chrome',
					url: 'https://chromewebstore.google.com/detail/toolsbox-4-dev/jhcdfjfmkljolfiejipmlhdadfjnnndd?hl=fr',
					icon: 'fa-brands fa-chrome',
					btnClass: 'btn-primary'
				}
			]
		},
		{
			name: 'QR Builder',
			badgeText: 'Site Web & Service',
			badgeClass: 'badge-emerald',
			badgeIcon: 'fa-solid fa-globe',
			thumb: '/images/qrbuilder_mockup.png',
			iconClass: 'fa-solid fa-qrcode icon-emerald',
			desc: "Un service web complet de création de QR codes personnalisés. Choisissez vos couleurs et téléchargez vos créations sous forme d'images haute définition ou de fichiers vectoriels SVG.",
			techTags: ['Site Web Service', 'Générateur QR Code', 'Export SVG & PNG', 'Design Personnalisé'],
			links: [
				{
					text: 'Visiter le site web',
					url: 'https://qr-builder.orizenh.com/',
					icon: 'fa-solid fa-globe',
					btnClass: 'btn-cyan'
				}
			]
		},
		{
			name: 'DropLink',
			badgeText: 'Site Web & Sécurité',
			badgeClass: 'badge-rose',
			badgeIcon: 'fa-solid fa-globe',
			thumb: '/images/droplink_mockup.png',
			iconClass: 'fa-solid fa-link icon-rose',
			desc: "Un service web de création de liens personnalisés, éphémères et hautement sécurisés. Définissez un délai d'expiration automatique, un mot de passe d'accès ou une limite dans le temps pour partager vos liens en toute confidentialité.",
			techTags: ['Site Web Service', 'Raccourcisseur de Liens', 'Liens Éphémères', 'Protection par Mot de Passe'],
			links: [
				{
					text: 'Visiter le site web',
					url: 'https://droplink.orizenh.com/',
					icon: 'fa-solid fa-globe',
					btnClass: 'btn-cyan'
				}
			]
		}
	];
</script>

<section class="section" id="projects">
	<div class="container">
		<div class="section-header">
			<span class="section-tag">Portfolio</span>
			<h2 class="section-title">Mes Réalisations & Projets Web</h2>
			<p class="section-desc">
				Découvrez les sites web, applications et extensions Chrome que j'ai créés. Accédez directement aux sites web
				et aux extensions Chrome associées.
			</p>
		</div>

		<div class="projects-grid">
			{#each projects as project}
				<div class="project-card">
					<div class="project-thumb-wrapper">
						<span class="project-badge-tag {project.badgeClass}">
							<i class={project.badgeIcon}></i> {project.badgeText}
						</span>
						<img src={project.thumb} alt={project.name} class="project-thumb">
					</div>
					<div class="project-info">
						<div class="project-header-meta">
							<h3 class="project-name">{project.name}</h3>
							<i class={project.iconClass}></i>
						</div>
						<p class="project-desc">{project.desc}</p>
						
						<div class="project-tech-tags">
							{#each project.techTags as tag}
								<span class="tech-pill">{tag}</span>
							{/each}
						</div>

						<div class="project-footer-links">
							{#each project.links as link}
								<a href={link.url} target="_blank" rel="noopener" class="btn {link.btnClass} btn-sm">
									<i class={link.icon}></i> {link.text}
								</a>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 32px;
	}

	.project-card {
		background: var(--bg-card);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-xl);
		overflow: hidden;
		transition: all var(--transition-normal);
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.project-card:hover {
		transform: translateY(-8px);
		border-color: var(--border-glow);
		box-shadow: var(--shadow-card), 0 0 30px rgba(99, 102, 241, 0.15);
	}

	.project-thumb-wrapper {
		position: relative;
		width: 100%;
		height: 260px;
		overflow: hidden;
		background: #000;
	}

	.project-thumb {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.project-card:hover .project-thumb {
		transform: scale(1.05);
	}

	.project-badge-tag {
		position: absolute;
		top: 16px;
		left: 16px;
		padding: 6px 14px;
		background: rgba(7, 9, 19, 0.85);
		backdrop-filter: blur(12px);
		border: 1px solid var(--border-light);
		border-radius: 30px;
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--accent-cyan);
		z-index: 1;
	}

	.project-badge-tag:global(.badge-purple) { color: var(--accent-purple); }
	.project-badge-tag:global(.badge-emerald) { color: var(--accent-emerald); }
	.project-badge-tag:global(.badge-rose) { color: var(--accent-rose); }

	.project-info {
		padding: 28px;
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.project-header-meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 12px;
	}

	.project-name {
		font-size: 1.6rem;
		font-weight: 800;
		letter-spacing: -0.01em;
	}

	.project-desc {
		color: var(--text-secondary);
		font-size: 0.95rem;
		line-height: 1.6;
		margin-bottom: 20px;
	}

	.project-tech-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 24px;
	}

	.tech-pill {
		padding: 4px 10px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-sm);
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--text-muted);
	}

	.project-footer-links {
		margin-top: auto;
		display: flex;
		align-items: center;
		gap: 12px;
		flex-wrap: wrap;
	}

	@media (max-width: 1024px) {
		.projects-grid {
			grid-template-columns: 1fr;
			gap: 28px;
		}
	}

	@media (max-width: 768px) {
		.project-header-meta {
			flex-direction: column;
			align-items: flex-start;
			gap: 8px;
		}

		.project-footer-links {
			flex-direction: column;
			width: 100%;
			gap: 10px;
		}

		.project-footer-links :global(.btn) {
			width: 100%;
		}
	}

	@media (max-width: 640px) {
		.project-thumb-wrapper {
			height: 200px;
		}

		.project-info {
			padding: 20px 16px;
		}

		.project-name {
			font-size: 1.35rem;
		}
	}
</style>
