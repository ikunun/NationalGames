<template>
  <div class="LikeFather">
    <div class="LikeX">
      <div>猜你喜欢：</div>
      <div class="LikeTwo" v-for="(i, index) in 5" :key="index">
        <img
          src="../../../assets/img/00d68809-047c-4764-af68-d62782e8dbfa_source.jpg"
          alt=""
        />
        <div class="FontStyle">
          <div>小米(MI)MIX2</div>
          <div>不失商务不失娱乐</div>
          <div style="margin-top: 20px">
            <span class="FontOne">￥4699.00</span>
            <span class="FontTwo">￥4699.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Like",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.FontTwo {
  text-decoration: line-through;
  color: rgb(228, 228, 230);
}
.FontOne {
  color: #ff6900;
  font-size: 14px;
}
.LikeX {
  padding: 10px 12px;
}
.LikeTwo {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
}
img {
  width: 65px;
  height: 70px;
  padding-right: 20px;
}
.LikeFather {
  display: flex;
  flex-direction: column;
  padding: 10px 12px;
  height: 100vh;
}
</style>