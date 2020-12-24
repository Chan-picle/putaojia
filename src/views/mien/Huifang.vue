<template>
  <div class="header">
    <div>
      <van-nav-bar title="课堂回放" fixed placeholder />
      <van-icon class="left" name="arrow-left" @click="luyou"/>
    </div>
    <van-pull-refresh class="xiala" v-model="state.loading" @refresh="onRefresh">
      <p>刷新次数: {{ state.count }}</p>
    </van-pull-refresh>
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

    .xiala{
      background-color: yellow;
      height: 621px;
    }
  }
</style>
