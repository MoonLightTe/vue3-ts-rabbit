/*
  1. XtxUI 文件夹 新建 components.d.ts 声明文件
  2. volar 复制 声明文件的架子
  3. 把需要声明的全局组件，填上去, typeof组件可以返回组件类型
  declare   声明
  module    模块
  GlobalComponents  全局的组件
*/
import Skeleton from './Skeleton/Skeleton.vue';
import Slider from './Slider/index.vue';
import More from './More/index.vue';
import Bread from './Bread/index.vue';
import BreadItem from './Bread/Item.vue';
import City from './City/index.vue';
import Count from './Count/index.vue';
import Button from './Button/index.vue';
import CheckBox from './CheckBox/index.vue';
import ImageView from './ImageView/index.vue';
import Sku from './Sku/index.vue';
import Dialog from './Dialog/index.vue';
import InfiniteLoad from './InfiniteLoad/index.vue';
import Tabs from './Tabs/index.vue';
import TabPane from './Tabs/pane.vue';

// components.d.ts
declare module 'vue' {
  // Vue 3
  // declare module 'vue' {   // Vue 2.7
  // declare module '@vue/runtime-dom' {  // Vue <= 2.6.14
  export interface GlobalComponents {
    RouterLink: typeof import('vue-router')['RouterLink'];
    RouterView: typeof import('vue-router')['RouterView'];
    XtxSkeleton: typeof Skeleton;
    XtxSlider: typeof Slider;
    XtxMore: typeof More;
    XtxBread: typeof Bread;
    XtxBreadItem: typeof BreadItem;
    XtxCity: typeof City;
    XtxCount: typeof Count;
    XtxButton: typeof Button;
    XtxCheckBox: typeof CheckBox;
    XtxImageView: typeof ImageView;
    XtxSku: typeof Sku;
    XtxDialog: typeof Dialog;
    XtxInfiniteLoad: typeof InfiniteLoad;
    XtxTabs: typeof Tabs;
    XtxTabPane: typeof TabPane;
  }
}

export {};
