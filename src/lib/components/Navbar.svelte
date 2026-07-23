<script lang="ts">
	import { onMount } from 'svelte';

	let isScrolled = $state(false);
	let isMobileMenuOpen = $state(false);
	let activeSection = $state('hero');

	const sections = ['hero', 'projects', 'skills', 'about', 'contact'];

	function handleScroll() {
		isScrolled = window.scrollY > 50;

		if (window.scrollY < 100) {
			activeSection = 'hero';
			return;
		}

		let currentSection = 'hero';
		const targetY = window.scrollY + 250;

		for (const secId of sections) {
			const el = document.getElementById(secId);
			if (el) {
				const rect = el.getBoundingClientRect();
				const top = rect.top + window.scrollY;
				const height = rect.height;

				if (targetY >= top && targetY < top + height) {
					currentSection = secId;
				}
			}
		}
		activeSection = currentSection;
	}

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
		document.body.style.overflow = '';
	}

	onMount(() => {
		handleScroll();
		setTimeout(handleScroll, 100);
	});
</script>

<svelte:window onscroll={handleScroll} />

<header class="navbar" class:scrolled={isScrolled} id="navbar">
	<div class="container nav-container">
		<a href="#hero" class="nav-brand" onclick={closeMobileMenu}>
			<img src="/images/gwenael_pigat.jpg" alt="Gwenaël PIGAT" class="brand-avatar">
			<span class="brand-name">Gwenaël <span class="gradient-text-cyan">PIGAT</span></span>
			<span class="brand-divider">|</span>
			<img src="/images/favicon.png" alt="Orizenh" class="brand-orizenh-logo" title="Orizenh Ecosystem">
		</a>

		<nav class="desktop-nav">
			<ul class="nav-links">
				<li>
					<a href="#hero" class="nav-link" class:active={activeSection === 'hero'}>Accueil</a>
				</li>
				<li>
					<a href="#projects" class="nav-link" class:active={activeSection === 'projects'}>Réalisations</a>
				</li>
				<li>
					<a href="#skills" class="nav-link" class:active={activeSection === 'skills'}>Compétences</a>
				</li>
				<li>
					<a href="#about" class="nav-link" class:active={activeSection === 'about'}>À Propos</a>
				</li>
			</ul>
		</nav>

		<div class="nav-cta desktop-cta">
			<a
				href="https://github.com/Gwen-Pigat"
				target="_blank"
				rel="noopener"
				class="btn btn-glass btn-sm btn-icon"
				title="Profil GitHub"
			>
				<i class="fa-brands fa-github icon-social"></i>
			</a>
			<a
				href="https://www.linkedin.com/in/gwena%C3%ABl-pigat-a95a58aa/"
				target="_blank"
				rel="noopener"
				class="btn btn-glass btn-sm btn-icon"
				title="Profil LinkedIn"
			>
				<i class="fa-brands fa-linkedin icon-social icon-linkedin"></i>
			</a>
			<a href="#contact" class="btn btn-primary btn-sm">
				<i class="fa-solid fa-paper-plane"></i> Me Contacter
			</a>
		</div>

		<!-- MOBILE MENU TOGGLE BUTTON -->
		<button
			class="mobile-toggle-btn"
			aria-label="Toggle mobile menu"
			aria-expanded={isMobileMenuOpen}
			onclick={toggleMobileMenu}
		>
			<i class="fa-solid {isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}"></i>
		</button>
	</div>

	<!-- MOBILE MENU DRAWER -->
	{#if isMobileMenuOpen}
		<div class="mobile-nav-backdrop" onclick={closeMobileMenu} role="presentation"></div>
		<div class="mobile-nav-drawer" class:open={isMobileMenuOpen}>
			<ul class="mobile-nav-links">
				<li>
					<a href="#hero" class="mobile-nav-link" class:active={activeSection === 'hero'} onclick={closeMobileMenu}>
						<i class="fa-solid fa-house"></i> Accueil
					</a>
				</li>
				<li>
					<a href="#projects" class="mobile-nav-link" class:active={activeSection === 'projects'} onclick={closeMobileMenu}>
						<i class="fa-solid fa-laptop-code"></i> Réalisations
					</a>
				</li>
				<li>
					<a href="#skills" class="mobile-nav-link" class:active={activeSection === 'skills'} onclick={closeMobileMenu}>
						<i class="fa-solid fa-code"></i> Compétences
					</a>
				</li>
				<li>
					<a href="#about" class="mobile-nav-link" class:active={activeSection === 'about'} onclick={closeMobileMenu}>
						<i class="fa-solid fa-user-astronaut"></i> À Propos
					</a>
				</li>
				<li>
					<a href="#contact" class="mobile-nav-link" class:active={activeSection === 'contact'} onclick={closeMobileMenu}>
						<i class="fa-solid fa-paper-plane"></i> Contact
					</a>
				</li>
			</ul>

			<div class="mobile-social-cta">
				<a href="https://github.com/Gwen-Pigat" target="_blank" rel="noopener" class="btn btn-glass btn-full-width">
					<i class="fa-brands fa-github icon-social"></i> GitHub
				</a>
				<a href="https://www.linkedin.com/in/gwena%C3%ABl-pigat-a95a58aa/" target="_blank" rel="noopener" class="btn btn-glass btn-full-width">
					<i class="fa-brands fa-linkedin icon-social icon-linkedin"></i> LinkedIn
				</a>
				<a href="#contact" class="btn btn-cyan btn-full-width" onclick={closeMobileMenu}>
					<i class="fa-solid fa-paper-plane"></i> Me Contacter
				</a>
			</div>
		</div>
	{/if}
</header>

<style>
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
		padding: 20px 0;
		transition: all var(--transition-normal);
	}

	.navbar:global(.scrolled) {
		padding: 12px 0;
		background: var(--bg-nav);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border-bottom: 1px solid var(--border-light);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
	}

	.nav-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.nav-brand {
		display: flex;
		align-items: center;
		gap: 12px;
		text-decoration: none;
		color: var(--text-primary);
		font-weight: 800;
		font-size: 1.35rem;
		letter-spacing: -0.02em;
	}

	.brand-avatar {
		width: 38px;
		height: 38px;
		border-radius: 50%;
		object-fit: cover;
		border: 2px solid var(--accent-cyan);
		box-shadow: 0 0 12px rgba(0, 242, 254, 0.4);
	}

	.brand-divider {
		opacity: 0.3;
		margin: 0 4px;
		font-weight: 300;
	}

	.brand-orizenh-logo {
		height: 48px;
		opacity: 0.85;
		filter: drop-shadow(0 0 8px rgba(0, 221, 255, 0.4));
		transition: opacity var(--transition-fast);
	}

	.brand-orizenh-logo:hover {
		opacity: 1;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 32px;
		list-style: none;
	}

	.nav-link {
		color: var(--text-secondary);
		text-decoration: none;
		font-weight: 500;
		font-size: 0.95rem;
		transition: color var(--transition-fast);
		position: relative;
	}

	.nav-link:hover,
	.nav-link:global(.active) {
		color: var(--text-primary);
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -6px;
		left: 0;
		width: 0;
		height: 2px;
		background: linear-gradient(90deg, var(--accent-cyan), var(--accent-purple));
		transition: width var(--transition-normal);
		border-radius: 2px;
	}

	.nav-link:hover::after,
	.nav-link:global(.active)::after {
		width: 100%;
	}

	.nav-cta {
		display: flex;
		align-items: center;
		gap: 14px;
	}

	.mobile-toggle-btn {
		display: none;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid var(--border-light);
		color: var(--text-primary);
		width: 42px;
		height: 42px;
		border-radius: var(--radius-sm);
		font-size: 1.25rem;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		transition: all var(--transition-fast);
		z-index: 102;
	}

	.mobile-toggle-btn:hover {
		background: rgba(255, 255, 255, 0.12);
		border-color: var(--accent-cyan);
		color: var(--accent-cyan);
	}

	.mobile-nav-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		z-index: 98;
		animation: fadeIn 0.25s ease-out forwards;
	}

	.mobile-nav-drawer {
		position: fixed;
		top: 0;
		right: 0;
		width: 82vw;
		max-width: 340px;
		height: 100vh;
		background: rgba(7, 9, 19, 0.96);
		backdrop-filter: blur(24px);
		-webkit-backdrop-filter: blur(24px);
		border-left: 1px solid var(--border-glow);
		box-shadow: -10px 0 40px rgba(0, 0, 0, 0.8);
		padding: 85px 24px 30px 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		z-index: 99;
		overflow-y: auto;
		animation: slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	@keyframes slideInRight {
		from { transform: translateX(100%); }
		to { transform: translateX(0); }
	}

	.mobile-nav-links {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.mobile-nav-link {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 14px 18px;
		border-radius: var(--radius-md);
		color: var(--text-secondary);
		text-decoration: none;
		font-size: 1.05rem;
		font-weight: 600;
		transition: all var(--transition-fast);
		border: 1px solid transparent;
		background: rgba(255, 255, 255, 0.02);
	}

	.mobile-nav-link i {
		color: var(--accent-cyan);
		width: 22px;
		font-size: 1.1rem;
	}

	.mobile-nav-link:hover,
	.mobile-nav-link:global(.active) {
		color: #fff;
		background: rgba(99, 102, 241, 0.15);
		border-color: var(--border-glow);
	}

	.mobile-social-cta {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding-top: 20px;
		border-top: 1px solid var(--border-light);
	}

	@media (max-width: 1024px) {
		.desktop-nav,
		.desktop-cta {
			display: none !important;
		}

		.mobile-toggle-btn {
			display: inline-flex !important;
		}
	}

	@media (max-width: 640px) {
		.navbar {
			padding: 14px 0;
		}

		.nav-brand {
			font-size: 1.1rem;
			gap: 8px;
		}

		.brand-avatar {
			width: 32px;
			height: 32px;
		}

		.brand-divider {
			display: none;
		}

		.brand-orizenh-logo {
			height: 38px;
		}
	}
</style>
