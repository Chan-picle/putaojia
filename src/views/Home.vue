<template>
  <!-- <div class="home"> -->
    <router-view />
    <van-tabbar v-model="active" fixed :placeholder="true">
      <van-tabbar-item icon="home-o" v-for="(item,index) in list" :key="index" @click="jumpTo(item.to)">{{item.text}}</van-tabbar-item>
    </van-tabbar>
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Options, Vue } from 'vue-class-component';
import { ref } from 'vue';

interface listType {text:string;to:string}
export default defineComponent({
  data(){
    return {
      list:[{text:"首页",to:"/index"},{text:"Hello",to:"/hello"},{text:"Timetable",to:"/timetable"},{text:"我的",to:"/mine"}] as listType[]
    }
  },
  methods: {
    jumpTo(to:string):void{
      this.$router.push(to);
    }
  },
  mounted():void{
    //点击底部nanbar后刷新，active保持和页面统一
    this.list.forEach((elm,index)=>{
      if(elm.to===this.$route.path){
        this.active = index;
      }
    });
  },
  setup() {
    const active = ref(0);
    return { active };
  },
})
</script>
<style lang="less" scope>

</style>
