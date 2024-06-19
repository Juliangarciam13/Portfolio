import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ajustar la base URL según el nombre del repositorio
export default defineConfig({
  base: '/Portfolio/', // base URL para GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'docs' // Configuración de salida para la carpeta docs
  }
})
