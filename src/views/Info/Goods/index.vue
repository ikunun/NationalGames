<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star-o" text="收藏"  class="collect"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton"/>
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="showPopup"
        is-link
      />
      <van-popup
        v-model="show"
        round
        position="bottom"
        custom-style="height: 20%"
        :close="onClose"
      >
        <div style="margin: 20px 0 0 20px">
          <ul style="border-bottom: 1px solid #a3a3a3">
            <li style="display: flex">
              <div style="width: 100px; height: 100px">
                <img
                  src="@/assets/img/00d68809-047c-4764-af68-d62782e8dbfa_source.jpg"
                  alt=""
                  style="height: 100%"
                />
              </div>
              <ul style="margin-left: 20px" class="gap">
                <li class="colorRed">￥{{ (4999.0).toFixed(2) }}</li>
                <li class="colorGray">
                  剩余<span class="colorRed">16</span>件
                </li>
                <li class="colorGray">已选8+128黑色</li>
              </ul>
            </li>
            <li>
              <ul style="margin-top: 10px; border-bottom: 1px solid #a3a3a3">
                <li>内存容量</li>
                <li style="margin-top: 10px; padding-bottom: 10px">
                  <button style="border: 0">4+64G</button>
                  <button class="gap1">6+64</button>
                  <button class="gap1">8+128</button>
                </li>
              </ul>
            </li>
            <li
              style="
                margin-top: 5px;
                border-bottom: 1px solid #a3a3a3;
                padding-bottom: 10px;
              "
            >
              <ul>
                <li class="colorGray">颜色</li>
                <button style="border: 0; margin-top: 5px">黑色</button>
              </ul>
            </li>
            <li
              style="
              height: 100px;
                margin-top: 5px;
                display: flex;
                justify-content: space-between;
              "
            >
              <span class="colorGray">购买数量</span>
              <van-stepper value="1" @change="onChange" />
            </li>
            <li>
              <van-goods-action>
                <van-goods-action-button
                  text="加入购物车"
                  type="warning"
                  @click="onClickButton"
                />
                <van-goods-action-button
                  text="立即购买"
                  type="danger"
                  @click="toOrderList"
                />
              </van-goods-action>
            </li>
          </ul>
        </div>
      </van-popup>
    </van-goods-action>
    <!-- <van-toast id="van-toast" icon="success">你好</van-toast> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Goods",

  data() {
    return {
      show: false,
    };
  },

  mounted() {},

  methods: {
    TestAxios() {
      // axios
      //   .get("https://api.uixsj.cn/hitokoto/get?type=social")
      //   .then((response) => {
      //     // 处理响应数据
      //     alert(response.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
    setData() {},
    showPopup() {
      this.show = true;
      
    },

    onClose() {
      this.show = false;
    },
    onChange() {},
    onClickButton(){
      this.$toast({
        message: '加入购物车成功',
  forbidClick: true,
  icon:"success"
      })
    },
    toOrderList(){
      this.$router.push({
        name:'createorder'
      })
    }
  },
};
</script>

<style>
.colorRed {
  color: #c0425e;
}
.colorGray {
  color: #a3a3a3;
}
.gap li {
  margin-top: 5px;
}
.gap1 {
  margin-left: 10px;
  border: 0;
}
.collect {
  color: red;
}
</style>