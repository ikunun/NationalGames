<template>
  <div>
    <Header></Header>
    <Carousel></Carousel>
    <Col></Col>
    <Recommend></Recommend>
    <Like></Like>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/views/Home/Header";
import Footer from "@/views/Home/Footer";
import Carousel from "@/views/Home/Carousel";
import Col from "@/views/Home/Col";
import Recommend from "@/views/Home/Recommend";
import Like from "@/views/Home/Like";
export default {
  name: "Home",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  components: {
    Footer,
    Header,
    Carousel,
    Col,
    Recommend,
    Like,
  },
};
</script>

<style lang="scss" scoped>
</style>