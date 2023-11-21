<template>
  <div>
    <van-tabbar>
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="list-switch">分类</van-tabbar-item>
      <van-tabbar-item icon="idcard">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="GoAddress"
        >个人中心</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    GoAddress() {
      this.$router.push("/address");
      this.$bus.$emit("showAddress");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>