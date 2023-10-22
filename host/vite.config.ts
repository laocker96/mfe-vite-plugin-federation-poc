import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'app',
            remotes: {
                remoteApp: 'http://localhost:5001/assets/remoteEntry.js',
                /*nextRemoteApp: {
                    external: 'http://localhost:3000/_next/static/chunks/remoteEntry.js',
                    externalType: 'url',
                    format: "esm",
                    from: "webpack"
                }*/
            },
            shared: ['react', 'react-dom', 'react-router-dom']
        })],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
        /*rollupOptions: {
            output: {
                format: 'esm',
                entryFileNames: 'assets/[name].js',
                minifyInternalExports: false
            }
        }*/
    }
})
