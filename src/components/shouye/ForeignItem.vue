<template>
<div class="video">
  <div class="circle">
    <div class="rectangle"></div>
  </div>
  <video src="/img/shouye/mov_bbb.mp4" poster="/img/shouye/shipin01.png"  @click="startvideo">您的浏览器不支持video标签</video>
</div>
<div class="t-info">
  <img src="/img/shouye/touxiang02.png" alt="" style="height:31px;float:left">
  <div style="float:left;margin-left:6px">
    <div style="font-size:12px">Mark</div>
    <div><img class="flag" src="/img/flags/xixik-15918023a398ceba.png" alt=""><span style="margin-left:6px">美国</span></div>
  </div>
  <van-icon name="arrow" />
</div>


</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
  props:{},
  data() {
    return {

    };
  },
  computed: {},

  mounted() {},

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