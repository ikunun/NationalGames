<template>
  <div>
    <router-view v-show="show == 3"></router-view>
    <router-view v-show="show == 4"></router-view>
    <router-view v-show="show == 5"></router-view>
    <router-view v-show="show == 2"></router-view>
    <Home v-show="show == 1"></Home>
  </div>
</template>

<script>
import Home from "@/views/Home";
export default {
  name: "App",

  data() {
    return {
      show: 1,
    };
  },
  components: {
    Home,
  },

  mounted() {
    this.$bus.$on("show", (show) => {
      this.show = 2;
    });
    this.$bus.$on("showAddress", () => {
      this.show = 3;
    });
    this.$bus.$on("showAddAddress", () => {
      this.show = 4;
    });
    this.$bus.$on("showEditAddress", () => {
      this.show = 5;
    });
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>