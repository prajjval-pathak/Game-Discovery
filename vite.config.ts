import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      host: true,
      proxy: {
        '/api': {
          target: 'https://api.rawg.io/api',
          changeOrigin: true,
          rewrite: (path) => {
            const newPath = path.replace(/^\/api/, '');
            const separator = newPath.includes('?') ? '&' : '?';
            return `${newPath}${separator}key=${env.RAWG_API_KEY}`;
          },
        },
      },
    },
  };
});
