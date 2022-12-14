import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import eslintPlugin from 'vite-plugin-eslint'

const resolve = (dir: string) => path.join(__dirname, dir)

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] }),
    eslintPlugin({ include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'] })
  ],
  resolve: {
    /** 路径别名配置 start */
    alias: {
      '@': resolve('src')
    }
    /** 路径别名配置 end */
  }
})
