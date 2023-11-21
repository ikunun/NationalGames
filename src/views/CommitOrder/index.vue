<template>
  <div>
    <!-- 支付模块 -->
    <van-nav-bar title="支付成功" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <!-- 订单已生成 -->
    <div class="OrderOk">
      <div style="margin-bottom: 40px">
        <div class="orderCircle">
          <van-icon name="success" size="65px" color="#ffffff" />
        </div>
        <div style="color: rgb(249, 67, 107); font-size: 16px">订单已生成</div>
      </div>
      <!-- look order -->
      <div style="display: flex; flex-direction: column; padding: 10px 10px">
        <div class="orderBox" style="background-color: #f9436b; color: white">
          查看订单
        </div>
        <div class="orderBox" style="background-color: #f8f8f8" @click="GoHome">
          返回首页
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommitOrder",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    GoHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style  scoped>
.orderBox {
  width: 80vw;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}
.orderCircle {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9436b;
  width: 90px;
  height: 90px;
  border-radius: 50%;
}
.OrderOk {
  padding: 90px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>