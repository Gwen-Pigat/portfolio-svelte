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
			title: 'Fullstack & Backend',
			isFeatured: true,
			iconClass: 'fa-solid fa-layer-group',
			iconColorClass: 'skill-icon-purple',
			badge: 'Cœur de Métier',
			items: [
				'Architecture Frontend & Backend sur-mesure',
				'APIs REST & Microservices (Node.js, Go, PHP/Symfony)',
				'Bases de données SQL & ORM (MySQL, PostgreSQL, Doctrine)',
				'Conception SaaS, Webhooks & Authentification',
				'Sécurité, Scalabilité & Performance Server-Side'
			]
		},
		{
			title: 'Frontend & UI/UX',
			isFeatured: false,
			iconClass: 'fa-solid fa-laptop-code',
			iconColorClass: 'skill-icon-cyan',
			items: [
				'Svelte / SvelteKit (Applications Web Réactives)',
				'TypeScript & JavaScript moderne (ES6+)',
				'HTML5, Vanilla CSS & Glassmorphism',
				'Interfaces utilisateur modernes & Responsive Design',
				'Optimisation UX/UI & Performance Web'
			]
		},
		{
			title: 'Écosystème & Outillage',
			isFeatured: false,
			iconClass: 'fa-solid fa-cubes',
			iconColorClass: '',
			items: [
				'Extensions Chrome Manifest V3 (SidePanel API)',
				'Node.js, Go (Golang) & PHP 8 / Symfony',
				'Git, CI/CD, Docker & Déploiements Cloud',
				'Tech Leadership, Architecture & Mentorat'
			]
		}
	];
</script>

<section class="section" id="skills">
	<div class="container">
		<div class="section-header">
			<span class="section-tag">Expertise Technique</span>
			<h2 class="section-title">Compétences & Stack Fullstack</h2>
			<p class="section-desc">
				Un savoir-faire complet pour concevoir, développer et déployer des applications web performantes du Frontend jusqu'à l'infrastructure Backend.
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

<style>
	.skills-matrix-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
	}

	.skill-card {
		background: var(--bg-card);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-lg);
		padding: 24px;
		transition: all var(--transition-normal);
	}

	.skill-card:hover {
		transform: translateY(-4px);
		border-color: var(--border-glow);
	}

	.skill-card-featured {
		border-color: var(--accent-purple);
		box-shadow: var(--shadow-glow-purple);
	}

	.skill-icon {
		width: 48px;
		height: 48px;
		border-radius: var(--radius-md);
		background: rgba(99, 102, 241, 0.12);
		color: var(--accent-cyan);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		margin-bottom: 18px;
	}

	.skill-icon-purple {
		color: var(--accent-purple);
		background: rgba(168, 85, 247, 0.15);
	}

	.skill-icon-cyan {
		color: var(--accent-cyan);
		background: rgba(0, 242, 254, 0.12);
	}

	.skill-title {
		font-size: 1.15rem;
		font-weight: 700;
		margin-bottom: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		flex-wrap: wrap;
	}

	.skill-badge-main {
		font-size: 0.7rem;
		padding: 2px 8px;
		background: rgba(168, 85, 247, 0.2);
		color: var(--accent-purple);
		border-radius: 12px;
		font-weight: 700;
	}

	.skill-list {
		list-style: none;
	}

	.skill-item {
		display: flex;
		align-items: center;
		gap: 8px;
		color: var(--text-secondary);
		font-size: 0.9rem;
		margin-bottom: 8px;
	}

	.skill-check {
		color: var(--accent-emerald);
		font-size: 0.8rem;
		flex-shrink: 0;
	}

	@media (max-width: 1024px) {
		.skills-matrix-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 20px;
		}
	}

	@media (max-width: 768px) {
		.skills-matrix-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
