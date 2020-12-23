<template>
  <van-search v-model="value" placeholder="搜索外教/配音" shape="round" @focus="searchFocus"/>
  <div class="index-container">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="index">
            <div class="i-selector">
              <van-grid :column-num="5" square :border="false">
                <van-grid-item v-for="(item,index) in selectorList" :key="index" >
                  <img :src="item.icon">
                  <span>{{item.text}}</span>
                </van-grid-item>
              </van-grid>
              <div class="dot">
                  <div class="left"></div>
                  <div class="right"></div>
              </div>
            </div>
            <div class="banner">
              <p><span>推荐外教</span><span>全部外教<van-icon name="arrow" /></span></p>
              <div class="cards">
                <banner-card />
              </div>
            </div>
        </div>
      </van-pull-refresh>
  </div>

  
</template>
<script lang="ts">
import { defineComponent ,ref,reactive} from "vue";
import BannerCard from "../components/shouye/BannerCard.vue";
// import { getHello } from "../utils/api";

interface selectType{
  icon:string,
  text:string
}

export default defineComponent({
  setup(){
    //搜索框文字
    const value = ref('');
    //搜索框聚焦事件
    const searchFocus = ()=>{
      console.log(1);
    };
    return { value,searchFocus };
  },
  data(){
    return {
      isLoading : false,
      selectorList:[{
        icon:"http://42.192.148.152/wp-content/uploads/2020/12/icon01@2x.png",
        text:"外教"
      },{
        icon:"http://42.192.148.152/wp-content/uploads/2020/12/icon02@2x.png",
        text:"Magic-Echo"
      },{
        icon:"http://42.192.148.152/wp-content/uploads/2020/12/icon03@2x.png",
        text:"名师公开课"
      },{
        icon:"http://42.192.148.152/wp-content/uploads/2020/12/icon04@2x.png",
        text:"BBC经典"
      },{
        icon:"http://42.192.148.152/wp-content/uploads/2020/12/icon05@2x.png",
        text:"TED科普"
      },{
        icon:"http://42.192.148.152/wp-content/uploads/2020/12/icon06@2x.png",
        text:"自然拼读"
      },{
        icon:"http://42.192.148.152/wp-content/uploads/2020/12/icon07@2x.png",
        text:"STEAM"
      },{
        icon:"http://42.192.148.152/wp-content/uploads/2020/12/icon08@2x.png",
        text:"牛津阅读树"
      },{
        icon:"http://42.192.148.152/wp-content/uploads/2020/12/icon09@2x.png",
        text:"RAZ绘本"
      },{
        icon:"http://42.192.148.152/wp-content/uploads/2020/12/icon10@2x.png",
        text:"英语游戏"
      }] as Array<selectType>
    }
  },
  mounted() {
  },
  methods: {
   onRefresh() {
     setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  },
  components: {BannerCard},
  props:{},
  
});
</script>
<style lang="less" >
@import "../assets/style/var.less";
.index-container{
  position: absolute;
  bottom:50px;
  top:54px;
  left:0;
  right:0;
  background-color: #f5f5f5;
  overflow-y: auto;
}
.van-cell .van-field__left-icon {
    margin-right: 17px;
}
.van-search{
  position: fixed;
  top:0;
  left:0;
  right:0;
}
.index{
  .van-grid-item{
    .van-grid-item__content{
      background-color: #f5f5f5;
    }
      img{
        width: 31px;
      }
      span{
        font-size:11px;
        margin-top:8px;
        color:#333;
      }
  }
  .dot{
    width: 20px;
    height: 11px;
    margin: 0 auto;
    .left{
      width: 11px;
      height: 4px;
      border-radius: 2px;
      background-color: @themeclolr;
      float: left;
      margin-top: 4px;
    }
    .right{
      width: 4px;
      height: 4px;
      border-radius: 2px;
      background-color: #D8D8D8;
      float: right;
      margin-top: 4px;
    }
  }
  .banner{
    p{
      font-size: 14px;
      padding:0 15px;
      :last-child{
        color:#737373;
        float: right;
        i{
          line-height: 20px;
          margin-left: 5px;
        }
      }
    }
  }
}

</style>