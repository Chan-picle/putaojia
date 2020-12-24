<template>
 <div class="wai">
   <van-icon class="jiantou" name="arrow-left" @click="luyou"/>

   <div class="nei">
     <h2>手机号登录</h2>
     <input type="text" placeholder="输入手机号">
     <input type="text" placeholder="输入验证码">
     <span class="dingwei">发送验证码</span>
   </div>
   <div class="dian">
     <span class="tao" :class="class" @click="taobian"></span>
     <span class="gou" :class="class2" @click="taobian"></span>
     <span class="shuojin shenme">注册登录即代表阅读并同意</span> <a href="javascript:;">用户协议</a> <span class="shenme">及</span> <a href="javascript:;">隐私政策</a>
   </div>
   <div class="denglu"><p>登录</p></div>
 </div>
</template>
<script>
export default {
  data(){
    return {
      num:1,
      class:"gaibian",
      class2:"zaibain"
    }
  },
  methods: {
    taobian() {
      this.num=this.num*-1;
      if(this.num<0){
        this.class="taobian";
        this.class2="goubian";
      }else{
        this.class="gaibian";
        this.class2="zaibain";
      }
    },
    luyou(){
      this.$router.push("/mine");
    }
  }
}
</script>

<style lang="less" scoped>
.wai{
  padding: 15px 10px;

  .jiantou{
    color: white;
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 18px;
    font-weight: 900;
    background-color:#FF9803;
    border-radius: 50%;
  }

  .nei{
    padding: 0 20px;
    margin-top: 60px;
    position: relative;

    h2{
      margin-bottom: 40px;
    }
    input{
      border: none;
      border-bottom: 1px solid rgb(221, 215, 215);
      padding: 18px 0;
      width: 100%;
    }
    .dingwei{
      display: inline-block;
      padding: 5px 15px;
      border-left: 1px solid  rgb(221, 215, 215);
      color: #FF9803;
      position: absolute;
      bottom: 11px;
      right: 15px;
    }
  }
}
.dian{
   padding: 0 20px;
   margin-top: 20px;
   position: relative;

   .tao{
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
   .taobian{
     background-color: #FF9803;
     border: 2px solid #FF9803;
   }

  .gou{
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
   .goubian{
     color: #FF9803;
   }

   .shuojin{
     margin-left: 30px;
     
   }
   .shenme{
     font-size: 14px;
     color: #9B9B9B;
     display: inline-block;
     margin-bottom: 5px;
   }
   a{
     color: #FF9803;
     font-size: 14px;
   }
}
.denglu{
  margin: 20px 20px;
  border-radius: 22px;
  background-color:  #FF9803;
  box-shadow: 0 1px 2px 1px rgb(193, 189, 189);

  p{
    padding: 12px 0;
    text-align: center;
    color: white;
  }
}

</style>