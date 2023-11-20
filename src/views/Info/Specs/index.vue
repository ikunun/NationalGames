<template>
  <div class="info">
    <van-button type="primary" @click="show = true">显示商品</van-button>
    <van-button type="warning" @click="callBackMainPage">返回主页</van-button>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["flag"]),
  },
  methods: {
    onBuyClicked(sku) {
      console.log(sku);
    },
    onAddCartClicked(sku) {
      console.log(sku);
    },
    callBackMainPage() {
      this.$router.push("/");
    },
  },
  data() {
    return {
      goodsId: 1,
      quota: 10,
      quotaUsed: 1,
      show: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "101", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "https://img01.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "https://img01.yzcdn.cn/1p.jpg", // 用于预览显示的规格类目图片
              },
              {
                id: "102",
                name: "蓝色",
                imgUrl: "https://img01.yzcdn.cn/2.jpg",
                previewImgUrl: "https://img01.yzcdn.cn/2p.jpg",
              },
            ],
            largeImageMode: true, //  是否展示大图模式
          },
          {
            k: "尺寸", // skuKeyName：规格类目名称
            k_s: "s2", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "201", // skuValueId：规格值 id
                name: "34", // skuValueName：规格值名称
                imgUrl: "https://img01.yzcdn.cn/1.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "https://img01.yzcdn.cn/1p.jpg", // 用于预览显示的规格类目图片
              },
              {
                id: "202",
                name: "35",
                imgUrl: "https://img01.yzcdn.cn/2.jpg",
                previewImgUrl: "https://img01.yzcdn.cn/2p.jpg",
              },
            ],
            largeImageMode: true, //  是否展示大图模式
          },
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 1, // skuId
            s1: "101", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "201", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 101, // 价格（单位分）
            stock_num: 101, // 当前 sku 组合对应的库存
          },
          {
            id: 2, // skuId
            s1: "102", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "201", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 102, // 价格（单位分）
            stock_num: 102, // 当前 sku 组合对应的库存
          },
          {
            id: 3, // skuId
            s1: "101", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "202", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 103, // 价格（单位分）
            stock_num: 103, // 当前 sku 组合对应的库存
          },
          {
            id: 4, // skuId
            s1: "102", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "202", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 104, // 价格（单位分）
            stock_num: 104, // 当前 sku 组合对应的库存
          },
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 101, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false, // 是否隐藏剩余库存
      },
      goods: {
        picture:
          "https://img.yzcdn.cn/upload_files/2017/03/16/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2/2/w/100/h/100/q/75/format/jpg",
      },
    };
  },
};
</script>

<style>
</style>
