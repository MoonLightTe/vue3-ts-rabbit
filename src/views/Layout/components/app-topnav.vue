<script setup lang="ts">
// 目的，登录去首页的时候将用户信息渲染到页面
import useStore from '@/store';
import { storeToRefs } from 'pinia'; // 这是为结构的数据还能保持响应式
//
const { member } = useStore();
const { profile } = storeToRefs(member);
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="member.isLogin">
          <li>
            <a href="javascript:;">
              <i class="iconfont icon-user"></i>
              {{profile.nickname || profile.account || profile.mobile}}
            </a>
          </li>
          <li><a href="javascript:;" @click="member.logout()">退出登录</a></li>
        </template>
        <template v-else>
          <!-- 为了让用户登录后回跳到当前浏览的页面 -->
          <li><router-link :to="`/login?target=${$route.fullPath}`">请先登录</router-link></li>
          <li><a href="javascript:;">免费注册</a></li>
        </template>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员中心</a></li>
        <li><a href="javascript:;">帮助中心</a></li>
        <li><a href="javascript:;">关于我们</a></li>
        <li>
          <a href="javascript:;"><i class="iconfont icon-phone"></i>手机版</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="less">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: @xtxColor;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
