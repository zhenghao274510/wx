<template>
  <div class="contain" ref="list">
    <van-popup v-model="donghua">
      <div class="lunhui">
        <van-loading type="spinner" color="#808080" />
        <p style="color:#808080">数据加载中...</p>
      </div>
    </van-popup>
    <div  class="shopkong" @click="init">请点我重新定位</div>
     <!-- 附近商家 -->
      <div class="list">
        <ul>
          <li v-for="(v,k) in dataList" :key="k" @click="goDetail(v.id)">
            <img :src="v.image" alt />
            <div class="list-shop">
              <div class="shop-top">
                <h3>{{v.name}}</h3>
                <span v-if="v.spacing<1000">{{v.spacing}}m</span>
                <span v-else>{{near(v.spacing)}}km</span>
              </div>
              <div class="shop-star">
                <van-rate
                  v-model="v.star"
                  disabled
                  disabled-color="rgb(255,164,20)"
                  allow-half
                  :size="18"
                />
                <span>{{v.stars}}</span>
                <span style="margin-left: 0.3rem">月销:{{v.monthlySale}}</span>
              </div>
              <p>{{v.describe}}</p>
            </div>
          </li>
        </ul>
      </div>
    <div class="shop">
     

        <!-- 不引入 -->
      <div class="kong">附近暂无商店</div>
    </div>
  </div>
</template>

<script>
// import Request from "@/common/js/request";
export default {
  data() {
    return {
      donghua: false,
      num: 2,
      active: 2,
      dataList: [],
      page: 1,
      gou: 0,
      nearyin: false,
      pointyin: false
    };
  },
  components: {
  },
  computed: {
    near(v){
       return (Math.round(v/100)/10).toFixed(1)
    }
  },
  created() {},
  mounted() {
    this.nearbyShop();
  },
  methods: {
    nearbyShop() {},
    init() {
      Toast("正在定位中，请稍等。。。");
      //我就是来定一下位
      let self = this;
      var map = new AMap.Map("container", {
        resizeEnable: true
      });
      AMap.plugin("AMap.Geolocation", function() {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 5000, //超过10秒后停止定位，默认：5s
          buttonPosition: "RB", //定位按钮的停靠位置
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true //定位成功后是否自动调整地图视野到定位点
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition(function(status, result) {
          if (status == "complete") {
            onComplete(result);
          } else {
            onError(result);
          }
        });
      });
      //解析定位结果
      function onComplete(data) {
        console.log(data);
        Toast("定位成功");
        let result = {};
        result.city = data.addressComponent.city;
        result.lng = data.position.lng;
        result.lat = data.position.lat;
        // localStorage.setItem("point", JSON.stringify(result));
        self.nearbyShop();
      }
      //解析定位错误信息
      function onError(data) {
        Toast("定位失败，请手动定位");
        console.log(data);
      }
    },

    goDetail(){

    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.contain {
  width: 100%;
  padding-bottom: 50px;
  box-sizing: border-box;

  .head {
    width: 100%;
    height: 60px;
    padding: 10px 0.4rem 0;
    box-sizing: border-box;
    font-size: 15px;
    color: #333;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    background: #fff;
    border-bottom: 1px solid #dedede;
  }

  .shop {
    width: 100%;
    border-top: 1px solid #eee;
    box-sizing: border-box;
    padding-top: 60px;
  }

  .kong {
    text-align: center;
    font-size: 14px;
    margin-top: 40px;
  }

  .shopkong {
    text-align: center;
    font-size: 14px;
    margin: 150px auto;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #dedede;
    width: 40%;
    line-height: 50px;
  }
}
.list {
  width: 100%;

  ul {
    width: 100%;

    li {
      width: 100%;
      padding: 0.4rem;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      display: flex;
      alijn-items: center;
      justify-between: space-between;

      img {
        width: 2.3rem;
        height: 2.3rem;
      }

      .list-shop {
        width: 70%;
        padding: 0.2rem 0 0.2rem 0.3rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .shop-top {
          width: 100%;
          display: flex;
          justify-content: space-between;
          color: #333;

          h3 {
            font-size: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 40%;
          }
        }

        .shop-star {
          width: 100%;
          display: flex;
          alijn-items: center;
          color: #333;

          span {
            display: inline-block;
            height: 20px;
            line-height: 20px;
            font-size: 14px;
          }
        }

        p {
          color: #333;
          font-size: 12px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          width: 70%;
        }
      }
    }
  }
}
</style>
