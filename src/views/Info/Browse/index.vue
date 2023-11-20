<template>
  <div class="BrowseBox">
    <div class="BrowseBoxLeft">
      <div class="BrowseBoxColor">￥4699.00</div>
      <div>不失商务不失娱乐</div>
    </div>
    <div class="BrowseAtTwo">
      <div class="BrowseTwoSix">
        <div>266</div>
        <div>浏览</div>
      </div>
      <div class="BrowseTwoSix">
        <div>112</div>
        <div>销量</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Browse",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.BrowseAtTwo {
  display: flex;
  flex-direction: row;
}
.BrowseTwoSix {
  display: flex;
  flex-direction: column;
}
.BrowseBoxColor {
  color: #ff6900;
  font-size: 18px;
}
.BrowseBoxLeft {
  display: flex;
  flex-direction: column;
}
.BrowseBox {
  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  background-color: antiquewhite;
  border-radius: 10px;
}
</style>