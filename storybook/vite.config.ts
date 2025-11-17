import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@clear/ui',
        // Use library source directly for Storybook to get live updates
        replacement: path.resolve(__dirname, '../src/index.ts'),
      },
    ],
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      // Разрешаем доступ к родительской директории для импорта стилей из src/
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
