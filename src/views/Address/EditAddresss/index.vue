<template>
  <div>
    <van-nav-bar title="联系人" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
export default {
  name: "EditAddress",

  data() {
    return {
      areaList,
      searchResult: [],
    };
  },

  mounted() {},

  methods: {
    onSave() {
      console.log("save");
    },
    onDelete() {
      console.log("delete");
    },
    onChangeDetail(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped>
</style>