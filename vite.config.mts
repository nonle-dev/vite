import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import zaloMiniApp from 'zmp-vite-plugin'

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [react(), zaloMiniApp()],
    base: '/',
    build: {
      outDir: "dist" 
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}
