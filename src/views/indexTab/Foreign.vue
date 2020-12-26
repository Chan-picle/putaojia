<template>
  <foreign-item v-for="(item,i) in foreignList" :msg="item" />
  <van-loading type="spinner" color="#633EC1" vertical v-if="isRequest">加载中...</van-loading>
</template>
<script lang="ts">
/**
 * 首页外教展示舞台列表，mounted获得初始三条数据，传给组件，渲染页面，
 * 下拉到底部后再请求三条数据，push到foreignList
 * isBottom 是否到底
 * isRequest 是否还需要请求数据,先设置第一次到底部请求一次
 */
import { defineComponent, reactive } from "vue";
import ForeignItem from "../../components/shouye/ForeignItem.vue";
import {getForeignListApi} from "@/utils/api.ts";

export default defineComponent({
  components: {ForeignItem},
  // beforeRouteEnter (to, from, next) {
  //   next(vm=>{
  //     getForeignListApi({})
  //     .then(res=>{
  //       vm.foreignList =  res.result;
  //       console.log("vm",vm)
  //     })
  //     .catch(err=>{
  //       throw err;
  //     });
  //   })
  // },
  props:{},
  setup(){
    let isBottom = false;
    let isRequest = true;
    return {
      isBottom,
      isRequest
    } 
  },
  data() {
    return {
      foreignList:[]
    };
  },
  computed: {},

  mounted() {
    getForeignListApi({})
          .then(res=>{
            this.foreignList =  res.result;
          })
          .catch(err=>{
            throw err;
          });
    const box:HTMLElement = document.getElementsByClassName("index-container")[0];
    const container:HTMLElement = document.getElementsByClassName("index")[0];
    box.addEventListener("scroll",()=>{
      if(box.scrollTop+box.clientHeight===container.clientHeight){
        //到底部了
        this.isBottom = true;
        if(this.isRequest){
          this.isRequest = false;
          this.getDate();
        }
      }else{
        this.isBottom = false;
      }
    })
  },
  methods: {
    async getDate(){
      const res = await getForeignListApi({});
      this.foreignList = this.foreignList.concat(res.result);
    },
  }
});
</script>
<style lang="less" scoped>

</style>