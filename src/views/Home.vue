<template>
  <!-- <div class="home"> -->
    <router-view />
    <van-tabbar v-model="active" fixed :placeholder="true" active-color="#6B46C7" inactive-color="#959595">
       <van-tabbar-item v-for="(item,index) in iconList" :key="index" :to="item.to">
        <span>{{item.text}}</span>
        <template #icon="props">
          <img :src="props.active ? item.active : item.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  <!-- </div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Options, Vue } from 'vue-class-component';
import { ref } from 'vue';

// interface listType {text:string;to:string};
interface iconType {text:string;to:string,active:string;inactive:string};

export default defineComponent({
  data(){
    return {
      iconList:[
        {
          text:"首页",
          to:"/index",
          active: 'http://42.192.148.152/wp-content/uploads/2020/12/selected01@2x.png',
          inactive: 'http://42.192.148.152/wp-content/uploads/2020/12/normal01@2x.png',
        },
        {
          text:"Hello",
          to:"/hello",
          active: 'http://42.192.148.152/wp-content/uploads/2020/12/selected02@2x.png',
          inactive: 'http://42.192.148.152/wp-content/uploads/2020/12/normal02@2x.png',
        },
        {
          text:"Timetable",
          to:"/timetable",
          active: 'http://42.192.148.152/wp-content/uploads/2020/12/selected03@2x.png',
          inactive: 'http://42.192.148.152/wp-content/uploads/2020/12/normal03@2x.png',
        },
        {
          text:"我的",
          to:"/mine",
          active: 'http://42.192.148.152/wp-content/uploads/2020/12/selected04@2x.png',
          inactive: 'http://42.192.148.152/wp-content/uploads/2020/12/normal04@2x.png',
        }
      ] as Array<iconType>
    }
  },
  methods: {
    // jumpTo(to:string):void{
    //   this.$router.push(to);
    // }
  },
  mounted():void{
    //点击底部nanbar后刷新，active保持和页面统一
    this.iconList.forEach((elm,index)=>{
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
