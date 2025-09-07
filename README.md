# Guy Binyamin – Portfolio

Personal portfolio website of **Guy Binyamin**, showcasing skills, projects, and ways to get in touch.

## 🌐 Live Demo

**https://guybenja.github.io/portfolio/**

## 📄 Features

- **Bilingual UI (EN/HE) + toggle** — full-length copy in both languages (no truncation).
- **Mobile hamburger navigation** — off-canvas menu with backdrop, ESC to close, body scroll-lock, and RTL awareness.
- **Responsive layout** — desktop & mobile, sticky top bar.
- **Projects showcase** — descriptions, links to code/demos/video/poster.
- **Contact form** — Formspree integration.
- **Privacy page** — `privacy.html`.
- **SEO basics** — `robots.txt` and `sitemap.xml`.

## 🛠️ Tech Stack

- **HTML5**
- **CSS3 (Vanilla)**
- **JavaScript (ES6)**
- **Formspree** (contact form)
- **GitHub Pages** (hosting)

## 📂 Project Structure

```

portfolio/
├─ index.html # Main site (EN/HE, hamburger nav)
├─ privacy.html # Privacy policy (EN/HE)
├─ style.css # Styles (responsive, RTL-aware)
├─ script.js # i18n + hamburger logic (accessibility)
├─ favicon.ico
├─ robots.txt # Points to /portfolio/sitemap.xml
├─ sitemap.xml # Lists index + privacy
└─ assets/ # Images, videos, posters (e.g., portrait.jpg, near_synonyms\__._)

```

## 🚀 Run Locally

**Quick open**

1. Clone:

```bash
git clone https://github.com/GuyBenja/portfolio.git
cd portfolio
```

2. Open `index.html` in your browser.

**Live reload (VS Code)**

1. Install the _Live Server_ extension
2. Open the folder in VS Code → “**Go Live**”
3. Desktop: open `http://127.0.0.1:5500/`
4. Phone (same Wi-Fi): `http://<your-lan-ip>:5500/`

**Simple local server (Python)**

```bash
cd portfolio
python -m http.server 8000
# desktop: http://localhost:8000
# phone:   http://<your-lan-ip>:8000
```

## 📬 Contact

- **Email:** [guybin56@gmail.com](mailto:guybin56@gmail.com)
- **Phone:** +972-50-903-4335
- **GitHub:** [GuyBenja](https://github.com/GuyBenja)
- **LinkedIn:** [Guy Binyamin](https://www.linkedin.com/in/guy-binyamin-1a4323286/)

---

© Guy Binyamin. All rights reserved.
