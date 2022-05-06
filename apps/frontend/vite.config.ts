import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002,
    proxy: {
      '/api': 'http://localhost:3003',
    },
  },
  plugins: [react()],
});
