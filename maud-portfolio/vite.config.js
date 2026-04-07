import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // BELANGRIJK: Vervang dit door de exacte naam van je GitHub repo
  base: '/maud_genin/', 
  plugins: [
    react(),
    tailwindcss(),
  ],
})