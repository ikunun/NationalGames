import Vue from 'vue'
import VueRouter from 'vue-router'
import Info from '@/views/Info'
import Home from '@/views/Home'
import CreateOrder from '@/views/CreateOrder'
import CommitOrder from '@/views/CommitOrder'
import Address from '@/views/Address'
import EditAddresss from '@/views/Address/EditAddresss'
import AddAddress from '@/views/Address/AddAddress'
Vue.use(VueRouter)

let originPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve&&reject){
        originPush.call(this,location,resolve,reject)
    }else {
        originPush.call(this,location,()=>{},()=>{})
    }
}

const routes = [
  {
    path:'/info',
    component:Info,
    name:'info'
  },
  {
    path:'/',
    component:Home,
    name:'home'
  },
  {
    path:'/createorder',
    component:CreateOrder,
    name:'createorder'
  },
  // 处理提交订单路由
  {
    path:'/commitorder',
    component:CommitOrder,
    name:'commitorder'
  },
  // 个人中心地址组件
  {
    path:'/address',
    component:Address,
    name:'address'
  },
  // 编辑地址
  {
    path:'/editaddress',
    component:EditAddresss,
    name:'editaddress'
  },
    {
    path:'/addAddress',
    component:AddAddress,
    name:'addAddress'
  }
]

let router= new VueRouter({
  // 配置路由
  routes,
  // 滚动行为
  scrollBehavior(to,from,savedPosition){
      // 返回的这个y=0，代表的滚动条在最上方
      return {y:0}
  }
})




export default router
