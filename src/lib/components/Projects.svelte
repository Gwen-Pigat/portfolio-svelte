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
