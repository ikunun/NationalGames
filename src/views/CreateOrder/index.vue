<template>
  <div style="height: 651px">
    <van-nav-bar title="创建订单" left-text="" left-arrow>
      <van-icon name="arrow-left" slot="left" @click="$router.back()" />
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <ul style="background: #f8f8f8; height: 100%">
      <li style="padding-top: 15px;">
        <ul style="background: #fff;width: 445px;height: 60px;margin: 0 auto;line-height: 20px;">
            <li style="padding: 5px 0 0 7px;">
                <van-row>
            <van-col span="3">张三</van-col>
            <van-col span="20">17777777777</van-col>
            <van-col span="1"><van-icon name="arrow"></van-icon></van-col>
          </van-row>
            </li>
          <li class="colorGray" style="padding: 5px 0 0 7px;">北京市东城区北京市</li>
        </ul>
      </li>
      <li style="width: 445px;margin: 0 auto;margin-top: 10px;">
        <ul>
            <li style="display: flex;background-color: #fff;">
                <div style="height: 140px;">
                    <img src="@/assets/img/1b0fb6dd-52b8-4855-b189-0ce77a226bb1_source.jpg" alt="" style="height: 100%;">
                </div>
                <ul style="height: 100px;padding-top: 8px;">
                    <li>小米（MI）MIX2</li>
                    <li style="padding-top: 5px;" class="colorGray">不失商务不失娱乐</li>
                    <li style="border: 1px solid #B0474D;width: 100px;text-align: center;color: red;">8+128 黑色</li>
                    <li style="padding-top: 23px;display: flex;justify-content: space-between;width: 295px;color: #CD9B90;">￥49999.00<span>×1</span></li>
                </ul>
            </li>
            <li style="display: flex;background-color: #fff;border-bottom: 1px solid #ccc;padding: 10px 0 10px 5px;justify-content: space-between;">
                <span>商品价格</span> <span class="colorGray">4999.00</span> 
            </li>
            <li style="display: flex;background-color: #fff;border-bottom: 1px solid #ccc;padding: 10px 0 10px 5px;justify-content: space-between;">
                <span>优惠</span>  <span class="colorGray">0.00</span> 
            </li>
            <li style="display: flex;background-color: #fff;border-bottom: 1px solid #ccc;padding: 10px 0 10px 5px;justify-content: space-between;">
                <span>运费</span>  <span class="colorGray">免邮费</span> 
            </li>
            <li style="display: flex;background-color: #fff;border-bottom: 1px solid #ccc;padding: 10px 0 10px 5px;">
                <span style="flex: 3;">备注</span>  <span style="flex: 6;" class="colorGray">请输入备注</span> 
            </li>
        </ul>
      </li>
      <li style="width: 445px;margin: 0 auto;margin-top: 10px;">
        <ul style="background-color: #fff;">
            <li >
                <div style="padding-left: 35px;">余额</div>
                <div style="display: flex;justify-content: space-between;">
                    <van-icon name="shop-o"></van-icon>
                    <van-checkbox value="checked" @change="onChange(event)" style="padding-right: 10px;"/>
                </div>
                <div class="colorGray" style="padding-left: 30px;">￥622</div>
            </li>
            <li style="margin-top: 20px;">
                <div style="padding-left: 35px;">微信</div>
                <div style="display: flex;justify-content: space-between;">
                    <van-icon name="shop-o"></van-icon>
                    <van-checkbox value="checked" @change="onChange(event)" style="padding-right: 10px;"/>
                </div>
                <div class="colorGray" style="padding-left: 30px;">暂未开通</div>
            </li>
        </ul>
      </li>
    </ul>
    <van-goods-action>
  <van-goods-action-button text="提交订单" @click="onClickButton" style="width: 30px;" color="red"/>
</van-goods-action>
  </div>
</template>

<script>
export default {
  name: "CreateOrder",
  data() {
    return {
        checked:true
    }
  },
  methods:{
    onChange(event){
        // this.checked=false
        console.log(event)
    }
  }
};
</script>

<style scoped>
</style>