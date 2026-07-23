<script lang="ts">
	import { onMount } from 'svelte';

	let isScrolled = $state(false);
	let activeSection = $state('hero');

	const sections = ['hero', 'projects', 'skills', 'about'];

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

	onMount(() => {
		handleScroll();
		setTimeout(handleScroll, 100);
	});
</script>

<svelte:window onscroll={handleScroll} />

<header class="navbar" class:scrolled={isScrolled} id="navbar">
	<div class="container nav-container">
		<a href="#hero" class="nav-brand">
			<img src="/images/gwenael_pigat.jpg" alt="Gwenaël PIGAT" class="brand-avatar">
			<span>Gwenaël <span class="gradient-text-cyan">PIGAT</span></span>
			<span class="brand-divider">|</span>
			<img src="/images/favicon.png" alt="Orizenh" class="brand-orizenh-logo" title="Orizenh Ecosystem">
		</a>

		<nav>
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

		<div class="nav-cta">
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
	</div>
</header>
