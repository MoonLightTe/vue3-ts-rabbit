<script setup lang="ts">
  import HomePanel from './home-panel.vue'
  import useStore from '@/store';
  import { ref } from 'vue';
  // import { useIntersectionObserver } from '@vueuse/core';
  import {useObserver} from '@/hooks'
  // 1，封装接口
  // 2.调用接口
  // 3.声明数组类型
  // 4.在组件中使用数据
  const home =useStore().useHome()
  // const target=ref(null)
  // const {stop}=useIntersectionObserver(target,([{isIntersecting}])=>{
  //   if(isIntersecting){
  //
  //     stop() //停止监听
  //   }
  // })
 const {target} =useObserver(home.getNewsGoodsList)
  </script>

  <template>
    <div class="home-new" ref="target">
      <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
        <template #right><XtxMore path="/" /></template>
        <!-- 面板内容 -->
        <ul class="goods-list">
          <li v-for="item in home.newGoodsList" :key="item.id">
            <!-- <RouterLink to="/"> -->
              <RouterLink :to="`/goods/${item.id}`">
              <img
                :src="item.picture"
                alt=""
              />
              <p class="name ellipsis">{{item.desc}}</p>
              <p class="price">&yen;{{item.price}}</p>
            </RouterLink>
          </li>
        </ul>
      </HomePanel>
    </div>
  </template>

  <style scoped lang="less">
  .goods-list {
    display: flex;
    justify-content: space-between;
    height: 406px;
    li {
      width: 306px;
      height: 406px;
      background: #f0f9f4;
      .hoverShadow();
      img {
        width: 306px;
        height: 306px;
      }
      p {
        font-size: 22px;
        padding: 12px 30px 0 30px;
        text-align: center;
      }
      .price {
        color: @priceColor;
      }
    }
  }
  </style>
