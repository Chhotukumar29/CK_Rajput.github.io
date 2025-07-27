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
      '@': path.resolve(__dirname, './src'),  // Add this line
    },
  },
});
