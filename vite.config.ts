import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    target: 'es2020',
    cssTarget: 'chrome100',
    // three.js is genuinely large and is only pulled in by the lazily-imported
    // NeuralScene, so it must never be merged into the entry chunk. Everything
    // else is small enough that hand-splitting only adds request overhead.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three') || id.includes('@react-three')) {
            return 'three'
          }
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/motion')) {
            return 'motion'
          }
          if (id.includes('node_modules/react')) {
            return 'react-vendor'
          }
        },
      },
    },
    chunkSizeWarningLimit: 800,
  },
})
