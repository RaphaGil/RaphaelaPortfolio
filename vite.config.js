// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    // Ensure this plugin is added for Vite to use Tailwind
    require('@tailwindcss/vite')(), 
  ],
});
