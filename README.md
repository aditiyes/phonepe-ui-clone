# PayFlow – Digital Payment App UI Clone

PayFlow is an original, responsive frontend concept for an Indian digital payments app. It brings everyday transfers, bill payments, account activity, and rewards into one calm, mobile-first dashboard. The app uses fictional branding and sample data; every action is a UI demo.

## Key features

- Responsive dashboard with balance card, quick payment actions, bills, and financial services
- Balance visibility control and theme preference saved in localStorage
- Search filter for recent transaction records
- Demo action feedback using Bootstrap toasts
- Scan & Pay modal with a decorative QR placeholder
- Rotating promotional carousel and active bottom navigation
- Accessible labels, keyboard-operable controls, and reduced-motion support
- No account, backend, or payment provider required

## Technologies used

- HTML5 and CSS3
- Bootstrap 5.3 via CDN
- Bootstrap Icons via CDN
- Vanilla JavaScript and browser localStorage

## Folder structure

```text
phonepe-ui-clone/
├── index.html
├── README.md
├── assets/
│   ├── images/
│   ├── icons/
│   └── screenshots/
├── css/
│   ├── style.css
│   └── responsive.css
└── js/
    └── script.js
```

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a modern browser, or use the VS Code **Live Server** extension and choose **Open with Live Server**.
3. An internet connection is needed for the Bootstrap, Bootstrap Icons, and Google Fonts CDNs. The static page itself does not need a build step.

## Responsive design

The layout is designed mobile-first, with a fixed bottom navigation on small screens, compact touch targets, and a single-column account dashboard. Tablet widths move the account overview into a stacked layout, while wider screens use a two-column dashboard and expanded service grids. Additional breakpoints refine spacing and typography for narrow phones.

## Screenshots

Add project screenshots to `assets/screenshots/` and link them here. For example:

```md
![PayFlow mobile dashboard](assets/screenshots/mobile-dashboard.png)
![PayFlow desktop dashboard](assets/screenshots/desktop-dashboard.png)
```

## Future improvements

- Add a dedicated profile and rewards view with richer demo states
- Add transaction category filters and date grouping
- Add installable PWA metadata and offline font/icon fallbacks
- Add browser-based accessibility and responsive visual regression tests

## Disclaimer

This is an educational frontend UI project. It does not process real payments, connect to banking or UPI services, or use official PhonePe assets. All names, balances, transactions, and offers shown are fictional sample data.

## GitHub repository setup

Create an empty repository on GitHub (for example, `phonepe-ui-clone`), then open a terminal in this folder and run:

```bash
git init
git add index.html README.md css js assets
git commit -m "Build PayFlow digital payments UI"
git branch -M main
git remote add origin https://github.com/<your-username>/phonepe-ui-clone.git
git push -u origin main
```

To publish a static demo with GitHub Pages, open the repository's **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. The site will be available at `https://<your-username>.github.io/phonepe-ui-clone/` after Pages finishes deploying.