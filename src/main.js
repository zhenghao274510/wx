import Vue from 'vue'
import App from './App'
import http from '@/common/js/wxrequest'
import store from '@/vuex/store'
import './common/stylus/base.styl'
import './common/stylus/icon.styl'
import './common/stylus/index.styl'
import './common/stylus/mixin.styl'
import './common/stylus/reset.styl'
import './common/stylus/variable.styl'
Vue.prototype.Request=http;
//  兼容 vue  push replace 写法
import MpvueRouterPatch from 'mpvue-router-patch'
Vue.use(MpvueRouterPatch)



Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
