<template>
  <div>
    <div>
      <van-nav-bar
      title="课程详情"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
      flex
      
    />
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

    <div class="mar">

      <!-- 下面是学习目标&课件预览的内容 -->
      <van-tab    v-for="(i, index) in fenlist" :title="i.tite">



        <!-- <p v-for="q in list" v-if="item.id===q">123</p> -->
        <!-- 学习目标 -->
        <div  v-for="a in list" v-if="index===0" >
          <span v-if="a.id===1">
             <div>
               {{a.topic_subtitle}}
             </div>
             <div>
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
        </div>

      </van-tab>


    </div>

    
    </van-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {getHello} from "../../utils/api";

import { reactive } from "vue";
import { Toast } from "vant";

export default defineComponent({
  data() {
    return {

      // list111:[],
      fenlist: [
        { tite: "学习目标" },
        { tite: "课件预览" },
      ]
    };
  },

  setup() {
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
    mounted() {
    getHello({}).then((res:any)=>{
      console.log(res);
      this.list = res.result;
      console.log(this.list);

      // console.log(this.list[0].topic_title);
      
      // this.list111=res.result;
      // console.log(1);
      // console.log(this.list111);
      
      
      // console.log(item.topic_img)
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
    onClickLeft() {
      history.go(-1);
    },
    // onClickRight() {
    //   console.log("弹出框");
    // },
  },
});
</script>
<style lang="less" scoped>

.mar{
  margin-top: 50px;
}

// 课件预览盒子
.kejian_imgbox{
width: 100%;
height: 500px;
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