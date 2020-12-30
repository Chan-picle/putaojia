<template>
  <div>
    <div id="nc" v-show="nckg">
      <van-nav-bar
      title="修改昵称"
      left-text=""
      right-text="完成"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
      placeholder
       />
     <div class="z_index">
       <input class="nicheng" type="text" placeholder="请输入昵称" v-model="bjnr">
       <van-icon class="nicheng_x" size=30 name="cross" @click="nicheng_x_click()" />
     </div>
    </div>
    <div class="header">
      <van-nav-bar title="设置" fixed placeholder />
      <van-icon class="left" name="arrow-left" @click="luyou"/>
    </div>
    <div class="ul">
      <ul>
        <li>
          <p>个人头像</p><img class="touxiang" src="../../../public/mienimg/icon04.png" alt=""><span> ></span>
        </li>
        <li @click="nc_click()">
          <p>昵称</p><input type="text" :value="nc"><span>></span>
        </li>
        <li>
          <p>绑定微信</p><span>去绑定 ></span>
        </li>
        <li>
          <p>性别</p><span>{{userinfo.sex}} ></span>
        </li>
        <li>
           <p>出生年月</p><span>{{userinfo.birth}} ></span>
        </li>
        <li>
           <p>个性签名</p><span>{{userinfo.sign}} ></span>
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
        <button @click="logout">退出登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { defineComponent, reactive } from 'vue';
import {getUserApi,setUserApi} from "../../utils/api";

let zhi=document.querySelector('.gai');

export default defineComponent({
  data() {
    return {
      nc:"牛牛",
      //nc开关
      nckg:false,
      // 昵称编辑内容
      bjnr:"牛牛1",
      userinfo:{
        username:"unknow",
        sex:"男",
        birth:"2020-01-25",
        sign:"暂时还没有个性签名"
      }
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
    },
    //进入编辑昵称
    nc_click(){
      this.nckg=true
      this.bjnr=this.nc
    },
    //放弃编辑昵称返回
    onClickLeft(){
      this.nckg=false
    },
    // 昵称完成
    onClickRight(){
      this.nckg=false
      if(this.bjnr===""){
        // console.log(不更改);
      }else{
        this.nc=this.bjnr
      }
      // console.log(this.nc);
      let id = sessionStorage.getItem("userid");
      setUserApi({id:id,username:this.nc}).then(res=>{
        Toast(res.msg)
      })
      
    },
    //清除昵称
    nicheng_x_click(){
      this.bjnr="";
    },
    logout() {
      sessionStorage.clear();
      this.$router.push("/login");
    }
  },
  mounted() {
    let userid = sessionStorage.getItem("userid") ;
    getUserApi({id:userid}).then((res)=>{
      // this.userinfo.username = res.result.user_name;
      this.nc = res.result.user_name;
      this.userinfo.sex = res.result.sex == 1 ? "男":"女";
      this.userinfo.birth = res.result.birth;
      this.userinfo.sign = res.result.sign;
   })
  },

})
</script>


<style lang="less" scoped>
#nc{
  background-color: white;
  height: 100% ;
  width: 100% ;
  position: absolute ;
  top: 0px;
  z-index: 1000;
}
.nicheng{
  width: 88%;
  margin: 0 3%;
  height: 45px;
  border-radius: 10px;
  // margin-left: 5px;
  padding-left: 20px;
  border: 0px;
  background-color: rgba(0, 0, 0, .15);
}
.nicheng_x{
  position: absolute;
  right: 25px;
  top: 55px;
}
.z_index{
  z-index: 2000;
  margin-top: 46px;
  
}
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
  border-radius: 20px;
  box-shadow: 0 1px 2px 1px rgb(220, 216, 216);
  overflow: hidden;
  button{
    width: 100%;
    border: 0;
    text-align: center;
    padding: 10px 0;
    color: red;
    background-color: rgb(247, 242, 242);
  }
}

</style>