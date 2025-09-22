import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/Verza-frontend/', // <-- must match repo name exactly
  plugins: [react()],
});
