<template>
  <div class="details_body">
    <div>
      <van-nav-bar
      title="课程详情"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
      
    />
    </div>
    <!-- <p>{{chw.topic_subtitle}}</p> -->
    <div class="title_box"> 
      <!-- <img :src="list[0].topic_img" alt="" v-if="isLoad"> -->
      <img :src="chw.topic_img" alt="" v-if="isLoad">
      
      
      <div class="title_top_box">
        <h2  v-if="isLoad">{{chw.topic_title}}</h2>
        <p class="left">25分钟</p>

        <!-- 数据库未添加 -->
        <p class="right">3847 <span> 已学习</span></p>
      </div>
      
    </div>
    

    <!-- <img src="../../public/img/hello_img/topic_img.jpg" alt=""> -->
    <!-- <img src="../../../public/img/hello_img/topic_img1.jpg" alt=""> -->

    <van-tabs
      v-model:active="active"
      sticky
      :duration="0.2"
      animated
      title-active-color="orange"
      color="orange"

      
    >

    <!-- <div class="mar" > -->
      <!-- mar头部 -->

      <!-- 下面是学习目标&课件预览的内容 -->
      <van-tab     title="学习目标">
        <!-- <p v-for="q in list" v-if="item.id===q">123</p> -->
        <!-- 学习目标 -->
        <div class="huadong_box_1" >
             <div>
               {{chw.topic_subtitle}}
             </div>
             <div class="mar-top">
               {{chw.topic_content}}
               {{chw.topic_content}}
               {{chw.topic_content}}
               {{chw.topic_content}}
               {{chw.topic_content}}
             </div>
        </div>
      </van-tab>
      <!-- 课件预览 -->
      <van-tab title="课件预览">
         
        <div    class=" huadong_box_2">
          <img :src="chw.details_img" alt="">
          <img :src="chw.details_img" alt="">
          <img :src="chw.details_img" alt="">
          <img :src="chw.details_img" alt="">


          <!-- <img v-if="a.id===1" :src="a.details_img" alt=""> -->
          <!-- <img :src="list[0].topic_img" alt="" v-if="isLoad"> -->
        </div>
       </van-tab>






<!-- mar 底部 -->
    <!-- </div> -->




    

    
    </van-tabs>
  </div>
        <!-- <img :src="list[0].topic_img" alt="" v-if="isLoad"> -->
</template>
<script >
import { defineComponent } from "vue";
import {getHello} from "../../utils/api";

import { reactive } from "vue";
import { Toast } from "vant";

export default defineComponent({
  data() {
    return {
      isLoad:false,
      chw:{},
      // list:{},
      fenlist: [
        { tite: "学习目标" },
        { tite: "课件预览" },
      ]
    };
  },

  setup() {
    // ''
    // 请求数据
    const state = reactive({
      count: 0,
      loading: false,
    });
    const list = reactive({});

    return {

      list
    };
  },
  // 路由前置守卫，获取数据
  beforeRouteEnter (to, from, next) {
     getHello({}).then((res)=>{
      console.log(res.result  );
      next(vm=>{
        vm.list = res.result;
        vm.isLoad = true;
      })
    })
  // next(vm => {
  //   getHello({}).then((res)=>{
  //     console.log(res.result);
  //     vm.list = res.result;
  //     vm.isLoad = true;
  //   })
      // console.log("before",vm.list[0].topic_img)


      // console.log(this.list[0].topic_img);
      // this.list1=res.list;

      // console.log(this.list[0].topic_title);
      
      // this.list111=res.result;
      // console.log(1);
      // console.log(this.list111);
  // })
},
    beforeCreate() {
    // getHello({}).then((res:any)=>{
    //   console.log(res);
    //   this.list = res.result;
    //   // console.log(this.list[0].topic_img);
      
    // })
 },
 mounted(){
  //  if(list[0].topic_img){
  //    console.log("mounted",this.list[0].topic_img);
  // //  }
  // console.log("list",this.list);
  // console.log(this.$route.params.id);
  // console.log(this.list)
  this.list.forEach((elm,i)=>{
    // console.log(i,elm)
    if(elm.id == this.$route.params.id){
      this.chw = elm;
      console.log("cwh",this.chw)
    }
  })
 },
  components: {},
  props: {},
  // name:'${该组件名称}',
  // data() {
  //   return {

  //   };
  // },
  // computed: {},
  // mounted() {},
  methods: {
    // fn(){console.log(this.list)},
    onClickLeft() {
      history.go(-1);
    },

     getQueryVariable(variable) {//获取参数id
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i=0;i<vars.length;i++) {
          var pair = vars[i].split("=");
          if(pair[0] == variable){return pair[1];}
      }
      return(false);
  }
  },
  computed:{
    imgurl(){
      // this.list[0].topic_imgv
    },
  }
  
});
</script>
<style lang="less" scoped>
.details_body{
  background-color:#ccc;
  height: 100%;
}

.title_top_box{
  background-color:white;
  padding-top: 10px;

  h2{
    margin-top: 0px;
  }
  
  p{
    color: orange;
    font-size: 19px;
    // margin-top: 10px;

    span{
      color: #555;
      margin-left: 2px;
      margin-right: 10px;
    }
  }
  .left{
    float: left;
  }

  .right{
    float: right;
  }
  height: 150px;
  width: 100%;
}

.title_box{
  img{
    width: 100px;
    height: 100px;
    margin-top: 20px;
    float: left;
    margin-left: 20px;
    margin-right: 20px;
    border-radius:10px;
  }
  margin-bottom: 20px;
}

.mar-top{
  margin-top: 25px;
}
.mar{
  margin-top: 10px;
  position: relative;
}


// 滑动盒子
.huadong_box_1{
  width: 100%;
  height: 400px;
  padding-top: 10px;
  background-color: white;

  overflow-y:scroll;
  div{
    padding-top: 10px;

  }
}
// 课件预览盒子
.huadong_box_2{
  overflow-y:scroll;
  height: 400px;
  width: 90%;

  padding: 5%;
  
background-color: white;
// background-color: yellow;

  img{
    width: 100%;
    border-radius:25px;
    height: 200px;
    margin-bottom: 20px;

    // height: 200px;
    // margin-left: 100%;
  }
}
</style>