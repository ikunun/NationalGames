<template>
  <div>
    <router-view v-show="!show"></router-view>
    <Home v-show="show"></Home>
  </div>
</template>

<script>
import Home from "@/views/Home";
export default {
  name: "App",

  data() {
    return {
      show: true,
    };
  },
  components: {
    Home,
  },

  mounted() {
    this.$bus.$on("show", (show) => {
      this.show = show;
    });
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>