import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative paths work on both a GitHub Pages project site and local preview.
  base: './',
})
