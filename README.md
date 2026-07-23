# Portfolio Gwenaël PIGAT — Orizenh

Modern, fullstack developer portfolio website built with **SvelteKit 2**, **Svelte 5**, **TypeScript**, and **Tailwind CSS v4**.

## 🚀 Key Features

- **Cyber-Modern Glassmorphism Aesthetic**: Dark mode design system with ambient floating particle background canvas and vibrant gradients.
- **Scroll-Triggered Reveal Animations**: Smooth entry animations using native `IntersectionObserver` scroll actions (`use:reveal`).
- **Interactive Scroll-Spy Navigation**: Auto-detects active page sections and updates header navigation link highlights dynamically using absolute document coordinates.
- **Fullstack Email Contact API**: Integrated SvelteKit server route (`/api/contact`) supporting SMTP email delivery via `nodemailer` and Brevo.
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

- **Framework**: [SvelteKit 2](https://kit.svelte.dev/) with [Svelte 5](https://svelte.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS variables
- **Icons & Typography**: FontAwesome 6, Google Fonts (*Plus Jakarta Sans*, *JetBrains Mono*)
- **Email Service**: [Nodemailer](https://nodemailer.com/) with SMTP credentials
- **Build Tool**: [Vite 8](https://vitejs.dev/)

---

## 💻 Getting Started

### Prerequisites

Ensure you have **Node.js 18+** installed.

### Installation

1. Clone the repository and navigate to the `svelte` directory:
   ```bash
   git clone git@github.com:Gwen-Pigat/portfolio-svelte.git
   cd portfolio-svelte
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file for SMTP email configuration (optional in local development):
   ```env
   PORT=3000
   SMTP_HOST=smtp-relay.brevo.com
   SMTP_PORT=587
   SMTP_USER=your_smtp_user
   SMTP_PASS=your_smtp_password
   SMTP_FROM=portfolio@orizenh.com
   CONTACT_TO_EMAIL=gwenael.pigat@gmail.com
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 📦 Scripts

- `npm run dev`: Start local development server
- `npm run check`: Run TypeScript and Svelte diagnostics check
- `npm run build`: Build production bundle
- `npm run preview`: Preview production build locally

---

## 📄 License

© Gwenaël PIGAT — Orizenh Ecosystem. All rights reserved.
