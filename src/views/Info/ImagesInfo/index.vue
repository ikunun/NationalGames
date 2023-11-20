<template>
  <div class="ImInfoBox">
    <div>图文详情</div>
    <div class="ImBoxFor">
      <van-image fit="contain" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImagesInfo",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.ImBoxFor {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ImInfoBox {
  display: flex;
  flex-direction: column;
  padding: 10px 12px;
}
</style>