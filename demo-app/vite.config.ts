import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@clear/ui/styles',
        replacement: path.resolve(__dirname, '../dist/styles.css'),
      },
      {
        find: '@clear/ui',
        replacement: path.resolve(__dirname, '../dist/index.esm.js'),
      },
    ],
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      allow: ['..'],
    },
  },
  optimizeDeps: {
    include: ['@clear/ui'],
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
