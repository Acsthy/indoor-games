import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages deployment: set base to your repo name
// e.g., base: '/office-games/' — or leave as './' for root deployments
export default defineConfig({
  plugins: [react()],
  base: './', // relative base for GH Pages compatibility
})
