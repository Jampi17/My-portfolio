import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'images',
  server: {
    host: true,
    allowedHosts: ['997f9de58b3c.ngrok-free.app'],
    hmr: { host: '997f9de58b3c.ngrok-free.app' }
  }
})
