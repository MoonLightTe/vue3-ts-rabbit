/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  // 配置全局遍历
  global:{
    QC:true,
  },
  rules:[
    "vue/multi-word-component-names":"off",
      // 关闭不能props结构
      'vue/no-setup-props-destructure': 'off',
  ],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
