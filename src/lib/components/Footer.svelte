<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<a href="#hero" class="footer-brand">
				<img src="/images/gwenael_pigat.jpg" alt="Gwenaël PIGAT" class="brand-avatar" />
				<span class="brand-name">Gwenaël <span class="gradient-text-cyan">PIGAT</span></span>
				<span class="brand-divider">|</span>
				<img src="/images/favicon.png" alt="Orizenh" class="brand-orizenh-logo" title="Orizenh Ecosystem" />
			</a>

			<div class="footer-links-group">
				<a
					href="https://github.com/Gwen-Pigat"
					target="_blank"
					rel="noopener"
					class="footer-link"
					title="GitHub"
				>
					<i class="fa-brands fa-github icon-social"></i> GitHub
				</a>
				<a
					href="https://www.linkedin.com/in/gwena%C3%ABl-pigat-a95a58aa/"
					target="_blank"
					rel="noopener"
					class="footer-link"
					title="LinkedIn"
				>
					<i class="fa-brands fa-linkedin icon-social icon-linkedin"></i> LinkedIn
				</a>
				<a href="https://tasker.orizenh.com" target="_blank" rel="noopener" class="footer-link">Tasker</a>
				<a href="https://qr-builder.orizenh.com" target="_blank" rel="noopener" class="footer-link">QR Builder</a>
				<a href="https://droplink.orizenh.com" target="_blank" rel="noopener" class="footer-link">DropLink</a>
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

	.footer-brand {
		display: flex;
		align-items: center;
		gap: 12px;
		text-decoration: none;
		color: var(--text-primary);
		font-weight: 800;
		font-size: 1.25rem;
		letter-spacing: -0.02em;
	}

	.brand-avatar {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		object-fit: cover;
		border: 2px solid var(--accent-cyan);
	}

	.brand-divider {
		opacity: 0.3;
		margin: 0 4px;
		font-weight: 300;
	}

	.brand-orizenh-logo {
		height: 40px;
		opacity: 0.85;
	}

	.footer-links-group {
		display: flex;
		gap: 20px;
		align-items: center;
		flex-wrap: wrap;
	}

	.footer-link {
		color: var(--text-secondary);
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 500;
		transition: color var(--transition-fast);
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}

	.footer-link:hover {
		color: var(--text-primary);
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

	@media (max-width: 768px) {
		.footer {
			padding: 40px 0 25px 0;
		}

		.footer-content {
			flex-direction: column;
			gap: 24px;
			text-align: center;
		}

		.footer-brand {
			flex-direction: row;
			justify-content: center;
			flex-wrap: wrap;
			gap: 8px;
			font-size: 1.1rem;
		}

		.brand-divider {
			display: none;
		}

		.footer-links-group {
			justify-content: center;
			gap: 16px;
			flex-wrap: wrap;
		}

		.footer-copy {
			font-size: 0.78rem;
			line-height: 1.6;
			padding-top: 20px;
		}
	}

	@media (max-width: 480px) {
		.footer-links-group {
			flex-direction: column;
			gap: 12px;
		}
	}
</style>
