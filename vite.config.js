import { resolve } from 'path'

export default {
    root: resolve(__dirname, 'src'),
    base: './',
    build: {
    outDir: '../dist',
    rollupOptions: {
        input: {
            main: resolve(__dirname, 'src/index.html'),
            fucinn: resolve(__dirname, 'src/fucinn.html'),
            inove: resolve(__dirname, 'src/inove.html'),
            lavinia: resolve(__dirname, 'src/lavinia.html'),
            livia: resolve(__dirname, 'src/livia.html'),
            teteu: resolve(__dirname, 'src/teteu.html'),
            tiebreak: resolve(__dirname, 'src/tiebreak.html'),
            vital: resolve(__dirname, 'src/vital.html'),
            nina: resolve(__dirname, 'src/nina.html'),
        }
    }
    },
    server: {
    port: 5173
    },
  // Optional: Silence Sass deprecation warnings. See note below.
    css: {
        preprocessorOptions: {
        scss: {
            silenceDeprecations: [
            'import',
            'color-functions',
            'global-builtin',
            ],
        },
    },
    },
}