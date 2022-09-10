<script setup lang="ts">
import { RouterLink } from 'vue-router';
import useStore from '@/store';
import { onMounted, ref, computed } from 'vue';
import type { CategoryList } from '@/type/index';
const Home = useStore().useHome();
let list = ref<CategoryList>();
onMounted(async () => {
  const { data } = await Home.getList();
  list.value = data.result;
});
computed(() => {
  if (list.value !== undefined)
    return list.value.map((item) => {
      return {
        id: item.id,
        name: item.name,
        children: item.children.slice(0, 2),
        // 添加 goods 字段
        goods: item.goods,
      };
    });
});
</script>

<template>
  <div class="home-category">
    <ul class="menu">
      <li v-for="item in list" :key="item.id">
        <RouterLink to="/">{{ item.name }}</RouterLink>
        <template v-for="(value, index) in item.children">
          <RouterLink to="/" v-if="index < 2" :key="value.id">{{
            value.name
          }}</RouterLink>
        </template>
        <!-- <RouterLink to="/">{{ '茶咖酒具' }}</RouterLink>
        <RouterLink to="/">{{ '水具杯壶' }}</RouterLink> -->
        <!-- 弹层layer位置 -->
        <div class="layer">
          <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
          <ul>
            <li v-for="goods in item.goods" :key="goods.id">
              <RouterLink to="/">
                <img
                  :src="goods.picture"
                  alt=""
                />
                <div class="info">
                  <p class="name ellipsis-2">
                    {{goods.name}}
                  </p>
                  <p class="desc ellipsis">{{goods.desc}}</p>
                  <p class="price"><i>¥</i>{{goods.price}}</p>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 55px;
      line-height: 55px;
      &:hover {
        background: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
      .layer {
        width: 990px;
        height: 500px;
        background: rgba(255, 255, 255, 1);
        position: absolute;
        left: 250px;
        top: 0;
        display: none;
        padding: 0 15px;
        h4 {
          font-size: 20px;
          font-weight: normal;
          line-height: 80px;
          small {
            font-size: 16px;
            color: #666;
          }
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            width: 310px;
            height: 120px;
            margin-right: 15px;
            margin-bottom: 15px;
            border: 1px solid #eee;
            border-radius: 4px;
            background: #fff;
            &:nth-child(3n) {
              margin-right: 0;
            }
            a {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
              padding: 10px;
              &:hover {
                background: #e3f9f4;
              }
              img {
                width: 95px;
                height: 95px;
              }
              .info {
                padding-left: 10px;
                line-height: 24px;
                overflow: hidden;
                .name {
                  font-size: 16px;
                  color: #666;
                }
                .desc {
                  color: #999;
                }
                .price {
                  font-size: 22px;
                  color: @priceColor;
                  i {
                    font-size: 16px;
                  }
                }
              }
            }
          }
        }
      }
      &:hover {
        .layer {
          display: block;
        }
      }
    }
  }
}
</style>
