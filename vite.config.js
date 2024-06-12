import vituum from 'vituum';
import pug from '@vituum/vite-plugin-pug';

export default {
  plugins: [
    vituum({
      imports: {
        filenamePattern: {
          '+.css': [],
          '+.scss': 'src/styles',
        },
      },
    }),
    pug({
      root: './src/',
    }),
  ],
  build: {
    outDir: './build',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/css/[name].[ext]',
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js',
      },
    },
  },
  server: {
    host: true,
    open: true,
  },
};
