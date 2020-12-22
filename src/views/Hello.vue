<template>
  <div>
    <!-- 下拉刷新组件 -->
    <van-pull-refresh v-model="state.loading" @refresh="onRefresh">
      <!-- <p>刷新次数: {{ state.count }}</p> -->
      <!-- 轮播图组件 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="../../public/img/hello_img/lunbo1.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="../../public/img/hello_img/lunbo2.jpg" alt=""></van-swipe-item>
      </van-swipe>

      <!-- 绘画列表 -->
      <div class="speak_box1">
        <!-- 小标题盒子 -->
        <div class="speak_list">
          <h3>会话列表</h3>
          <a href=""><h4>前部列表</h4></a>
        </div>
        <div class="speak_box1-s">
          <p>暂时待上课程，快去约课吧~</p>
        </div>
      </div>

      <!-- 会话内容 -->
      <div class="speak_box2">
        <!-- <h2>
          会话内容
        </h2> -->
        <span>
          会话内容
        </span>
        <p>选择你想要进行的会话主题，即可以使用丰富的平台主题，也可以根据您的喜好自己定义会话主题。</p>

        <div class="speak_box2_s">
          <div>
            <img src="../../public/img/hello_img/hello2.jpg" alt="">
            <p>精选话题</p>
          </div>

           <div>
            <img src="../../public/img/hello_img/hello1.jpg" alt="">
            <p>自定义会话</p>
          </div>


        </div>

      </div>

    </van-pull-refresh>
    
  </div>
</template>
<script>
import { defineComponent } from "vue";

// 下拉刷新用
import { reactive } from 'vue';
import { Toast } from 'vant';

export default defineComponent({
  setup(){
    const state = reactive({
      count: 0,
      loading: false,
    });
    const onRefresh = () => {
      setTimeout(() => {
        Toast('刷新成功');
        state.loading = false;
        state.count++;
      }, 1000);
    };

    return {
      state,
      onRefresh,
    };
  },
  components: {},
  props:{

    

  },
  // name:'${该组件名称}',
  // data() {
  //   return {

  //   };
  // },
  // computed: {},

  // mounted() {},

  // methods: {}
});
</script>
<style lang="less" scoped>

*{
  margin: 0px;
}
// 轮播
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    height: 150px;
    
    img{
      width: 100%;
      height: 100%;
    }
  }

  // 会话列表
  .speak_box1{
    height: 120px;
    // background-color: yellow;
    padding: 0px 10px;
    .speak_list{
      margin-top: 20px;
      height: 20px;
      line-height: 10px;

       h3{
        float: left;
        height: 20px;
        }
        h4{
          float: right;
          height: 20px;
          a{
            color: #000;
          }
        }
    }
   
    //课程小盒子
   .speak_box1-s{

     height: 100px;
     background-color: white;
     border: 1px solid #ccc;
     p{
       line-height: 100px;
       text-align: center;
     }

     
     
    }
  }

  .speak_box2{
    padding: 0px 10px;
    margin-top: 30px;
    span{
      height: 25px;
      line-height: 25px;
      font-size: 22px;
      color: #000;
      // margin-top: 20px;
      // margin-bottom: 10px;
    }
    p{
      margin-right: 5px;
      font-size: 15px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .speak_box2_s{
      // background-color: green;
      height: 200px;

      display: flex;
      justify-content: center;

      div{
        height: 198px;
        width: 45%;
        // float: left;
        border: black 1px solid;
        margin: 0px 10px;

        border-top-right-radius: 30px;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        overflow: hidden;

        img{
          width: 100%;
        }
        p{
          color: #000;
          font-size: 16px;
          text-align: center;
        }
      }
    }
  }


</style>