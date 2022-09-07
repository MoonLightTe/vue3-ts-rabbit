// 创建vue实例
import { createApp } from 'vue';
import App from './App.vue';
// 浏览器兼容
import 'normalize.css';
// 标签样式初始化
import '@/assets/styles/common.less';
// 引入路由实例
import router from '@/router';
// 引入pinia实例
import { createPinia } from 'pinia';
const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
