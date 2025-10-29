import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT for GitHub Pages under /portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/'
})
