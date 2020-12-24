<template>
  <div class="header">
    <div>
      <van-nav-bar title="消息中心" fixed placeholder />
      <van-icon class="left" name="arrow-left" @click="luyou"/>
    </div>
    <van-pull-refresh class="xiala" v-model="state.loading" @refresh="onRefresh" success-text="刷新成功">
      <div class="box">
        <div class="content">
        <img src="../../../public/mienimg/dianhua.jpg" alt="">
        <p>系统消息</p>
        </div>
        <div class="content">
          <img src="../../../public/mienimg/dianhua.jpg" alt="">
          <p>评价消息</p>
        </div>
        <div class="content">
          <img src="../../../public/mienimg/dianhua.jpg" alt="">
          <p class="none">点赞评论</p>
        </div>
      </div>
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

      .box{
        margin-top: 15px;
        background-color: white;

        .content{
          display: flex;
          flex-direction: row;

          img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin: 10px 15px 0;
          }

          p{
            flex-grow: 1;
            padding: 15px 0 30px 0;
            border-bottom: 1px solid rgb(181, 173, 173);
            margin: 0;
          }
          .none{
            border: none;
          }
        }
      }
    }
  }
</style>