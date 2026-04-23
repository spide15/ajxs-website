import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ajxs-website/',
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalizedId = id.replace(/\\/g, '/')

          if (normalizedId.includes('/node_modules/')) {
            if (normalizedId.includes('/react/')) return 'vendor-react'
            if (normalizedId.includes('/react-dom/')) return 'vendor-react-dom'
            if (normalizedId.includes('/lucide-react/')) return 'vendor-lucide'
            if (normalizedId.includes('/framer-motion/')) return 'vendor-motion'
            if (normalizedId.includes('/tailwindcss/') || normalizedId.includes('/postcss/') || normalizedId.includes('/autoprefixer/')) return 'vendor-css'
            return 'vendor'
          }

          if (normalizedId.includes('/src/components/') || normalizedId.includes('/src/lib/') || normalizedId.includes('/src/utils/')) {
            return 'common'
          }
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  }
})
