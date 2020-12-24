<template>
  <div>
    <div class="header">
      <van-nav-bar title="我的专属客服" fixed placeholder />
      <van-icon class="left" name="arrow-left" @click="luyou"/>
    </div>
    <div class="content">
      <div class="box"><img src="../../../public/mienimg/1.jpg" alt=""></div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { Toast } from 'vant';

export default {
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
  methods:{
    luyou(){
      this.$router.push("/mine");
    }
  }
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
  .content{
    padding: 15px;

    .box{
      border-radius: 5px;
      overflow: hidden;

      img{
        display: block;
      width: 100%;
      height: 100px;
    }
    }
  }
</style>