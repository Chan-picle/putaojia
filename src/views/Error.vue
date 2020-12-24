<template>
  <van-empty image="error" description="404 Not Found">
    <van-button round type="danger" class="bottom-button" @click="backIndex">回到首页</van-button>
  </van-empty>  
</template>
<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  methods:{
    backIndex():void{
        this.$router.replace("/index");
    }
  },
  setup(){
    // const backIndex = () =>{
    //     this.$router.replace("/index");
    // }
    // return {backIndex}
  },
});
</script>
<style lang="less" scoped>
.bottom-button {
  width: 160px;
  height: 40px;
}
</style>