<section class="hero" id="hero">
	<div class="container hero-grid">
		<div class="hero-content">
			<div class="hero-status-pill">
				<span class="status-dot"></span>
				Développeur Web Fullstack & Tech Lead
			</div>

			<h1 class="hero-title">
				Développeur <span class="gradient-text">Fullstack & Tech Lead</span> | Apps & SaaS
			</h1>

			<p class="hero-subtitle">
				Bienvenue ! Je suis <strong>Gwenaël PIGAT</strong>, Développeur Web Fullstack & Tech Lead. Je conçois des sites web professionnels sur-mesure, des applications SaaS performantes et des extensions Chrome innovantes en maîtrisant l'ensemble de la chaîne de valeur web.
			</p>

			<div class="hero-actions">
				<a href="#projects" class="btn btn-cyan">
					<i class="fa-solid fa-laptop-code"></i> Voir mes Réalisations
				</a>
				<a
					href="https://github.com/Gwen-Pigat"
					target="_blank"
					rel="noopener"
					class="btn btn-glass"
				>
					<i class="fa-brands fa-github"></i> GitHub
				</a>
				<a
					href="https://www.linkedin.com/in/gwena%C3%ABl-pigat-a95a58aa/"
					target="_blank"
					rel="noopener"
					class="btn btn-glass"
				>
					<i class="fa-brands fa-linkedin icon-linkedin"></i> LinkedIn
				</a>
			</div>

			<div class="hero-stats">
				<div class="stat-item">
					<span class="stat-number gradient-text-cyan"
						>Fullstack</span
					>
					<span class="stat-label">Frontend & Backend</span>
				</div>
				<div class="stat-item">
					<span class="stat-number gradient-text-purple"
						>Tech Lead</span
					>
					<span class="stat-label">Architecture & APIs</span>
				</div>
				<div class="stat-item">
					<span class="stat-number gradient-text-cyan">4</span>
					<span class="stat-label">Projets & Services Web</span>
				</div>
			</div>
		</div>

		<!-- VISUEL CODE PROFIL + PHOTO -->
		<div class="hero-visual">
			<div class="hero-code-card">
				<div class="profile-hero-wrapper">
					<img
						src="/images/gwenael_pigat.jpg"
						alt="Gwenaël PIGAT"
						class="profile-hero-avatar"
					/>
				</div>
				<div class="terminal-header">
					<div class="terminal-dots">
						<span class="dot dot-red"></span>
						<span class="dot dot-yellow"></span>
						<span class="dot dot-green"></span>
					</div>
					<span class="terminal-title"
						>ProfilDeveloppeur.ts — Orizenh</span
					>
				</div>
				<div class="code-content">
					<span class="code-keyword">export class</span>
					<span class="code-type">GwenaelPigat</span>
					&#123;<br />
					&nbsp;&nbsp;<span class="code-keyword">public readonly</span>
					ROLE =
					<span class="code-string"
						>"Développeur Web Fullstack & Tech Lead"</span
					>;<br /><br />
					&nbsp;&nbsp;<span class="code-keyword">public</span>
					<span class="code-func">getExpertise</span>():
					<span class="code-type">string[]</span>
					&#123;<br />
					&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword"
						>return</span
					>
					[<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
						class="code-string">"Frontend: Svelte / SvelteKit, TS"</span
					>,<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
						class="code-string">"Backend: Node.js, Go, PHP / Symfony"</span
					>,<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
						class="code-string">"Applications Web & SaaS sur-mesure"</span
					>,<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
						class="code-string"
						>"Extensions Chrome (SidePanel API)"</span
					>,<br />
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
						class="code-string">"APIs REST, SQL & DevOps / Docker"</span
					><br />
					&nbsp;&nbsp;&nbsp;&nbsp;];<br />
					&nbsp;&nbsp;&#125;<br />
					&#125;
				</div>
			</div>

			<div class="floating-badge floating-badge-1">
				<div class="badge-icon badge-icon-purple">
					<i class="fa-solid fa-layer-group"></i>
				</div>
				<div class="badge-text">
					<strong>Fullstack & APIs</strong>
					<span>Frontend, Backend & Cloud</span>
				</div>
			</div>

			<div class="floating-badge floating-badge-2">
				<div class="badge-icon badge-icon-cyan">
					<i class="fa-solid fa-globe"></i>
				</div>
				<div class="badge-text">
					<strong>Sites & Applications Web</strong>
					<span>Conception sur-mesure</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		padding-top: 170px;
		padding-bottom: 90px;
		min-height: 92vh;
		display: flex;
		align-items: center;
	}

	.hero-grid {
		display: grid;
		grid-template-columns: 1.15fr 0.85fr;
		gap: 60px;
		align-items: center;
	}

	.hero-status-pill {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 6px 16px;
		background: rgba(16, 185, 129, 0.1);
		border: 1px solid rgba(16, 185, 129, 0.25);
		border-radius: 50px;
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--accent-emerald);
		margin-bottom: 24px;
	}

	.status-dot {
		width: 8px;
		height: 8px;
		background-color: var(--accent-emerald);
		border-radius: 50%;
		box-shadow: 0 0 10px var(--accent-emerald);
		animation: pulse-dot 2s infinite;
	}

	@keyframes pulse-dot {
		0%,
		100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(1.3);
			opacity: 0.6;
		}
	}

	.hero-title {
		font-size: clamp(2.2rem, 5vw, 3.75rem);
		font-weight: 800;
		line-height: 1.12;
		letter-spacing: -0.03em;
		margin-bottom: 20px;
	}

	.hero-subtitle {
		font-size: 1.2rem;
		color: var(--text-secondary);
		line-height: 1.7;
		margin-bottom: 36px;
		max-width: 620px;
	}

	.hero-actions {
		display: flex;
		align-items: center;
		gap: 18px;
		flex-wrap: wrap;
		margin-bottom: 50px;
	}

	.hero-stats {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		padding-top: 30px;
		border-top: 1px solid var(--border-light);
	}

	.stat-item {
		display: flex;
		flex-direction: column;
	}

	.stat-number {
		font-size: 2rem;
		font-weight: 800;
		color: var(--text-primary);
		letter-spacing: -0.02em;
	}

	.stat-label {
		font-size: 0.85rem;
		color: var(--text-muted);
		font-weight: 500;
	}

	.hero-visual {
		position: relative;
	}

	.profile-hero-wrapper {
		text-align: center;
	}

	.profile-hero-avatar {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		object-fit: cover;
		border: 3px solid var(--accent-cyan);
		box-shadow: 0 0 25px rgba(0, 242, 254, 0.4);
		margin-bottom: 16px;
	}

	.hero-code-card {
		background: var(--bg-card);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1px solid var(--border-glow);
		border-radius: var(--radius-lg);
		padding: 24px;
		box-shadow: var(--shadow-card), var(--shadow-glow-cyan);
		transition: transform var(--transition-normal);
	}

	.hero-code-card:hover {
		transform: translateY(-6px);
	}

	.terminal-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20px;
		padding-bottom: 12px;
		border-bottom: 1px solid var(--border-light);
	}

	.terminal-dots {
		display: flex;
		gap: 8px;
	}

	.dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}

	.dot-red {
		background: #ff5f56;
	}
	.dot-yellow {
		background: #ffbd2e;
	}
	.dot-green {
		background: #27c93f;
	}

	.terminal-title {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--text-muted);
	}

	.code-content {
		font-family: var(--font-mono);
		font-size: 0.88rem;
		line-height: 1.7;
		text-align: left;
	}

	.code-keyword {
		color: #f43f5e;
		font-weight: 600;
	}
	.code-func {
		color: #38bdf8;
	}
	.code-string {
		color: #34d399;
	}
	.code-type {
		color: #c084fc;
	}

	.floating-badge {
		position: absolute;
		padding: 12px 18px;
		background: rgba(15, 23, 42, 0.9);
		backdrop-filter: blur(16px);
		border: 1px solid var(--border-light);
		border-radius: var(--radius-md);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
		display: flex;
		align-items: center;
		gap: 12px;
		z-index: 2;
		animation: float 4s ease-in-out infinite;
	}

	.floating-badge-1 {
		top: -20px;
		right: -20px;
		animation-delay: 0s;
	}

	.floating-badge-2 {
		bottom: -25px;
		left: -20px;
		animation-delay: 2s;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.badge-icon {
		width: 36px;
		height: 36px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.2rem;
	}

	.badge-icon-cyan {
		background: rgba(0, 242, 254, 0.15);
		color: var(--accent-cyan);
	}

	.badge-icon-purple {
		background: rgba(168, 85, 247, 0.15);
		color: var(--accent-purple);
	}

	.badge-text strong {
		display: block;
		font-size: 0.9rem;
		color: var(--text-primary);
	}

	.badge-text span {
		font-size: 0.75rem;
		color: var(--text-muted);
	}

	@media (max-width: 1024px) {
		.hero {
			padding-top: 140px;
			padding-bottom: 70px;
			min-height: auto;
		}

		.hero-grid {
			grid-template-columns: 1fr;
			gap: 50px;
			text-align: center;
		}

		.hero-subtitle {
			margin-left: auto;
			margin-right: auto;
		}

		.hero-actions {
			justify-content: center;
		}

		.hero-stats {
			max-width: 650px;
			margin: 0 auto;
		}
	}

	@media (max-width: 768px) {
		.hero-status-pill {
			font-size: 0.78rem;
			padding: 5px 14px;
		}

		.hero-actions {
			flex-direction: column;
			width: 100%;
			gap: 12px;
		}

		.hero-actions :global(.btn) {
			width: 100%;
		}

		.hero-stats {
			grid-template-columns: 1fr;
			gap: 16px;
		}

		.stat-item {
			align-items: center;
			padding: 12px 0;
			border-bottom: 1px solid rgba(255, 255, 255, 0.06);
		}

		.stat-item:last-child {
			border-bottom: none;
		}
	}

	@media (max-width: 640px) {
		.hero-code-card {
			padding: 16px;
		}

		.terminal-title {
			font-size: 0.72rem;
		}

		.code-content {
			font-size: 0.78rem;
			overflow-x: auto;
		}

		.floating-badge {
			position: relative;
			top: auto;
			right: auto;
			bottom: auto;
			left: auto;
			animation: none;
			margin-top: 14px;
			width: 100%;
			justify-content: center;
		}
	}
</style>
