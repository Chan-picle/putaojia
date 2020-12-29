<template>
  <div class="page">
    <!-- 吸顶 -->
    <div>
      <van-nav-bar title="确认订单" fixed placeholder />
      <van-icon class="left" name="arrow-left" @click="luyou"/>
    </div>
    <!-- 中部内容 -->
    <div class="content">
      <div class="top">
        <img src="../../public/img/shouye/touxiang01.png" alt="头像">
        <span>Olie</span>
        <span>乌克兰</span>
        <div class="introduce">
          <img src="../../public/TimeImg/jiaocai.jpg" alt="教材">
          <div>
            <span>小小科学家-少儿版</span>
            <p>课时:3节;适合年龄:6-12</p>
            <span><i>￥</i>1170</span>
          </div>
        </div>
      </div>
      <div class="middle">
        <p><span>课程价格</span><b>￥1170</b></p>
        <p><span>优惠券</span><b class="arrows">></b></p>
        <p><span>实付总额</span><b>￥1170</b></p>
      </div>
      <div class="next">
        <div>
          <p><img src="../../public/mienimg/weixin.jpg" alt="微信图像"><span>微信支付</span></p>
          <van-radio-group class="module" v-model="radio">
            <van-radio name="1"></van-radio>
          </van-radio-group>
        </div>
        <div>
          <p><img src="../../public/mienimg/zhifubao.jpg" alt="支付宝图像"><span>支付宝支付</span></p>
          <van-radio-group class="module" v-model="radio">
            <van-radio name="2"></van-radio>
          </van-radio-group>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="bottom">
        <button>提交订单</button> <b>1170</b> <i>￥</i> <em>合计:</em> <span>已优惠￥0</span>
      </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import {getProductInfoApi} from "../utils/api";

export default {
  data() {
    return {
      radio: '1',
    };
  },
  setup() {
    const state = reactive({});
    const onRefresh = () => {
      setTimeout(() => {
        state.loading = false;
      }, 1000);
    };

    return {
      state,
      onRefresh,
    };
  },
  methods:{
    luyou(){
      this.$router.push("/mine");
    }
  },
};
</script>

<style lang="less" scoped>
  .page{

    .left{
     position: fixed;
     font-size: 20px;
      top: 15px;
      left: 15px;
      z-index: 999;
    }
  }
  .content{
    padding: 10px 15px;
    background-color: rgb(243, 242, 242);
    height: 520px;

    .top{
      padding: 10px;
      background-color: white;
      border-radius: 8px;
      

      img{
        width: 25px;
        height: 25px;
        vertical-align: middle;
      }
      span{
        margin-left: 10px;
        font-size: 13px;
        vertical-align: middle;
      }
      .introduce{
        margin-top: 15px;
        display: flex;
        
        img{
          width: 130px;
          height: 90px;
        }
        div{
          padding: 12px 0;

          span{
            font-size: 14px;

            i{
              font-style: normal;
              font-size: 10px;
            }
          }
          p{
            padding: 1px 3px;
            margin: 5px 10px;
            font-size: 12px;
            color: rgb(160, 158, 158);
            background-color: rgb(235, 231, 231);
          }
        }
      }
    }
    .middle{
      background-color: white;
      padding: 5px 10px;
      border-radius: 8px;
      margin: 10px 0;

      p{
        display: flex;
        justify-content: space-between;
        // margin: 5px 0;
        padding: 5px 0;

        .arrows{
          color: gainsboro;
        }
      }
    }
    .next{
      background-color: white;
      border-radius: 8px;
      padding: 0 10px;

      div{
        display: flex;
        justify-content: space-between;

        p{

          img{
            width: 25px;
            height: 25px;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 15px;
          }
          span{
            vertical-align: middle;
          }
        }
        .module{
          margin-right: 15px;
        }
      }
    }
  }
  .bottom{
    position: fixed;
    bottom: 0;
    width: 100%;

    span,em,i,b,button{
      float: right;
    }

    span{
      font-size: 14px;
      color: tomato;
      margin-right: 10px;
      margin-top: 35px;
    }
    em{
      font-style: normal;
      font-size: 14px;
      margin-top: 35px;
    }
    i{
      font-style: normal;
      font-size: 14px;
      color: red;
      font-weight: 900;
      margin-top: 38px;
    }
    b{
      color: red;
      font-size: 20px;
      margin-top: 35px;
    }
    button{
      border: 0;
      border-radius: 20px;
      color: white;
      padding: 11px 25px;
      font-size: 14px;
      background-color: orange;
      margin: 20px 15px;
    }
  }
</style>