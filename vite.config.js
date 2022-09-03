import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://nitendra-rana.github.io/haat/",
  plugins: [react()]
})
