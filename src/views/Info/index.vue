<template>
  <div>
    <Bar></Bar>
    <Carousel></Carousel>
    <Browse></Browse>
    <Specs></Specs>
    <ImagesInfo></ImagesInfo>
    <Goods></Goods>
  </div>
</template>

<script>
import Bar from "@/views/Info/Bar";
import Carousel from "@/views/Info/Carousel";
import Browse from "@/views/Info/Browse";
import ImagesInfo from "@/views/Info/ImagesInfo";
import Goods from "@/views/Info/Goods";
import Specs from "@/views/Info/Specs";
export default {
  name: "Info",

  data() {
    return {};
  },
  components: {
    Bar,
    Carousel,
    Browse,
    ImagesInfo,
    Goods,
    Specs,
  },
  mounted() {},

  methods: {},
};
</script>

<style  scoped>
</style>