import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Other Vite config options
    plugins: [
    tailwindcss(),
  ],
});
