import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const resolve = (dir: string) => path.join(__dirname, dir)

export default defineConfig({
  plugins: [vue()],
  resolve: {
    /** 路径别名配置 start */
    alias: {
        '@': resolve('src')
    }
    /** 路径别名配置 end */
  }
})
