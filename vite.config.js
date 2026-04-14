import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import thumbnailPlugin from './vite-plugin-thumbnail.js'

export default defineConfig({
  plugins: [thumbnailPlugin(), react()],
})
