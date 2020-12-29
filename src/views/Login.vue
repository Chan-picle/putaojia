<template>
  <div class="page">
    <van-icon class="arrows" name="arrow-left" @click="backTo" />

    <div class="up">
      <h2>手机号登录</h2>
      <input type="text" placeholder="输入手机号" v-model="phone" />
      <input type="text" placeholder="输入验证码" v-model="code" />
      <button class="send" @click="send">{{ verify }}</button>
    </div>
    <div class="middle">
      <span class="checkbox" :class="class" @click="change"></span>
      <span class="tick" :class="class2" @click="change"></span>
      <span class="retract gray-font">注册登录即代表阅读并同意</span>
      <a href="javascript:;">用户协议</a> <span class="gray-font">及</span> <a href="javascript:;">隐私政策</a>
    </div>
    <div class="login">
      <van-button class="button" type="default" @click="login">登 录</van-button>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
import {loginApi,getVertifyCodeApi} from "../utils/api";
export default {
  data() {
    return {
      verify: "发送验证码",
      time : 60,
      num: -1,
      class: "checkbox-begin-class",
      class2: "tick-begin-class",
      code:"",
      phone:""
    };
  },
  methods: {
    send() {
      //判断手机号码正则
      let reg = /^[1]([3-9])[0-9]{9}$/;
      if(!reg.test(this.phone)){
        Toast("请输入正确的手机号码")  
        return
      }
      getVertifyCodeApi({phone:this.phone}).then(res=>{
        Toast(res.msg);
      })
      let timer;
      let data = this;
      if(this.time ===60){
        if (this.time  > 0) {
          timer = setInterval(function () {
            data.verify = data.time  + "秒后可再次发送";
            data.time --;
            if (data.time  < 0) {
              clearInterval(timer);
              data.verify = "发送验证码";
              data.time =60;
            }
          }, 1000);
        }
      }
    },
    change() {
      this.num = this.num * -1;
      if(this.num ==1){
        Toast("请阅读并同意遵守《葡萄架用户协议》")
      }
      if (this.num < 0) {
        this.class = "checkbox-begin-class";
        this.class2 = "tick-begin-class";
      } 
      else {
        this.class = "checkbox";
        this.class2 = "tick";
      }
    },
    backTo() {
      this.$router.go(-1);
    },
    login(){
      if(this.num>0){
        Toast("请阅读并同意遵守《葡萄架用户协议》");
        return;
      }
      loginApi({phone:this.phone,code:this.code}).then(res=>{
        Toast(res.msg);
        if(!res.status){
          sessionStorage.setItem("token",res.result.token);
          sessionStorage.setItem("phone",res.result.phone);
          sessionStorage.setItem("userid",res.result.userid);
          this.$router.push(this.$route.query.redirect)
        }
      })
    }
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
.page {
  padding: 15px 10px;

  .arrows {
    color: white;
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 18px;
    font-weight: 900;
    background-color: #ff9803;
    border-radius: 50%;
  }

  .up {
    padding: 0 20px;
    margin-top: 60px;
    position: relative;

    h2 {
      margin-bottom: 40px;
    }
    input {
      border: none;
      border-bottom: 1px solid rgb(221, 215, 215);
      padding: 18px 0;
      width: 100%;
    }
    .send {
      border: none;
      display: inline-block;
      padding: 5px 15px;
      border-left: 1px solid rgb(221, 215, 215);
      color: #ff9803;
      background-color: white;
      position: absolute;
      bottom: 11px;
      right: 15px;
    }
  }
}
.middle {
  padding: 0 20px;
  margin-top: 20px;
  position: relative;

  .checkbox {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid rgb(213, 209, 209);
    border-radius: 50%;
    margin-right: 5px;
    position: absolute;
    left: 25px;
    top: -1px;
  }
  .checkbox-begin-class {
    background-color: #ff9803;
    border: 2px solid #ff9803;
  }

  .tick {
    display: inline-block;
    width: 6px;
    height: 3px;
    border: 2px solid rgb(213, 209, 209);
    border-top: 0;
    border-right: 0;
    position: absolute;
    left: 31px;
    top: 6px;
    transform: rotate(-45deg);
  }
  .tick-begin-class {
    color: #ff9803;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
  }

  .retract {
    margin-left: 30px;
  }
  .gray-font {
    font-size: 14px;
    color: #9b9b9b;
    display: inline-block;
    margin-bottom: 5px;
  }
  a {
    color: #ff9803;
    font-size: 14px;
  }
}
.login {
  margin: 20px 20px;
  border-radius: 22px;
  background-color: #ff9803;
  box-shadow: 0 1px 2px 1px rgb(193, 189, 189);
  overflow: hidden;

  .button {
    padding: 12px 0;
    text-align: center;
    color: white;
    background-color: #ff9803;
    width: 100%;
    border: none;
    font-size: 16px;
  }
}
</style>