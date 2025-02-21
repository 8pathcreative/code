import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { createHtmlPlugin } from 'vite-plugin-html';
export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Code Tutorials',
          description: 'A curated collection of the best resources for designers and developers. This platform provides a searchable directory of tutorials, tools, and learning materials to help developers and designers enhance their skills.',
        },
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
