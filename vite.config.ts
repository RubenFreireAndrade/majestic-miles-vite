import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // LEAVING THIS HERE.
    // build: {
    //     manifest: true,
    //     rollupOptions: {
    //         input: './src/main.tsx',
    //     },
    // },
    // server: {
    //     proxy: {
    //         '/api': 'http://localhost:3000/', // the address that u serve in the backend
    //     },
    // },
});
