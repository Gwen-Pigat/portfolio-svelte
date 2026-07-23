<script lang="ts">
	interface SkillCard {
		title: string;
		isFeatured: boolean;
		iconClass: string;
		iconColorClass: string;
		badge?: string;
		items: string[];
	}

	const skillCards: SkillCard[] = [
		{
			title: 'PHP / Symfony',
			isFeatured: true,
			iconClass: 'fa-brands fa-php',
			iconColorClass: 'skill-icon-purple',
			badge: 'Expertise Principale',
			items: [
				'PHP 8.x (Programmation Orientée Objet avancée)',
				'Symfony (Architecture MVC, Bundle, Services)',
				'Doctrine ORM & Migrations de base de données',
				'APIs REST (API Platform, Serializer)',
				'Twig Templating & Form Components'
			]
		},
		{
			title: 'Développement Web Fullstack',
			isFeatured: false,
			iconClass: 'fa-solid fa-laptop-code',
			iconColorClass: '',
			items: [
				'Conception de sites internet sur-mesure',
				'Applications web modernes & SaaS',
				'Svelte / SvelteKit (Applications Web Réactives)',
				'JavaScript (ES6+), HTML5 & Vanilla CSS',
				'Interfaces réactives & responsive design'
			]
		},
		{
			title: 'Écosystème & Extensions',
			isFeatured: false,
			iconClass: 'fa-solid fa-cubes',
			iconColorClass: 'skill-icon-cyan',
			items: [
				'Extensions Chrome Manifest V3 (SidePanel API)',
				'Go (Golang) / Microservices',
				'Node.js & TypeScript',
				'Git, CI/CD & Tech Leadership'
			]
		}
	];
</script>

<section class="section" id="skills">
	<div class="container">
		<div class="section-header">
			<span class="section-tag">Expertise Technique</span>
			<h2 class="section-title">Compétences & Langages</h2>
			<p class="section-desc">
				Mon expertise principale s'appuie sur le langage PHP et le framework Symfony pour bâtir des applications web
				robustes et évolutives.
			</p>
		</div>

		<div class="skills-matrix-grid">
			{#each skillCards as card}
				<div class="skill-card" class:skill-card-featured={card.isFeatured}>
					<div class="skill-icon {card.iconColorClass}">
						<i class={card.iconClass}></i>
					</div>
					<h3 class="skill-title">
						{card.title}
						{#if card.badge}
							<span class="skill-badge-main">{card.badge}</span>
						{/if}
					</h3>
					<ul class="skill-list">
						{#each card.items as item}
							<li class="skill-item">
								<i class="fa-solid fa-check skill-check"></i> {item}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>
