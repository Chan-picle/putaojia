<template>
  <div class="header">
    <div>
      <van-nav-bar title="我的配音" fixed placeholder />
      <van-icon class="left" name="arrow-left" @click="luyou"/>
    </div>
    <van-pull-refresh class="xiala" v-model="state.loading" @refresh="onRefresh">
      <van-empty description="赶紧去添加内容吧" />
    </van-pull-refresh>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      loading: false,
    });
    const onRefresh = () => {
      setTimeout(() => {
        state.loading = false;
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

    .xiala{
      background-color: #F2F2F2;
      height: 621px;
    }
  }
</style>