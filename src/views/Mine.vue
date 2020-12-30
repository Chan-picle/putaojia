<template>
 <!-- 页面 -->
  <div id="page">
    <!-- 头部 -->
    <div id="header">
      <span>
      <van-icon name="setting-o" @click="shezhiroot" />
      </span>
      <span>
        <van-icon class="right" name="chat-o" @click="xiaoxiroot"/>
      </span>
    </div>

   <!-- 下拉刷新 -->
    <van-pull-refresh class="xiala" v-model="state.loading" @refresh="onRefresh" success-text="刷新成功">
      <!-- 个人信息 -->
      <div id="person">
          <div class="top">
            <img src="../assets/logo.png" alt="头像">
            <b @click="login">{{username}}</b>
            <span> <img src="../../public/mienimg/icon03.png" alt=""> 激活会员卡</span>
          </div>
          <div class="bottom">
            <span @click="shengyv" class="font">剩余课时:</span>
            <span @click="shengyv" class="num">0</span>
            <span @click="juan" class="font">现金卷:</span>
            <span @click="juan" class="num">0</span>
          </div>
      </div>
      <!-- 主体内容 -->
      <div id="main-part">
        <!-- 第一部分 -->
        <div>
          <ul>
            <li v-for="(item,index) in onelist" :key="index" :class="item.class" @click="luyou(item.to)">
              <!-- <van-icon name="location" /> -->
              <img src="../../public/mienimg/icon04.png" alt="">
              <span>{{item.text}}</span>
              <span class="right">></span>
            </li>
          </ul>
        </div>
        <!-- 第二部分 -->
        <div>
          <ul>
            <li v-for="(item,index) in twolist" :key="index" :class="item.class" @click="luyou(item.to)">
              <img src="../../public/mienimg/icon09.png" alt="">
              <span>{{item.text}}</span>
              <span class="right">></span>
            </li>
          </ul>
        </div>
        <!-- 第三部分 -->
        <div>
          <ul>
            <li v-for="(item,index) in threelist" :key="index" :class="item.class" @click="luyou(item.to)">
              <img src="../../public/mienimg/icon04.png" alt="">
              <span>{{item.text}}</span>
              <span class="right">></span>
            </li>
          </ul>
        </div>
      </div>
    </van-pull-refresh>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { reactive } from 'vue';
import {getUserApi} from "../utils/api";
// interface listType {text:string;to:string};
export default defineComponent({
  data (){
    return {
      onelist:[{text:"我的外教",to:"/waijiao"},{text:"我的订单",to:"/dingdan"},{text:"已购课程",to:"/kecheng",class:"bt"}],
      twolist:[{text:"我的绘本",to:"/huiben"},{text:"我的配音",to:"/peiyin"},{text:"试听报告",to:"/baogao",class:"bt"}],
      threelist:[{text:"课程回放",to:"/huifang"},{text:"专属客服",to:"/kefu",class:"bt"}],
      username : "unknow"
    }
  },
  methods:{
    luyou(to:string){
      this.$router.push(to);
    },
    xiaoxiroot(){
      this.$router.push("/xiaoxi")
    },
    shezhiroot(){
      this.$router.push("/shezhi")
    },
    shengyv(){
      this.$router.push("/shengyv")
    },
    juan(){
      this.$router.push("/juan")
    },
    login(){
      this.$router.push("/login")
    }
  },
  setup() {
    const state = reactive({
      loading: false
    });
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
  components: {},
  props:{},
  mounted() {
   let userid = sessionStorage.getItem("userid") ;
   getUserApi({id:userid}).then((res:any)=>{
     this.username = res.result.user_name;
   })
  }
});
</script>

<style lang="less" scoped>
// 页面
#page{
  background-color: #F2F2F2;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
// 头部
  #header{
    width: 100%;
    height: 45px;
    background-color: white;
    box-sizing: border-box;
    padding: 10px 10px;

    span{
      font-size: 25px;
      color: gray;
    }

    .right{
      float: right;
    }
  }
// 下拉刷新
  .xiala{
    height: 572px;
    
// 个人信息 
    #person{
    background-color: white;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;

    .top{
      padding: 10px 15px;
      display: flex;
      position: relative;

      img{
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }

      b{
        font-size: 25px;
        margin: auto 0;
      }

      span{
        color: gray;
        font-size: 14px;
        position: absolute;
        right: 20px;
        top: 25px;

        img{
          width: 16px;
          height: 16px;
          margin: 0;
          vertical-align:bottom;
        }
      }
    }

    .bottom{
      padding-bottom: 15px;

      .font{
        font-size: 13px;
        margin-right: 10px;
        margin-left: 60px;
      }
      .num{
        font-size: 18px;
        color: tomato;
        display: inline-block;
        width: 60px;
        height: 18px;
        vertical-align:bottom;
      }
    }
  }
// 主体内容
  #main-part{
    margin: 0 10px;
    background-color:#F2F2F2;

    div{
      background-color: white;
      border-radius: 5px;
      padding: 0 10px;
      margin-top: 15px;

      li{
        padding: 13px 0;
        border-bottom: 1px solid #EEEEEE;
        position: relative;

        img{
          width: 20px;
          height: 20px;
          vertical-align:bottom;
        }

        span{
          margin-left: 10px;
          vertical-align:bottom;
        }

        .right{
          position: absolute;
          right: 0;
          color: rgb(189, 180, 180);
        }
      }

      .bt{
        border-bottom: none;
      }
    }
  }
  }
}
</style>