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
    <van-icon name="apps-o" size="22" />
  </div>
</div>
<div class="tab-contaier">

</div>

</template>
<script>
import { defineComponent } from "vue";
import TeacherList from "../components/Teacher/TeacherCard.vue";
export default defineComponent({
  components: {},
  props:{},
  data() {
    return {
      value:"",
      list:[],
      active:0
    };
  },
  computed: {},

  mounted() {},

  methods: {
    back(){
      this.$router.go(-1);
    },
    //不同的方法请求
    //普通排序
    normalSort(){

    },
    //评分排序
    scoreSort(){},
    //销量排序
    salesSort(){},
    change(e,n){
      this.active = n;
    }
  }
});
</script>
<style lang="less" scoped>
.header-container{
  height: 85px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
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
  height: 500px;
  background-color: #F2F2F2;
}

</style>

