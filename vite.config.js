import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // Sirf compress karo, WebP/AVIF mat generate karo
      png: {
        quality: 75,
        effort: 7,
      },
      jpeg: {
        quality: 75,
        progressive: true,
        mozjpeg: true,
      },
      // WebP/AVIF disable karo
      webp: false,
      avif: false,
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
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
      },
    },
  },
})