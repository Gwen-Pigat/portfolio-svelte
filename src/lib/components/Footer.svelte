<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<a href="#hero" class="nav-brand">
				<img src="/images/gwenael_pigat.jpg" alt="Gwenaël PIGAT" class="brand-avatar" />
				<span>Gwenaël <span class="gradient-text-cyan">PIGAT</span></span>
				<span class="brand-divider">|</span>
				<img src="/images/favicon.png" alt="Orizenh" class="brand-orizenh-logo" title="Orizenh Ecosystem" />
			</a>

			<div class="footer-links-group">
				<a
					href="https://github.com/Gwen-Pigat"
					target="_blank"
					rel="noopener"
					class="nav-link"
					title="GitHub"
				>
					<i class="fa-brands fa-github icon-social"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/gwena%C3%ABl-pigat-a95a58aa/"
					target="_blank"
					rel="noopener"
					class="nav-link"
					title="LinkedIn"
				>
					<i class="fa-brands fa-linkedin icon-social icon-linkedin"></i>
				</a>
				<a href="https://tasker.orizenh.com" target="_blank" class="nav-link">Tasker</a>
				<a href="https://qr-builder.orizenh.com" target="_blank" class="nav-link">QR Builder</a>
				<a href="https://droplink.orizenh.com" target="_blank" class="nav-link">DropLink</a>
			</div>
		</div>

		<div class="footer-copy">
			<img src="/images/favicon.png" alt="Orizenh" class="footer-orizenh-img" />
			<span>Portfolio de Gwenaël PIGAT — Développeur Web PHP / Symfony & Tech Lead. Orizenh.</span>
		</div>
	</div>
</footer>

<style>
	.footer {
		padding: 60px 0 30px 0;
		border-top: 1px solid var(--border-light);
		background: #04060c;
	}

	.footer-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 40px;
	}

	.footer-links-group {
		display: flex;
		gap: 20px;
		align-items: center;
		flex-wrap: wrap;
	}

	.footer-copy {
		color: var(--text-muted);
		font-size: 0.85rem;
		text-align: center;
		padding-top: 30px;
		border-top: 1px solid rgba(255, 255, 255, 0.05);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		flex-wrap: wrap;
	}

	.footer-orizenh-img {
		height: 22px;
		opacity: 0.85;
	}

	@media (max-width: 1024px) {
		.footer-content {
			flex-direction: column;
			gap: 24px;
			text-align: center;
		}

		.footer-links-group {
			justify-content: center;
		}
	}
</style>
