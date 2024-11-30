import { defineConfig } from 'vite'; // Only import once
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Nehal/', 
  plugins: [react()],
});
