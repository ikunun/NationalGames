<template>
  <div>
    <!-- Header -->
    <van-nav-bar title="联系人列表" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <!-- address list -->
    <van-address-list
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
export default {
  name: "Address",

  data() {
    return {
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
    };
  },

  mounted() {},

  methods: {
    onAdd() {
      this.$bus.$emit("showAddAddress");

      this.$router.push("/addaddress");
    },
    onEdit(item, index) {
      this.$bus.$emit("showEditAddress");
      this.$router.push("/editaddress");
    },
  },
};
</script>

<style  scoped>
</style>