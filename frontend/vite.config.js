import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Default is 5173
    proxy: {
      '/api': {
        target: 'https://soulsync-plkm.onrender.com/', // Proxy API requests to backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase the chunk size warning limit to 1000 kB
  },
});
