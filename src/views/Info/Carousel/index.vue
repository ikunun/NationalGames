<template>
  <div class="CarouselBox">
    <van-swipe
      class="my-swipe"
      @change="onChange"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item class="imgStyle" v-for="(i, index) in 4" :key="index">
        <img
          src="../../../assets/img/0e6c5bd5-af70-45f6-a68a-7d48b8486ad9_source(1).jpg"
          alt=""
        />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/4</div>
      </template>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Carousel",

  data() {
    return {
      current: 0,
    };
  },

  mounted() {},

  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
</script>

<style  scoped>
.CarouselBox {
  padding: 10px 12px;
}
.imgStyle {
  background-color: white;
  display: flex;
  justify-content: center;
}
img {
  width: 300px;
  height: 300px;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
  color: white;
}
</style>