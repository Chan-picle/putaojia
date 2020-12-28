<template>
  <div>
    <div class="header">
      <van-nav-bar title="设置" fixed placeholder />
      <van-icon class="left" name="arrow-left" @click="luyou"/>
    </div>
    <div class="ul">
      <ul>
        <li>
          <p>个人头像</p><img class="touxiang" src="../../../public/mienimg/icon04.png" alt=""><span> ></span>
        </li>
        <li>
          <p>昵称</p><input type="text" :value="nc"><span>></span>
        </li>
        <li>
          <p>绑定微信</p><span>去绑定 ></span>
        </li>
        <li>
          <p>性别</p><span>男 ></span>
        </li>
        <li>
           <p>出生年月</p><span>2016-11-07 ></span>
        </li>
        <li>
           <p>个性签名</p><span>暂时还没有编辑个性签名~ ></span>
        </li>
        <li>
           <p>用户协议</p><span>></span>
        </li>
        <li>
           <p>隐私政策</p><span>></span>
        </li>
        <li>
           <p>检查更新</p><span>v4.1.4(91) ></span>
        </li>
      </ul>
      <div class="tuichu">
        <p>退出登录</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
let zhi=document.querySelector('.gai');

export default {
  data() {
    return {
      nc:"牛牛"
    }
  },
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
  }

   .ul{
      padding: 0 15px;

      li{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgb(235, 232, 232);
        position: relative;

        .touxiang{
          width: 35px;
          height: 40px;
          position: absolute;
          top: 5px;
          right: 16px;
        }

        p{
          padding: 15px 0;
          margin: 0;
        }
        input{
          border: none;
          text-align: right;
          position: absolute;
          right: 10px;
          line-height: 46px;
          font-size: 15px;
          color: rgb(154, 151, 151);
        }

        span{
          padding: 15px 0;
          font-size: 15px;
          color: rgb(154, 151, 151);
        }
      }
    }
  .tuichu{
    margin-top: 60px;
    background-color: rgb(247, 242, 242);
    border-radius: 20px;
    box-shadow: 0 1px 2px 1px rgb(220, 216, 216);

    p{
      text-align: center;
      padding: 10px 0;
      color: red;
    }
  }
</style>