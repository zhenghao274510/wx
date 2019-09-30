<template>
  <div class="contain">
    <van-popup v-model="donghua" :close-on-click-overlay="false">
      <div class="lunhui">
        <van-loading type="spinner" color="#808080" />
        <p style="color:#808080">数据加载中...</p>
      </div>
    </van-popup>
    <div class="head">
      <div class="city" @click="inits">
        <img src="/static/img/shouye-dingwei.png" alt />
        <span>{{city}}</span>
      </div>
      <div class="search">
        <img src="/static/img/shouye-sousuo.png" alt />
        <input type="text" placeholder="输入店铺或商品名称" @focus="goSearch" />
      </div>
      <img src="/static/img/shouye-xiaoxi.png" @click="goMessage" alt />
      <div class="dian" v-if="xiaoxi==true"></div>
    </div>
    <div ref="all" class="wrapper">
      <van-tabs :active="active" color="rgb(114,209,65)" title-active-color="rgb(114,209,65)" sticky :offset-top="60"
        swipeable animated :duration="0.5" @change="changeIng">
        <van-tab :title="v.name" v-for="(v,k) in cate1" :key="k">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :offset="10">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
              <div class="swipe">
                <!-- <swipe :images="images"></swipe> -->
              </div>
              <div class="navs">
                <!-- <navs :datas="datas"></navs> -->
              </div>
              <div class="slide-box" v-if="cate1[active].name=='推荐' && list.length > 0">
                <discount :recommendList="list" :title="title" @shopcart="shopcart"></discount>
                <p class="zhe_p" @click="chakan(cate1[active].name)">查看更多》</p>
              </div>
              <div class="slide-box" v-if="cate1[active].name!=='推荐' && dataList.length > 0">
                <!-- <discount :recommendList="dataList" :title="title1" @shopcart="shopcart"></discount> -->
                <p class="zhe_p" @click="chakan(cate1[active].name)">查看更多》</p>
              </div>
              <!-- <recommendx :recommend="recommendList" :tits="tits" @shopcart="shopcart"></recommendx> -->
              <div class="loading" v-if="!more">
                <van-loading type="spinner" size="20px" />
                <span style="margin-left: 0.3rem;">加载中...</span>
              </div>
              <div class="loading" v-if="more">
                <span>没有更多了</span>
              </div>
            </van-pull-refresh>
          </van-list>
        </van-tab>
      </van-tabs>
    </div>
    <div id="container" style="width: 0;"></div>
  </div>
</template>

<script>
  // import Swipe from "@/components/component/swipe";
  // import Navs from "@/components/navs";
  // import Discount from "@/components/discount";
  // import Recommendx from "@/components/recommendx";
 

  export default {
     data() {
      return {
        donghua: false,
        active: 0,
        num: 0,
        title: "折扣专区",
        title1: "优质商品推荐",
        tits: "销量推荐",
        isLoading: false,
        city: "",
        images: [],
        datas: [],
        cate1: [],
        dataList: [],
        page: 1,
        totalPage: 1,
        loading: false,
        recommendList: [],
        list: [],
        id: "",
        more: false,
        xiaoxi: false,
        gou: 0,
        finished: false
      };
     
    },
     components:{
        // Navs,
        // Discount,
        // Recommendx
      },
       onLoad() {
        
       },
       mounted() {
            let parmas = {
          cmd: "discountGoods",
          pageNow: 1
        };
      this.Request.post(parmas).then(res=>{
        console.log(res)
      })
       },
       methods: {
         inits(){
           
         },
         goSearch(){
           this.$router.push('/pages/search/main');
         }
       },
     
   
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  input::-webkit-input-placeholder {
    color: #fff;
  }

  input:-moz-placeholder {
    color: #fff;
  }

  input::-moz-placeholder {
    color: #fff;
  }

  input::-ms-input-placeholder {
    color: #fff;
  }

  .zhe_p {
    width: 100%;
    line-height: 1rem;
    text-align: center;
  }

  .loading {
    width: 100%;
    height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #999;
  }

  .head {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0.4rem 0.1rem;
    box-sizing: border-box;
    background: rgb(114, 209, 65);
    z-index: 9999;

    .dian {
      position: fixed;
      top: 24px;
      right: 17px;
      border-radius: 50%;
      height: 10px;
      width: 10px;
      background: red;
    }

    .city {
      width: auto;
      height: 50px;
      display: flex;
      align-items: center;

      img {
        width: 0.4rem;
        height: 0.5rem;
      }

      span {
        font-size: 14px;
        color: #fff;
        margin-left: 0.3rem;
      }
    }

    .search {
      width: 65%;
      height: 36px;
      border-radius: 50px;
      background: rgb(169, 228, 138);
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 0.4rem;
        height: 0.4rem;
      }

      input {
        width: 60%;
        font-size: 14px;
        color:#FFFFFF;
        background: none;
        border: none;
        margin-left: 0.3rem;
      }
    }

    img {
      width: 0.4rem;
      height: 0.5rem;
    }
  }

  .contain {
    width: 100%;
    height: 100%;
    padding-top: 60px;
  }

  .wrapper {
    width: 100%;
    height: auto;

    .swipe {
      width: 100%;
      height: 180px;
    }

    .navs {
      width: 100%;
      display: flex;
    }

    .slide-box {
      width: 100%;
      background: rgb(250, 250, 250);

      h3 {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        color: #333;
      }

      .slide-list {
        width: 100%;
        display: flex;
        min-height: 5.5rem;
      }
    }
  }
</style>
