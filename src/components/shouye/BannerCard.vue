<template>
  <div class="card-container">
    <div class="c-wrapper">
      <div class="c-header">
        <img src="/img/shouye/touxiang01.png" alt="">
        <div>
          <span>Kim</span>
          <img src="/img/flags/xixik-8accb7e51f5673c1.png" alt="">
          <p>3年教学经验</p>
        </div>
      </div>
      <p class="c-info">学识渊博，擅长对各国文化进行拓展，多彩多艺，有亲和力</p>
      <div class="c-tag">
        <div v-for="(item,index) in info.cTag">{{item}}</div>
        <!-- <div>工商管理硕士</div> -->
      </div>
      <div class="c-img">
        <img src="http://42.192.148.152/wp-content/uploads/2020/12/tu01.png" alt="">
        <img src="http://42.192.148.152/wp-content/uploads/2020/12/tu02.png" alt="">
        <img src="http://42.192.148.152/wp-content/uploads/2020/12/tu03.png" alt="">
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref,reactive } from 'vue';

interface infoType{
  cTou:string,
  cName:string,
  cFlag:string,
  cExp:number,
  cInfo:string,
  cImg:string[],
  cBg:string,
  cTag:string[]
}

export default defineComponent({
  props:{},
  data(){
    return {
      info: {
        cTou:"/img/shouye/touxiang01.png",
        cName:"Kim",
        cFlag:"/img/flags/xixik-8accb7e51f5673c1.png",
        cExp:3,
        cInfo:"学识渊博，擅长对各国文化进行拓展，多彩多艺，有亲和力",
        cImg:["http://42.192.148.152/wp-content/uploads/2020/12/tu01.png","http://42.192.148.152/wp-content/uploads/2020/12/tu02.png","http://42.192.148.152/wp-content/uploads/2020/12/tu03.png"],
        cBg:"#002253",
        cTag:["TEFL","工商管理硕士"]
      }as infoType
    }
  },
  setup(){
    const info1 = reactive(
      {
        cTou:"/img/shouye/touxiang01.png",
        cName:"Kim",
        cFlag:"/img/flags/xixik-8accb7e51f5673c1.png",
        cExp:3,
        cInfo:"学识渊博，擅长对各国文化进行拓展，多彩多艺，有亲和力",
        cImg:["http://42.192.148.152/wp-content/uploads/2020/12/tu01.png","http://42.192.148.152/wp-content/uploads/2020/12/tu02.png","http://42.192.148.152/wp-content/uploads/2020/12/tu03.png"],
        cBg:"#002253",
        cTag:["TEFL","工商管理硕士"]
      }as infoType);
    return {info1}
  },
  computed: {},

  mounted() {
  },

  methods: {}
});
</script>
<style lang="less" scoped>
@import "../../assets/style/var.less";
.card-container{
  width: 346px;
  height: 221px;
  border-radius:15px;
  background-color: #002253;
  color:#fff;
  font-size:12px;
  position: relative;
  .c-wrapper{
    padding:12px 13px 0;
    .c-header{
      display: flex;
      img{
        width: 40px;
        height: 40px;
      }
      >div{
        height: 40px;
        margin-left:12px;
        span{
          font-size:14px;
        }
        img{
          height: 12px;
          width:23px ;
          margin-left:10px
        }
        p{
          font-size: 12px;
          line-height: 22px;
          transform: scale(0.8);
          margin-left:-7px;
        }
      }
    }
    .c-info{
      margin:8px 0px;
      height: 32px;
      // transform: scale(0.8);
      overflow: hidden;
    }
    .c-tag{
      margin-bottom: 8px;
      div{
        display: inline-block;
        transform: scale(0.8);
        line-height: 18px;
        font-size: 12px;
        padding:5px;
        background-color: rgba(255,255,255,0.2);
        border-radius: 2px;
      }
    }
    .c-img{
      display: flex;
      justify-content: space-between;
      z-index: 2;
      position: relative;
    }
  }
  .bottom{
    height: 68px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: rgba(255,255,255,0.8);
    border-radius: 5px 5px 15px 15px;
    z-index: 0;
  }
}
</style>