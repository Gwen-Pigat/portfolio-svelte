/**
 * Svelte action that adds a CSS class when an element becomes visible in the viewport.
 */
export function reveal(node: HTMLElement, options?: { threshold?: number; once?: boolean }) {
	const threshold = options?.threshold ?? 0.15;
	const once = options?.once ?? true;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					if (once) {
						observer.unobserve(node);
					}
				} else if (!once) {
					node.classList.remove('is-visible');
				}
			});
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
