<template>
  <div class="bg">
    <header class="head">
      <van-icon name="arrow-left" size="20px" @click="goback" />
      <van-icon name="star-o" size="20px" />
    </header>
    <section class="video"></section>
    <div class="teacher">
      <div class="t-up">
        <img src="TimeImg/waijiao.jpg" alt="" />
        <section class="up-right">
          <div class="score">
            <span>Andy</span>
            <van-rate v-model="value" color="#ffd21e" :size="14" />
            <em>5.0分</em>
          </div>
          <div class="from">
            <van-icon name="location-o" size="12px" />
            <span class="come-from">来自 美国</span>
            <van-icon name="user-o" size="12px" />
            <span>毕业院校 the harford university</span>
          </div>
        </section>
      </div>
      <div class="t-down">
        <span>服务时长：</span>
        <em>0min</em>
        <span class="jiaoxue">教学经验：</span>
        <em>3年</em>
        <span class="open-class">开课时间</span>
        <van-icon name="arrow" size="12px" />
      </div>
      <div class="t-bottom">
        <span>认真</span>
        <span>轻松</span>
        <span>细致</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { defineComponent, ref } from "vue";

export default defineComponent({
  data() {
    return {};
  },
  setup() {
    const value = ref(5);
    return { value };
  },
  components: {},

  computed: {},

  mounted() {},

  methods: {
    goback() {
      this.$router.go(-1);
    },
  },
});
</script>
<style lang="less" scoped>
.bg {
  padding: 0 15px;
  .head {
    height: 46px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 900;
  }
  .video {
    height: 160px;
    width: 100%;
    border-radius: 5px;
    background: #ccc;
  }
  .teacher {
    height: 160px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    .t-up {
      width: 100%;
      display: flex;
      height: 60px;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 5px;
      }
      .up-right {
        display: flex;
        flex-direction: column;
        height: 60px;
        .score {
          display: flex;
          width: 100%;
          height: 36px;
          width: 280px;
          span {
            font-weight: 600;
            font-size: 22px;
            display: block;
            margin-right: 5px;
          }
          .van-rate {
            padding-top: 5px;
          }
          em {
            font-style: normal;
            font-size: 14px;
            color: orange;
            display: block;
            padding-top: 3px;
            margin-left: 4px;
          }
        }
        .from {
          height: 24px;
          width: 280px;
          display: flex;
          line-height: 20px;
          span {
            font-size: 12px;
            color: #ccc;
            margin-left: 2px;
          }
          .come-from {
            margin-right: 20px;
          }
          .van-icon {
            padding-top: 3px;
          }
        }
      }
    }
    .t-down {
      height: 20px;
      display: flex;
      width: 100%;
      font-size: 12px;
      line-height: 20px;
      em {
        font-style: normal;
        font-weight: 600;
      }
      .jiaoxue {
        margin-left: 50px;
      }
      .open-class {
        margin-left: 50px;
      }
      .van-icon-arrow {
        padding-top: 3px;
        margin-left: 10px;
        font-weight: 600;
      }
    }
    .t-bottom {
      height: 20px;
      line-height: 20px;
      display: flex;
      margin-top: 40px;
      span {
        height: 20px;
        line-height: 20px;
        background: #FFEBCD;
        font-size: 12px;
        width: 40px;
        text-align: center;
        margin-right: 50px;
        color: #F4A460;
      }
    }
  }
}
</style>
