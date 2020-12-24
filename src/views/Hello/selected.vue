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
      <van-tab v-for="(item, index) in fenlist" :title="item.tite">



        <van-pull-refresh v-model="state.loading" @refresh="onRefresh">
          <!-- 内容 {{ index }} -->


          <van-grid :column-num="3">
            <!-- <div v-for="a in 20"> -->
              <van-grid-item 
              v-for="item in list" 
              icon="img/hello_img/topic_img1.jpg" 
              :text="item.topic_title" 
              :column-num=4 />
              

              <!-- <van-grid-item v-for="item in list" icon="img/hello_img/topic_img1.jpg" :text="item.topic_title" column-num=4 /> -->
              
            
            <!-- <van-grid-item icon="photo-o" text="this.list.result[0].topic_title" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" /> -->

            <!-- </div> -->
          </van-grid>


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
  },
});
</script>
<style lang="less" scoped>
</style>