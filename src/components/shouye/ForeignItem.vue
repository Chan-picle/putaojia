<template>
<div class="video">
  <div class="circle">
    <div class="rectangle"></div>
  </div>
  <video src="/img/shouye/mov_bbb.mp4" :poster="info.img"  @click="startvideo">您的浏览器不支持video标签</video>
</div>
<div class="t-info">
  <img :src="'/img/shouye/'+ msg.t_tou" alt="" style="height:31px;float:left">
  <div style="float:left;margin-left:6px">
    <div style="font-size:12px;text-transform:capitalize">{{info.name}}</div>
    <div><img class="flag" :src="info.flag" alt=""><span style="margin-left:6px">{{info.nation}}</span></div>
  </div>
  <van-icon name="arrow" />
</div>


</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
  props:["msg"],
  data() {
    return {

    };
  },
  //可恶，filter被vue3废除了，只能用计算属性了
  computed: {
    info(){
      return {
        flag:"/img/flags/"+this.msg.flag,
        img:"/img/shouye/"+this.msg.t_img,
        name:this.msg.t_name,
        nation:this.msg.t_nation,
        tou:this.msg.t_tou
      }
    }
  },
  methods: {
    startvideo(e){
      e.target.setAttribute("controls","");
      e.target.parentNode.removeChild(e.target.parentNode.children[0]);
    }
  }
});
</script>
<style lang="less" scoped>

.video{
  position: relative;
  .circle{
    width: 40px;
    height: 40px;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius:50%;
    .rectangle{
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      height: 0px;
      width: 0;
      border:10px solid transparent;
      border-left-color:#fff;
      border-right-width: 0;
    }
  }
  video{
    width: 100%;
    height: 200px;
  }
}
.t-info{
  height:66px;
  padding:0 15px;
  display:table-cell;
  vertical-align:middle;
  .flag{
    height: 10px;
    width: 19px;
  }
  span{
    font-size: 12px;
  }
  i{
    position: absolute;
    right: 15px;
  }
}
</style>