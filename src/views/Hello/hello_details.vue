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

    <div class="title_box"> 
      <img :src="list[0].topic_img" alt="" v-if="isLoad">
      
      
      <div class="title_top_box">
        <h2  v-if="isLoad">{{list[0].topic_title}}</h2>
        <p class="left">25分钟</p>
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

    <div class="mar" >

      <!-- 下面是学习目标&课件预览的内容 -->
      <van-tab    v-for="(i, index) in fenlist" :title="i.tite" @click="gotoDetail(i.id)">
        <!-- <p v-for="q in list" v-if="item.id===q">123</p> -->
        <!-- 学习目标 -->
        <div  v-for="a in list" v-if="index===0" >
          <span v-if="a.id===1">
             <div>
               {{a.topic_subtitle}}
             </div>
             <div class="mar-top">
               {{a.topic_content}}
             </div>

          </span> 
        </div>

        <!-- 课件预览 -->
        <div v-for="a in list" v-if="index===1" class="kejian_imgbox">
          <img v-if="a.id===1" :src="a.details_img" alt="">
          <img v-if="a.id===1" :src="a.details_img" alt="">
          <img v-if="a.id===1" :src="a.details_img" alt="">
          <img v-if="a.id===1" :src="a.details_img" alt="">

          <!-- <img :src="list[0].topic_img" alt="" v-if="isLoad"> -->
        </div>

      </van-tab>
      

    </div>

    
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
      // list:{},
      fenlist: [
        { tite: "学习目标" },
        { tite: "课件预览" },
      ]
    };
  },

  setup() {
    ''
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
  next(vm => {
    getHello({}).then((res)=>{
      // console.log(res);
      vm.list = res.result;
      // console.log("before",vm.list[0].topic_img)


      // console.log(this.list[0].topic_img);
      // this.list1=res.list;

      // console.log(this.list[0].topic_title);
      
      // this.list111=res.result;
      // console.log(1);
      // console.log(this.list111);
      
      console.log(1);
      vm.isLoad = true;
      
    })
  })
},
    beforeCreate() {
    // getHello({}).then((res:any)=>{
    //   console.log(res);
    //   this.list = res.result;
    //   // console.log(this.list[0].topic_img);
    //   // this.list1=res.list;

    //   // console.log(this.list[0].topic_title);
      
    //   // this.list111=res.result;
    //   // console.log(1);
    //   // console.log(this.list111);
      
      
    // })
 },
 mounted(){
  //  if(list[0].topic_img){
  //    console.log("mounted",this.list[0].topic_img);

  //  }
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
    onClickLeft() {
      history.go(-1);
    },

// 无用
    // gotoDetail(id) {
    //   console.log(id);
    //   this.$router.push("/hello_details/" + id);
    // }


    // onClickRight() {
    //   console.log("弹出框");
    // },
  },
  computed:{
    imgurl(){
      // this.list[0].topic_imgv
    }
  }
});
</script>
<style lang="less" scoped>
.details_body{
  background-color:#ccc;
}


.title_top_box{
  background-color: red;
  padding-top: 10px;

  h2{
    margin-top: 0px;
  }
  
  p{
    color: orange;
    font-size: 19px;
    // margin-top: 10px;

    span{
      color: #000;
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
    // margin: 20px,40px,0px,0px;
  }
  // padding: 20px;
  margin-bottom: 20px;
}


.mar-top{
  margin-top: 50px;
}
.mar{
  margin-top: 10px;
  position: relative;
}

// 课件预览盒子
.kejian_imgbox{
width: 100%;
// height: 500px;
margin-top: 20px;

// background-color: yellow;

  img{
    //待修改
    // ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
    width: 100%;
    height: 200px;
    // margin: 0 10%;
    margin-left: 372px;
    
  }
}
</style>