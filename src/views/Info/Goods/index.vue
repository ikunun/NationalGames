<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star-o" text="收藏" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="TestAxios"
      />
    </van-goods-action>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Goods",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    TestAxios() {
      axios
        .get("https://api.uixsj.cn/hitokoto/get?type=social")
        .then((response) => {
          // 处理响应数据
          alert(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style  scoped>
</style>