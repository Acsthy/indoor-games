# Office Games Tournament Management Platform

A premium, fully responsive web application for managing office sports tournaments, built entirely as a static frontend application with React. It uses `localStorage` for data persistence, allowing it to be hosted entirely free on GitHub Pages without any backend servers, databases, or API requirements.

## 🚀 Key Features

*   **100% Client-Side:** No server, database, PHP, or Node.js required for deployment.
*   **Data Persistence:** Uses `localStorage` to save all events, matches, and configurations across browser refreshes.
*   **Admin Dashboard:** Comprehensive control panel for Events, Teams, Players, and Categories.
*   **Complex Tournament Logic:** Supports automated bracket creation, standings calculation, point logs, and various match formats (Knockout, Round Robin, etc.).
*   **Data Portability:** Export your entire tournament structure (as a JSON backup) and import it on any other device/browser.
*   **Premium SaaS Design:** Dream11-inspired aesthetics with glassmorphism, responsive data-grids, CSS micro-animations, and dynamic charts.

## 🔗 GitHub Pages Deployment Instructions

This project is pre-configured to be deployed for free on GitHub Pages out of the box using Vite and HashRouting (which prevents 404 errors on reload when hosted statically).

Follow these exact steps to host it on GitHub Pages:

### 1. Create GitHub Repository
Create a new, empty repository on your GitHub account (e.g., `office-games`).

### 2. Upload Project
Initialize git inside your local project folder and push it to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

### 3. Build/Deploy with GitHub Actions (Recommended)
Because we are using Vite, the easiest way to deploy is via GitHub Actions.

1. Go to your repository **Settings** → **Pages**.
2. Under "Source" (Build and deployment), select **GitHub Actions**.
3. GitHub will suggest templates. If it suggests a **Static HTML** or **Node.js** workflow, you can use that, BUT it's easier to use the official vite workflow:
4. Create a folder in your repo `.github/workflows/` and add a file `deploy.yml` with the following content (or just configure it through the UI):

```yml
# .github/workflows/deploy.yml
name: Deploy static content to Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. Open GitHub Pages URL
Once the Action finishes running, your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`. 

**Note**: In `vite.config.js`, the `base` property is set to `'./'` which uses relative paths, making it highly compatible with GitHub Pages subdirectory hosting.

---

## 🔒 Security Notice: Demo Authentication
This application uses a simulated, client-side authentication mechanism. 
*   **Username:** `admin`
*   **Password:** `99999`

Because this is a static frontend deployment on GitHub Pages (with no backend server), it is **impossible** to implement secure credential verification. The logic resides in the downloaded JavaScript bundle. **This app is designed for internal, demonstrative, or low-stakes office fun.** Do not store sensitive company data.

---

## 💻 Local Development

To run the platform on your own computer:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit the `http://localhost:5173` URL shown in your terminal.
