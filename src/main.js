import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';
import { Col, Row } from 'vant';
import axios from 'axios'
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import { Sku } from 'vant';
import { AddressList } from 'vant';
import { AddressEdit } from 'vant';
import { Area } from 'vant';

Vue.use(Area);

Vue.use(AddressEdit);

Vue.use(AddressList);

Vue.use(Vant);

Vue.use(Sku);
Vue.use(Col);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Row);
Vue.config.productionTip = false
Vue.use(Swipe);
Vue.use(SwipeItem);
new Vue({
  router,
  store,
  render: h => h(App),
  // 安装全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
