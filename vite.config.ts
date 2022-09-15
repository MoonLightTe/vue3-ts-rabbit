import { fileURLToPath, URL } from 'node:url';
// import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  // 配置开发服务器
  server:{
    // qq三方登录的回调url为 http://www.corho.com:8080/#/login/callback、、
    // vite中配置：www.corho.com:8080
    host:"www.corho.com",
    port:8080,
    open:true, // 帮我们打开浏览器
    cors:true,// 允许开发时ajax跨域
    proxy:{} //代理
  },
  plugins: [vue(
    {
      reactivityTransform:true,
    }
  ), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `
        @import '@/assets/styles/mixins.less';
        @import '@/assets/styles/variables.less';
        `,
      },
    },
  },
});
