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
// 数据持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
// 全局注册组件
import XtxUI from '@/components/index'
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(XtxUI)
app.mount('#app');
