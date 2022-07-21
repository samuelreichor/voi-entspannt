import legacy from '@vitejs/plugin-legacy'
import ViteRestart from 'vite-plugin-restart';
import { nodeResolve } from '@rollup/plugin-node-resolve';
// import critical from 'rollup-plugin-critical';
import path from 'path';

// https://vitejs.dev/config/
export default ({ command }) => ({
    base: command === 'serve' ? '' : '/dist/',
    publicDir: './assets/public',
    build: {
        emptyOutDir: true,
        manifest: true,
        outDir: './web/dist',
        rollupOptions: {
            input: {
                app: './assets/js/app.js',
            },
            output: {
                sourcemap: true
            },
        }
    },
    plugins: [
        // critical({
        //     criticalUrl: 'https://nystudio107.com',
        //     criticalBase: '../cms/web/dist/criticalcss/',
        //     criticalPages: [
        //         { uri: '/', template: 'index' },
        //     ],
        //     criticalConfig: {
        //     }
        // }),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
        nodeResolve({
            moduleDirectories: [
                path.resolve('./node_modules'),
            ],
        }),
        ViteRestart({
            reload: [
                './assets/**/*',
                './templates/**/*',
            ],
        }),
        // Static Asset Fixer, see: https://github.com/vitejs/vite/issues/2394
        // {
        //     name: 'static-asset-fixer',
        //     enforce: 'post',
        //     apply: 'serve',
        //     transform: (code, id) => {
        //         return {
        //             code: code.replace(/\/src\/(.*)\.(svg|jp?g|png|webp)/g, 'http://localhost:3000/src/$1.$2'),
        //             map: null,
        //         }
        //     },
        // },
    ],
});