import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/adith2005-20.github.io/',  
  build: {
    outDir: 'dist', // Ensure output goes to 'dist'
    assetsDir: 'assets',
  },
});
