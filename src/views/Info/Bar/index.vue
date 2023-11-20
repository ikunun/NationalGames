<template>
  <div>
    <van-nav-bar
      @click-left="exit"
      title="商品详情"
      left-text="返回"
      left-arrow
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "Bar",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    exit() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>