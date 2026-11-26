# Gowri Balan — Full Stack Developer Portfolio

A responsive, light-theme portfolio built with React and Vite. The content is based on the supplied resume.

## Included sections
- Home / introduction
- About
- Technical skills
- Work experience
- Featured projects
- Education and certifications
- Contact details

## Run locally

1. Install Node.js (LTS recommended).
2. Extract this project and open the folder in VS Code.
3. Open a terminal in the project folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The production website is generated in the `dist` folder.

## Publish free using GitHub Pages

### Recommended: GitHub Actions
1. Create a GitHub repository named `gowri-balan-portfolio` (or another name).
2. Upload/push all files and folders from this project to the repository.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. The project already includes `.github/workflows/deploy.yml`; no need to create it again.



6. Push the project files, including the workflow, to the `main` branch. GitHub Actions will build and publish the site.
7. Your website address will be similar to `https://YOUR-GITHUB-USERNAME.github.io/gowri-balan-portfolio/`.

The Vite configuration uses a relative base path (`./`) so it works when hosted under a repository subpath.

## Personalise before publishing
- Confirm that the LinkedIn and GitHub profile URLs in your resume are current, then add them to the contact area if desired.
- Add approved project screenshots or live demo / source-code links where you have permission to share them.
- If you want a downloadable resume button, place your PDF in `public/Gowri-Balan-Resume.pdf` and add a link to `/Gowri-Balan-Resume.pdf`.
- Review the displayed education details and contact information before publishing.

## Notes
- Project descriptions are limited to information in the supplied resume.
- No unverified metrics, client names, project outcomes, or live project links have been added.
- Google Fonts are loaded online; the site remains usable with fallback fonts if unavailable.


## Project screenshots
The `public/images` folder contains the three screenshots supplied for Thumbee, MTravelo and AyurCare/AyurNidan. The same Ayurvedic project is presented as **AyurCare (AyurNidan)**, not as two separate projects. The CRM and travel project cards currently both use the supplied MTravelo screenshot because only one MTravelo image was provided.
