<script setup lang="ts">
import { useRoute } from 'vue-router';
import { getGoodsDetaile } from '@/api/goods';
import { onMounted, ref } from 'vue';
import type { Goods, SkuEmit,CartItem } from '@/type';
import useStore from '@/store';
import { message } from '@/components';
const route = useRoute();
const { id } = route.params;
const goods = ref<Goods>();
onMounted(async () => {
  const res = await getGoodsDetaile({ id });
  if(res.data.result !== undefined){
    goods.value = res.data.result;
  }
});
const count =ref(1)
// 改变商品规格的事件
const skuId=ref('')
const change= (value:SkuEmit)=>{
  skuId.value =value.skuId || ''
}
// 选中的商品规格文本
const attrsText = ref("");
// 点击按钮添加到购物车
const {cart} = useStore();
const add=()=>{
  if(!skuId.value){
    message({type:"error",text:"请选择完成商品规则"})
  }
  if(!goods.value) return
  // 调用加入的购物车接口
  if(cart.isLogin){
    cart.addCart({
    skuId:skuId.value,
    count:count.value
  })
  }else{
    const cartItem = {
    // 第一部分：商品详情中有的
    id: goods.value.id, // 商品id
    name: goods.value.name, // 商品名称
    picture: goods.value.mainPictures[0], // 图片
    price: goods.value.oldPrice, // 旧价格
    nowPrice: goods.value.price, // 新价格
    stock: goods.value.inventory, // 库存
    // 第二部分：商品详情中没有的，自己通过响应式数据收集
    count: count.value, // 商品数量
    skuId: skuId.value, // skuId
    attrsText: attrsText.value, // 商品规格文本
    // 第三部分：设置默认值即可
    selected: true, // 默认商品选中
    isEffective: true, // 默认商品有效
  } as CartItem;  // 📌 as 断言防止类型报错

  console.log('📌cartItem 数据终于准备完毕了', cartItem);

  // 调用加入购物车接口
  cart.addCart(cartItem);

  }

}

</script>

<template>
  <div class="xtx-goods-page">
    <div class="container">
      <!-- 商品信息 -->
      <div v-if="goods" class="goods-info">
        <div class="media">
          <!-- 图片预览区 -->
          <div class="goods-image">
            <!-- 图片预览组件 -->
            <XtxImageView :image-list="goods.mainPictures" />
          </div>
          <!-- 统计数量,后台没返回数据,不做渲染 -->
          <ul class="goods-sales">
            <li>
              <p>销量人气</p>
              <p>100+</p>
              <p><i class="iconfont icon-task-filling"></i>销量人气</p>
            </li>
            <li>
              <p>商品评价</p>
              <p>200+</p>
              <p><i class="iconfont icon-comment-filling"></i>查看评价</p>
            </li>
            <li>
              <p>收藏人气</p>
              <p>80+</p>
              <p><i class="iconfont icon-favorite-filling"></i>收藏商品</p>
            </li>
            <li>
              <p>品牌信息</p>
              <p>90+</p>
              <p><i class="iconfont icon-dynamic-filling"></i>品牌主页</p>
            </li>
          </ul>
        </div>
        <!-- 商品信息区 -->
        <div class="spec">
          <!-- 商品主要信息 -->
          <div class="goods-main">
            <div class="goods-main">
              <p class="g-name">{{ goods?.name }}</p>
              <p class="g-desc">{{ goods?.desc }}</p>
              <p class="g-desc">这是选中的商品规格</p>
              <p class="g-price">
                <span>{{ goods?.price }}</span>
                <span>{{ goods?.oldPrice }}</span>
              </p>
              <div class="g-service">
                <dl>
                  <dt>促销</dt>
                  <dd>12月好物放送，App领券购买直降120元</dd>
                </dl>
                <dl>
                  <dt>配送</dt>
                  <dd>至</dd>
                  <dd>
                    <XtxCity />
                  </dd>
                </dl>
                <dl>
                  <dt>服务</dt>
                  <dd>
                    <span>无忧退货</span>
                    <span>快速退款</span>
                    <span>免费包邮</span>
                    <a href="javascript:;">了解详情</a>
                  </dd>
                </dl>
              </div>
            </div>
            <!-- 规格选择组件 -->
            <XtxSku :goods="goods" @change="change"></XtxSku>
            <!-- 数量选择组件 -->
            <MyCount v-model="count"></MyCount>
            <!-- 按钮组件 -->
            <MyBottom style="marginTop:10px;" type="primary" @click="add">加入购物车</MyBottom>
          </div>
        </div>
        <!-- 商品详情 -->
        <div class="goods-footer">
          <div class="goods-article">
            <!-- 商品详情 -->
            <div class="goods-tabs"></div>
          </div>
          <!-- 24热榜+专题推荐 -->
          <div class="goods-aside"></div>
        </div>
      </div>
      <div v-else class="goods-info loading"></div>
    </div>
  </div>
</template>

<style scoped lang="less">

.container {
  margin-top: 20px;
}
.loading {
  background: #fff url('@/assets/images/loading.gif') no-repeat center;
}
// 商品信息
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}

// 图片预览区
.goods-image {
  width: 480px;
  height: 400px;
  background-color: #eee;
}

// 统计数量
.goods-sales {
  display: flex;
  width: 400px;
  align-items: center;
  text-align: center;
  height: 140px;
  li {
    flex: 1;
    position: relative;
    ~ li::after {
      position: absolute;
      top: 10px;
      left: 0;
      height: 60px;
      border-left: 1px solid #e4e4e4;
      content: '';
    }
    p {
      &:first-child {
        color: #999;
      }
      &:nth-child(2) {
        color: @priceColor;
        margin-top: 10px;
      }
      &:last-child {
        color: #666;
        margin-top: 10px;
        i {
          color: @xtxColor;
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: @xtxColor;
          cursor: pointer;
        }
      }
    }
  }
}

// 商品信息区
.spec {
  .g-name {
    font-size: 22px;
  }
  .g-desc {
    color: #999;
    margin-top: 10px;
  }
  .g-price {
    margin-top: 10px;
    span {
      &::before {
        content: '¥';
        font-size: 14px;
      }
      &:first-child {
        color: @priceColor;
        margin-right: 10px;
        font-size: 22px;
      }
      &:last-child {
        color: #999;
        text-decoration: line-through;
        font-size: 16px;
      }
    }
  }
  .g-service {
    background: #f5f5f5;
    width: 500px;
    padding: 20px 10px 0 10px;
    margin-top: 10px;
    dl {
      padding-bottom: 20px;
      display: flex;
      align-items: center;
      dt {
        width: 50px;
        color: #999;
      }
      dd {
        color: #666;
        &:last-child {
          span {
            margin-right: 10px;
            &::before {
              content: '•';
              color: @xtxColor;
              margin-right: 2px;
            }
          }
          a {
            color: @xtxColor;
          }
        }
      }
    }
  }
}

.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>
