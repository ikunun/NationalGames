import Vue from 'vue'
import VueRouter from 'vue-router'
import Info from '@/views/Info'
import Home from '@/views/Home'
Vue.use(VueRouter)

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
  }
]

const router = new VueRouter({
  routes
})

export default router
