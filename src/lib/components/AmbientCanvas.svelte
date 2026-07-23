<script lang="ts">
	import { onMount } from 'svelte';

	let canvasElement: HTMLCanvasElement;

	onMount(() => {
		if (!canvasElement) return;
		const ctx = canvasElement.getContext('2d');
		if (!ctx) return;

		let animationFrameId: number;
		let width = (canvasElement.width = window.innerWidth);
		let height = (canvasElement.height = window.innerHeight);

		const handleResize = () => {
			if (!canvasElement) return;
			width = canvasElement.width = window.innerWidth;
			height = canvasElement.height = window.innerHeight;
		};

		window.addEventListener('resize', handleResize);

		const particles = Array.from({ length: 45 }, () => ({
			x: Math.random() * width,
			y: Math.random() * height,
			radius: Math.random() * 2 + 1,
			color: Math.random() > 0.5 ? 'rgba(0, 242, 254, ' : 'rgba(168, 85, 247, ',
			alpha: Math.random() * 0.5 + 0.1,
			speedX: (Math.random() - 0.5) * 0.4,
			speedY: (Math.random() - 0.5) * 0.4
		}));

		function animate() {
			if (!ctx) return;
			ctx.clearRect(0, 0, width, height);

			particles.forEach((p) => {
				p.x += p.speedX;
				p.y += p.speedY;

				if (p.x < 0) p.x = width;
				if (p.x > width) p.x = 0;
				if (p.y < 0) p.y = height;
				if (p.y > height) p.y = 0;

				ctx.beginPath();
				ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
				ctx.fillStyle = p.color + p.alpha + ')';
				ctx.shadowBlur = 10;
				ctx.shadowColor = p.color + '0.8)';
				ctx.fill();
			});

			animationFrameId = requestAnimationFrame(animate);
		}

		animate();

		return () => {
			window.removeEventListener('resize', handleResize);
			cancelAnimationFrame(animationFrameId);
		};
	});
</script>

<canvas id="ambient-canvas" bind:this={canvasElement}></canvas>
