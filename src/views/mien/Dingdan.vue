<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <van-nav-bar title="我的订单" fixed placeholder />
      <van-icon class="left" name="arrow-left" @click="luyou" />
    </div>
<!-- tab选项卡 -->
    <van-tabs  animated swipeable>
      <van-tab v-for="(item,index) in list" :key="index" :title="item.title">
        <van-pull-refresh class="xiala" v-model="state.loading" @refresh="onRefresh">
          <van-empty description="赶紧去添加内容吧" />
        </van-pull-refresh>
      </van-tab>
    </van-tabs>

    
  </div>
</template>

<script>
import { reactive } from 'vue';
import { Toast } from 'vant';

export default {
  data() {
    return {
      list:[{title:"全部"},{title:"待付款"},{title:"已付款"},{title:"已取消"},{title:"已退款"}]
    }
  },
  methods:{
    luyou(){
      this.$router.push("/mine");
    }
  },
  setup() {
    const state = reactive({
      count: 0,
      loading: false,
    });
    const onRefresh = () => {
      setTimeout(() => {
        Toast('刷新成功');
        state.loading = false;
        state.count++;
      }, 1000);
    };

    return {
      state,
      onRefresh,
    };
  },
};
</script>

<style lang="less" scoped>
  .header{

    .left{
     position: fixed;
     font-size: 20px;
      top: 15px;
      left: 15px;
      z-index: 999;
    }
  }
   .xiala{
      background-color: #F2F2F2;
      height: 577px;

      .aa{
        display: block;
        height: 500px;
        // background-color: red;
      }
    }
</style>