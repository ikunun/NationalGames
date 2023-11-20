<template>
  <div class="ReBoxFather">
    <div class="ReBox">
      <div style="float: left">精品推荐：</div>
      <div class="ReTwo" v-for="(i, index) in 3" :key="index">
        <div class="ReOne" v-for="(i, index) in 2" :key="index" @click="GoInfo">
          <img
            src="../../../assets/img/00d68809-047c-4764-af68-d62782e8dbfa_source(1).jpg"
            alt=""
          />
          <span>华为畅想6S钢化膜</span>
          <div>
            <span class="OneFontColor">$30.00</span>
            <span class="TwoFontColor">￥34.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    GoInfo() {
      this.$bus.$emit("show", false);
      this.$router.push("/info");
    },
  },
};
</script>

<style  scoped>
.TwoFontColor {
  text-decoration: line-through;
  color: rgb(228, 228, 230);
}
.OneFontColor {
  color: #ff6900;
  font-size: 14px;
}
.ReOne {
  display: flex;
  flex-direction: column;
}
img {
  width: 90px;
  height: 135px;
}
.ReBoxFather {
  display: flex;
  flex-direction: column;
  padding: 10px 12px;
}
.ReBox {
  display: flex;
  padding: 10px 12px;
  flex-direction: column;
  background: white;
}
.ReTwo {
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>