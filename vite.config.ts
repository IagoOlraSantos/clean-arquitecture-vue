import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from '@rollup/plugin-alias'

const rootDir = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), alias()],
    resolve: {
        alias: {
            '@': resolve(rootDir, './src'),
            '@/tests': resolve(rootDir, './test/*')
        }
    }
})
