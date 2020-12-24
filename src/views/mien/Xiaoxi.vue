<template>
  <div class="header">
    <div>
      <van-nav-bar title="消息中心" fixed placeholder />
      <van-icon class="left" name="arrow-left" @click="luyou"/>
    </div>
    <van-pull-refresh class="xiala" v-model="state.loading" @refresh="onRefresh" success-text="刷新成功">

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
      background-color: yellow;
      height: 621px;
    }
  }
</style>