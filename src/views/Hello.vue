<template>
  <div class="bigbox">
    <!-- 下拉刷新组件 -->
    <van-pull-refresh
      class="asd"
      v-model="state.loading"
      @refresh="onRefresh"
      success-text="刷新成功"
    >
      <!-- <p>刷新次数: {{ state.count }}</p> -->
      <!-- 轮播图组件 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          ><img src="../../public/img/hello_img/banner01@3x.png" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="../../public/img/hello_img/lunbo2.jpg" alt=""
        /></van-swipe-item>
      </van-swipe>

      <!-- 绘画列表 -->
      <div class="speak_box1">
        <!-- 小标题盒子 -->
        <div class="speak_list">
          <h3>会话列表</h3>
          <h4 @click="jumpTo(to3)">全部列表</h4>
        </div>
        <div class="speak_box1-s">
          <p>暂时待上课程，快去约课吧~</p>
          <img src="../../public/img/hello_img/bg-img01.png" alt="" />
        </div>
      </div>

      <!-- 会话内容 -->
      <div class="speak_box2">
        <!-- <h2>
          会话内容
        </h2> -->
        <span> 会话内容 </span>
        <p>
          选择你想要进行的会话主题，即可以使用丰富的平台主题，也可以根据您的喜好自己定义会话主题。
        </p>

        <div class="speak_box2_s">
          <div @click="jumpTo(to1)" class="box">
            <img src="../../public/img/hello_img/img01.png" alt="" />
            <div><p>精选话题</p></div>
          </div>

          <div @click="jumpTo(to2)" class="box">
            <img src="../../public/img/hello_img/img-02.png" alt="" />
            <div><p>自定义会话</p></div>
          </div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

// 下拉刷新用
import { reactive } from "vue";
import { Toast } from "vant";

export default defineComponent({
  setup() {
    //下拉刷新
    const state = reactive({
      // count: 0,
      loading: false,
    });
    const onRefresh = () => {
      setTimeout(() => {
        // Toast('刷新成功');
        state.loading = false;
        // state.count++;
      }, 1000);
    };
    return {
      state,
      onRefresh,
    };
  },
  components: {},
  props: {},
  // name:'${该组件名称}',
  data() {
    return {
      to1: "/selected",
      to2: "/custom",
      to3: "/huihua",
    };
  },
  // computed: {},

  // mounted() {},

  methods: {
    jumpTo(to: string) {
      this.$router.push(to);
    },
  },
});
</script>
<style lang="less" scoped>
* {
  margin: 0px;
}
.bigbox {
  // overflow-y:yes;
  margin-bottom: 50px;
  height: 100%;
}
.asd {
  height: 100%;
}
// 轮播
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
  }
}

// 会话列表
.speak_box1 {
  height: 120px;
  // background-color: yellow;
  margin: 0px 10px;
  .speak_list {
    margin-top: 20px;
    height: 20px;
    line-height: 10px;
    margin-bottom: 15px;
    h3 {
      float: left;
      height: 20px;
    }
    h4 {
      float: right;
      height: 20px;
    }
  }
  //课程小盒子
  .speak_box1-s {
    height: 100px;
    background-color: white;
    border: 1px solid #ccc;
    position: relative;
    p {
      line-height: 100px;
      width: 100%;
      text-align: center;

      position: absolute;
    }
  }
}
// <!-- 会话内容 -->
.speak_box2 {
  padding: 0px 10px;
  margin-top: 50px;

  span {
    height: 25px;
    line-height: 25px;
    font-size: 22px;
    color: #000;
    font-weight: 600;
    // margin-top: 20px;
    // margin-bottom: 10px;
  }
  p {
    margin-right: 5px;
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .speak_box2_s {
    // background-color: green;
    // height: 200px;
    display: flex;
    justify-content: center;

    .box {
      // height: 198px;

      position: relative;
      margin: 0px 20px;

      border-top-right-radius: 30px;
      border-top-left-radius: 30px;
      // border-bottom-left-radius: 10px;
      // border-bottom-right-radius: 10px;
      overflow: hidden;

      img {
        width: 100%;
      }

      div {
        background-color: white;
        position: absolute;
        bottom: -1px;

        border: 1px #ccc solid;
        border-top: 0px;
        width: 99%;

        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        p {
          color: #000;
          font-size: 17px;
          text-align: center;
          // color: red;
          font-weight: 600;
        }
      }
    }
  }
}
</style>