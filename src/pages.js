module.exports = [{
  path: 'pages/index/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
  config: { // 页面配置，即 page.json 的内容，可选
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
    "usingComponents":{
      "van-icon":"/static/vant/icon/index",
      "van-tabbar":"/static/vant/tabbar/index",
      "van-tabbar-item":"/static/vant/tabbar-item/index"
     
    }
  }

},{
  path: 'pages/class/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
  config: { // 页面配置，即 page.json 的内容，可选
    navigationBarTitleText: '分类',
    enablePullDownRefresh: true,
    "usingComponents":{
      "van-tabs":"/static/vant/tabs/index",
      "van-tab":"/static/vant/tab/index",
      "van-pull-refresh":"/static/vant/tabs/index",
      "van-list":"/static/vant/collapse/index"
    }
  }
},{
  path: 'pages/car/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
  config: { // 页面配置，即 page.json 的内容，可选
    navigationBarTitleText: '购物车',
    enablePullDownRefresh: true,
    "usingComponents": {
      "van-stepper": "/static/vant/stepper/index",
      "van-checkbox": "/static/vant/checkbox/index" 
    }
  }
},{
  path: 'pages/my/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
  config: { // 页面配置，即 page.json 的内容，可选
    navigationBarTitleText: '个人中心',
    enablePullDownRefresh: true,
    "usingComponents":{
      "van-icon":"/static/vant/icon/index",
      "van-tabbar":"/static/vant/tabbar/index",
      "van-tabbar-item":"/static/vant/tabbar-item/index"
     
    }
  }
},{
  path: 'pages/nearyShop/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
  config: { // 页面配置，即 page.json 的内容，可选
    navigationBarTitleText: '附近商家',
    enablePullDownRefresh: true,
    "usingComponents":{
      "van-loading":"/static/vant/loading/index",
      "van-popup":"/static/vant/popup/index",
      "van-rate":"/static/vant/rate/index"
     
    }
  }
},
{
  path:'pages/address/index',
  config:{
    navigationBarTitleText: '地址管理',
  }
}

]
