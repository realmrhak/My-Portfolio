import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 75,
        effort: 7,
      },
      jpeg: {
        quality: 75,
        progressive: true,
        mozjpeg: true,
      },
      webp: {
        quality: 75,
        effort: 4,
        lossless: false,
      },
      avif: {
        quality: 60,
        effort: 4,
      },
      svg: {
        multipass: true,
      },
      include: /^.*\.(png|jpe?g|svg|gif)$/i,
      exclude: /node_modules/,
    }),
  ],
  base: '/',
  build: {
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|webp|avif/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
      },
    },
  },
})