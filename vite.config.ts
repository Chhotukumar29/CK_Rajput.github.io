import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { writeFileSync } from 'fs';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    {
      name: 'create-nojekyll',
      writeBundle() {
        writeFileSync('dist/.nojekyll', '');
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `[name][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
});
