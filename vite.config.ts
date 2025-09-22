import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from "vite-svg-loader"
import { resolve } from 'path'
import zipPack from "vite-plugin-zip-pack" // make dist.zip file
import Moment from "moment";

const timeStringNow = Moment(new Date(), 'yyyy-MM-dd-hh-mm-ss')

// Plugin to handle markdown files as raw text
const markdownPlugin = () => {
    return {
        name: 'markdown-loader',
        transform(code: string, id: string) {
            if (id.endsWith('.md')) {
                return {
                    code: `export default ${JSON.stringify(code)}`,
                    map: null
                }
            }
        }
    }
}

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0',// 自定义主机名
        port: 2014,// 自定义端口
        https: false,
        proxy: {
            '/dev': {
                // target: 'http://localhost:3000',
                target: 'http://kylebing.cn:3000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/dev/, '/'),
            },
        }
    },
    base: './',
    plugins: [
        vue(),
        svgLoader(),
        markdownPlugin(),
        zipPack({
            inDir: 'dist',
            outDir: 'archive',
            outFileName: `iphone-${timeStringNow}.zip`,
            pathPrefix: ''
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@/view': resolve(__dirname, './src/view'),
            '@/api': resolve(__dirname, './src/api'),
        },
    },

})
