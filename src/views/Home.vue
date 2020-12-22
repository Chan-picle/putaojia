<template>
  <!-- <div class="home"> -->
    <van-tabbar v-model="active" fixed>
      <van-tabbar-item icon="home-o" v-for="(item,index) in list" :key="index" @click="jumpTo(item.to)">{{item.text}}</van-tabbar-item>
    </van-tabbar>
    <router-view />
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Options, Vue } from 'vue-class-component';
import { ref } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

// @Options({
//   components: {
//     // HelloWorld,
//   },
// })
// export default class Home extends Vue {}
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
  setup() {
    const active = ref('home');
    return { active };
  },
})
</script>
<style lang="less" scope>
// .van-tabbar{
//   background-color: #fff;
//   display: flex;
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   .van-tabbar-item{
//     width: 25%;
//     text-align: center;
//   }
// } 
</style>
