<template>
  <div>
    <van-nav-bar
      title="话题库"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <!-- <img src="../../public/img/hello_img/topic_img.jpg" alt=""> -->
    <!-- <img src="../../../public/img/hello_img/topic_img1.jpg" alt=""> -->
    <!-- 下拉刷新组件 -->

    <van-tabs
      v-model:active="active"
      sticky
      :duration="0.2"
      animated
      title-active-color="orange"
      color="orange"
    >
      <van-tab v-for="(i, index) in fenlist" :title="i.tite">

        <van-pull-refresh v-model="state.loading" @refresh="onRefresh">
          <!-- 内容 {{ index }} -->


          <!-- <van-grid :column-num="3">
              <van-grid-item 
              class="aaa"
              v-for="item in list"
              icon="img/hello_img/topic_img1.jpg" 
              :text="item.topic_title" 
               />
          </van-grid> -->

<div class="asd">
          <div class="huadong_box">
            <div class="img_box" v-for="item in list"  @click="jumpTo(to1)" >
              <img :src="item.topic_img" alt="">
              <p>{{item.topic_title}}</p>
              
            </div>
            <div class="img_box" v-for="item in list"  @click="jumpTo(to1)" >
              <img :src="item.topic_img" alt="">
              <p>{{item.topic_title}}</p>
              
            </div>
          </div>
          <!-- <div class="huadong_box">
            <div class="img_box" v-for="item in list">
              <img :src="item.topic_img" alt="">
              <p>{{item.topic_title}}</p>
            </div>
          </div> -->
</div>
          

        </van-pull-refresh>

      </van-tab>
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
      fenlist: [
        { tite: "认识" },
        { tite: "动物" },
        { tite: "趣味" },
        { tite: "科普" },
      ],
      to1:"/hello_details"
    };
  },

  setup() {
    // 请求数据
    const state = reactive({
      count: 0,
      loading: false,
    });
    const list = reactive({});


    const onRefresh = () => {
      setTimeout(() => {
        Toast("刷新成功");
        state.loading = false;
        state.count++;
      }, 1000);
    };

    return {
      state,
      onRefresh,
      list
    };
  },
    mounted() {
    getHello({}).then((res:any)=>{
      console.log(res);
      this.list = res.result;
      console.log(this.list);
      
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

    onClickRight() {
      console.log("弹出框");
    },


    jumpTo(to:string){
      this.$router.push(to);
    }
  },
});
</script>
<style lang="less" scoped>

.asd{
  // padding-bottom: 400px;
  // margin-bottom: 300px;
}
.huadong_box{
  width: 100%;
  height: 100%;
  background-color: red;
  // display: flex;

  // margin-bottom: 10px;
}
.img_box{
  // padding: 10px;
  // margin: 10px;
  width: 28%;
  height: 150px;
  background-color: yellow;
  margin: 5px;
  margin-bottom: 10px;
  float: left;
  padding: 5px;

  
  img{
    width: 100%;
    height: 80%;
  }
  p{
    text-align: center;
    line-height: 10px;
    height: 10px;
  }
}
</style>