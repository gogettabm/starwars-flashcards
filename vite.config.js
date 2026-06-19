import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Required so assets resolve correctly on GitHub Pages, which serves the
  // site from https://<user>.github.io/<repo>/ rather than the domain root.
  base: '/starwars-flashcards/',
})
