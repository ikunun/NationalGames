<template>
  <div class="colBoxFather">
    <div class="colBox">
      <div class="colBoxCircleFather">
        <div class="colCircle">
          <van-icon name="like-o" size="25" />
        </div>
        <div>全部商品</div>
      </div>
      <div class="colBoxCircleFather">
        <div class="colCircle">
          <van-icon name="like-o" size="25" />
        </div>
        <div>全部商品</div>
      </div>
      <div class="colBoxCircleFather">
        <div class="colCircle">
          <van-icon name="like-o" size="25" />
        </div>
        <div>全部商品</div>
      </div>
      <div class="colBoxCircleFather">
        <div class="colCircle">
          <van-icon name="like-o" size="25" />
        </div>
        <div>全部商品</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Col",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
.colBoxCircleFather {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.colBoxFather {
  padding: 10px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.colBox {
  width: 100%;
  height: 10vh;
  background: red;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}
.colCircle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9vw;
  height: 5vh;
  background-color: aqua;
  border-radius: 50%;
}
</style>