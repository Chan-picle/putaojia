<template>
<!-- 外教列表 -->
<div class="header-container">
  <header>
    <van-icon name="arrow-left" size="22" style="line-height:54px" @click="back"/>
    <van-search shape="round" v-model="value" placeholder="搜索外教" />
    <div style="line-height:54px;vertical-align: middle;">
      <span style="vertical-align: middle;">筛选</span>
      <van-icon name="filter-o" size="22" style="vertical-align: middle;" />
    </div>
  </header>
  <div class="tabs">
    <ul>
      <li @click="normalSort();change($event,0)" :class="{active:active==0}">综合排序</li>
      <li @click="scoreSort(); change($event,1)" :class="{active:active==1}">评分</li>
      <li @click="salesSort();change($event,2)" :class="{active:active==2}">销量</li>
    </ul>
    <van-icon name="apps-o" size="22" :style="{color:purple}" @click="changeRound" />
  </div>
</div>
<div class="tab-contaier" v-if="list.length">
  <div class="sort" v-show="active==0">
     <div v-if="isRound">
      <round-card v-for="item in list" :key="item.productId" :msg="item" />
    </div>
    <div v-else>
      <teacher-card v-for="item in list" :key="item.productId" :msg="item" />
    </div>
  </div>
  <div class="score" v-show="active==1">
    <div v-if="isRound">
      <round-card v-for="item in list" :key="item.productId" :msg="item" />
    </div>
    <div v-else>
      <teacher-card v-for="item in list" :key="item.productId" :msg="item" />
    </div>
  </div>
  <div class="sold" v-show="active==2">
     <div v-if="isRound">
      <round-card v-for="item in list" :key="item.productId" :msg="item" />
    </div>
    <div v-else>
      <teacher-card v-for="item in list" :key="item.productId" :msg="item" />
    </div>
  </div>
</div>

</template>
<script lang="ts">
import { defineComponent } from "vue";
import TeacherCard from "../components/Teacher/TeacherCard.vue";
import RoundCard from "../components/Teacher/RoundCard.vue";
import {sortListApi,scoreListApi,soldListApi} from "../utils/api";
export default defineComponent({
  components: {TeacherCard,RoundCard},
  props:{},
  data() {
    return {
      value:"",
      list:[],
      active:0,
      isRound:false,
      purple:"#2d2d2d"
    };
  },
  computed: {},
  beforeRouteEnter (to, from, next) {
    sortListApi({}).then((res:any)=>{
      next((vm:any)=>{
        vm.list = res.result;
      })
    })
  },
  mounted() {},
  watch:{
    isRound(){
        this.purple =  this.isRound ? "#633EC1":"#2d2d2d" ;
    }
  },
  methods: {
    changeRound(){
      this.isRound = !this.isRound;
    },
    back(){
      this.$router.go(-1);
    },
    //不同的方法请求
    //普通排序
    async normalSort(){
      let res:any = await sortListApi({})
      this.list = res.result;
    },
    //评分排序
    scoreSort(){
        scoreListApi({}).then((res:any)=>{
          this.list = res.result;
      });
    },
    //销量排序
    salesSort(){
       soldListApi({}).then((res:any)=>{
        this.list = res.result;
      });
    },
    change(e:any,n:any){
      this.active = n;
    }
  }
});
</script>
<style lang="less" scoped>
.header-container{
  z-index: 5;
  height: 85px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left:0;
  right:0;
  i{
    font-weight: bold;
  }
  header{
    padding: 0 10px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    .van-search{
      position: relative;
      width: 274px;
    }
  }
  .tabs{
    flex: 1;
    display: flex;
    ul{
      display: flex;
      width: 90%;
      flex: 1;
      li{
        width: 33%;
        text-align: center;
        height: 100%;
        &.active{
          color:#633EC1
        }
      }
    }
    i{
      width: 42px;
      text-align: center;
    }
  }
}
.tab-contaier{
  padding-bottom: 11px;
  position: absolute; ;
  top: 85px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  background-color: #F2F2F2;
}

</style>

