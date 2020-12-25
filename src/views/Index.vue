<template>
  <van-search v-model="value" placeholder="搜索外教/配音" shape="round" @focus="searchFocus"/>
  <div class="index-container">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="index">
            <div id="selector" class="i-selector">
              <ul>
                <li v-for="(item,index) in selectorList" :key="index">
                  <img :src="item.icon" alt="">
                  <span>{{item.text}}</span>
                </li>
              </ul>
            </div>
            <div class="dot">
                  <div class="left" :class="{scroll:!isOver}"></div>
                  <div class="right" :class="{scroll:isOver}"></div>
            </div>
            <div class="banner">
              <p><span>推荐外教</span><span>全部外教<van-icon name="arrow" /></span></p>
              <div class="cards">
                <!-- 轮播 -->
                <van-swipe class="my-swipe" :show-indicators="false" :width="360">
                  <van-swipe-item>
                    <banner-card />
                  </van-swipe-item>
                  <van-swipe-item>
                    <banner-card />
                  </van-swipe-item>
                   <van-swipe-item>
                    <banner-card />
                  </van-swipe-item>
                </van-swipe>
              </div>
            </div>
            <div class="main">
              <div style="float:left;width:169px;margin-right:15px">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :width="169">
                  <van-swipe-item>
                    <img src="/img/shouye/tu04.png" alt="" style="border-radius:15px;width:169px">
                  </van-swipe-item>
                  <van-swipe-item>
                    <img src="/img/shouye/img.png" alt="" style="border-radius:15px;width:169px">
                  </van-swipe-item>
                </van-swipe>
              </div>
              <img src="/img/shouye/tu05.png" alt="" class="main-pic">
              <img src="/img/shouye/tu06.png" alt="" class="main-pic">
              <img src="/img/shouye/tu07.png" alt="" class="main-pic" style="margin-right:15px">
              <img src="/img/shouye/tu08.png" alt="" class="main-pic">
            </div>
            <!-- tab切换 -->
            <div class="index-tabs" style="height:800px">
              <van-sticky :offset-top="54" @scroll="tabNavScroll">
                <!-- <van-button type="primary">吸顶距离</van-button> -->
                <div>
                  <ul style="background-color:#F2F2F2">
                    <li @click="changetab(0)" :class="{active:active===0}">
                      <h5>课程</h5>
                      <p :class="{shrink:isFixed}">优选精品课程</p>
                      <img src="/img/shouye/icon14.png" alt="" v-if="active===0">
                    </li>
                    <li @click="changetab(1)" :class="{active:active===1}">
                      <h5>外教</h5>
                      <p :class="{shrink:isFixed}">外教展示舞台</p>
                      <img src="/img/shouye/icon14.png" alt="" v-if="active===1">
                    </li>
                    <li @click="changetab(2)" :class="{active:active===2}">
                      <h5>配音</h5>
                      <p :class="{shrink:isFixed}">Magic-Echo</p>
                      <img src="/img/shouye/icon14.png" alt="" v-if="active===2">
                    </li>
                  </ul>
                </div>
              </van-sticky>
              <router-view />
            </div>
        </div>
        <img :src="imgurl1" alt="">
      </van-pull-refresh>
  </div>

  
</template>
<script lang="ts">
import { defineComponent ,reactive,ref} from "vue";
import { getHello } from "../utils/api";
import BannerCard from "../components/shouye/BannerCard.vue";

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
    const isOver=false;
    const list = reactive([]);
    return { value, searchFocus, list,isOver};
  },
  data(){
    return {
      isLoading : false,
      selectorList:[{
        icon:"/img/shouye/icon01@2x.png",
        text:"外教"
      },{
        icon:"/img/shouye/icon02@2x.png",
        text:"Magic-Echo"
      },{
        icon:"/img/shouye/icon03@2x.png",
        text:"名师公开课"
      },{
        icon:"/img/shouye/icon04@2x.png",
        text:"BBC经典"
      },{
        icon:"/img/shouye/icon05@2x.png",
        text:"TED科普"
      },{
        icon:"/img/shouye/icon06@2x.png",
        text:"自然拼读"
      },{
        icon:"/img/shouye/icon07@2x.png",
        text:"STEAM"
      },{
        icon:"/img/shouye/icon08@2x.png",
        text:"牛津阅读树"
      },{
        icon:"/img/shouye/icon09@2x.png",
        text:"RAZ绘本"
      },{
        icon:"/img/shouye/icon10@2x.png",
        text:"英语游戏"
      },{
        icon:"/img/shouye/icon17.png",
        text:"创意AD"
      },{
        icon:"/img/shouye/icon16.png",
        text:"探索发现"
      },{
        icon:"/img/shouye/icon18.png",
        text:"国家地理"
      }] as Array<selectType>,
      //tab切换
      active:1,
      isFixed:false
    }
  },
  mounted() {
    const selectorBox:HTMLElement|null = document.getElementById("selector");
    console.log(selectorBox);
    if(selectorBox){
      selectorBox.addEventListener("scroll",function(){
        this.isOver = selectorBox.scrollLeft===525-selectorBox.offsetWidth;
    }.bind(this))
    }
    

  },
  methods: {
   onRefresh() {
     setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    tabNavScroll(c:any){
      //监听tabnav是否吸顶
      this.isFixed = c.isFixed;

    },
    changetab(i:number){
      console.log(i);
      this.active = i;
      switch(i){
        case 0:this.$router.replace("/index/course");break;
        case 1:this.$router.replace("/index/foreign");break;
        case 2:this.$router.replace("/index/echo");break;
      }
    }
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
  background-color: #F2F2F2;
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
  //图标
  .i-selector{
    overflow-x: auto;
    ul{
        width: 525px;
        display: flex;
        flex-wrap: wrap;
        li{
          height: 75px;
          width: 75px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          img{
            width: 31px;
          }
          span{
            font-size:11px;
            margin-top:8px;
            color:#333;
            transform: scale(0.8);
            width: 75px;
            text-align: center;
          }
        }
      }
  }
  
  // .van-grid-item{
  //   .van-grid-item__content{
  //     background-color:#F2F2F2;
  //   }
  //     img{
  //       width: 31px;
  //     }
  //     span{
  //       font-size:11px;
  //       margin-top:8px;
  //       color:#333;
  //       transform: scale(0.8);
  //       width: 75px;
  //       text-align: center;
  //     }
  // }
  .dot{
    width: 20px;
    height: 11px;
    margin: 0 auto;
    .left{
      height: 4px;
      border-radius: 2px;
      width: 4px;
      background-color:#D8D8D8;
      float: left;
      margin-top: 4px;
      &.scroll{
        width: 11px;
        background-color: @themeclolr;
      }
    }
    .right{
      height: 4px;
      width: 4px;
      border-radius: 2px;
      background-color: #D8D8D8;
      float: right;
      margin-top: 4px;
      &.scroll{
        width: 11px;
        background-color: @themeclolr;
      }
    }
  }
  .banner{
    margin-bottom:20px;
    >p{
      font-size: 14px;
      padding:0 15px 18px;
      :last-child{
        color:#737373;
        float: right;
        i{
          line-height: 20px;
          margin-left: 5px;
        }
      }
    }
    .cards{
      .van-swipe{
        .card-container{
          margin:0 auto;
        }
      }
    }
  }
  .main{
    overflow: hidden;
    width: 353px;
    margin:0 auto;
    .main-pic{
      float: left;
      width: 169px;
      margin-bottom: 10px;
    }
  }
  .index-tabs{
    ul{
      display:flex;
      li{
        flex:1;
        display:flex;
        flex-direction: column;
        align-items: center;
        &.active{
          h5{
            font-size: 16px;
            font-weight: bold;
          }
          p{
            color:@themeclolr;
          }
        }
        h5{
          font-size:14px;
          line-height: 28px;
          font-weight: normal;
        }
        p{
          font-size:12px;
          transition: all 0.3s linear;
          height: 16px;
          // 吸顶p消失
          &.shrink{
            height: 0;
            overflow: hidden;
          }
        }
        img{
          width: 22px;
        }
      }
    }
  }
}

</style>