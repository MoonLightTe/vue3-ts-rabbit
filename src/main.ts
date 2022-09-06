// 创建vue实例
import { createApp } from 'vue';
import App from './App.vue';
// 浏览器兼容
import 'normalize.css';
// 标签样式初始化
import '@/assets/styles/common.less';
const app = createApp(App);
app.mount('#app');
