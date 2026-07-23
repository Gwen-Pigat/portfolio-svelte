<script lang="ts">
	import AmbientCanvas from '$lib/components/AmbientCanvas.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { reveal } from '$lib/actions/reveal';
</script>

<!-- Fond Ambiant Particules Canvas -->
<AmbientCanvas />
<div class="glow-orb glow-orb-1"></div>
<div class="glow-orb glow-orb-2"></div>
<div class="glow-orb glow-orb-3"></div>

<!-- Composants de Page -->
<Navbar />

<!-- Hero renders immediately on load -->
<Hero />

<!-- Lower sections animate on scroll -->
<div use:reveal class="reveal-on-scroll">
	<Projects />
</div>

<div use:reveal class="reveal-on-scroll">
	<Skills />
</div>

<div use:reveal class="reveal-on-scroll">
	<About />
</div>

<div use:reveal class="reveal-on-scroll">
	<Contact />
</div>

<div use:reveal class="reveal-on-scroll">
	<Footer />
</div>
