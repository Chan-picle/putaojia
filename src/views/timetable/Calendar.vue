<template>
  <div class="bgcolor">
    <van-calendar
      title="日历"
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '400px' }"
    />
    <section class="cont"></section>
    <span class="intro">课程推荐</span>
    <div class="class-intro" v-for="i in 8">
      <div class="intro-detail" v-for="item in timeList" :key="item.id">
        <div class="up">
          <img :src="item.classimg" alt="">
        </div>
        <div class="down">
          <span class="text">{{ item.textbook }}</span>
          <span class="hour">课时数：{{ item.hours }}课时</span>
          <section class="btom">
            <div class="btom-d">
              <img :src="item.teacherimg" alt="" />
              <span>{{ item.teachername }}</span>
            </div>
            <span class="price">{{ item.price }}元</span>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { getTimeListApi } from "../../utils/api";
export default defineComponent({
  data() {
    return {
      timeList: [],
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.getTimeList();
  },

  methods: {
    async getTimeList() {
      const res = await getTimeListApi({});
      console.log(res);
      this.timeList = res.result;
    },
  },
});
</script>
<style lang="less" scoped>
.bgcolor {
  background: white;
  padding: 0 10px;
  .cont {
    height: 300px;
    width: 100%;
    background: white;
    border-radius: 10px;
  }
  .intro {
    padding-top: 10px;
    padding-bottom: 10px;
    display: block;
  }
  .class-intro {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // height: 100%;
    // width: 100%;
    .intro-detail {
      width: 45%;
      height: 160px;
      margin-top: 20px;
      border-radius: 10px;
      .up {
        height: 100px;
        width: 100%;
        display: flex;
        img {
          height: 100px;
          width: 100%;
          display: block;
        }
      }
      .down {
        display: flex;
        flex-direction: column;
        height: 60px;
        width: 100%;
        .text {
          font-size: 14px;
          font-weight: 600;
          height: 20px;
          line-height: 20px;
        }

        .hour {
          font-size: 12px;
          color: rgb(176, 196, 222);
          height: 20px;
          line-height: 20px;
        }
        .btom {
          display: flex;
          justify-content: space-between;
          .btom-d {
            display: flex;
            padding: 0 10px;
            span {
              font-size: 12px;
              height: 20px;
              line-height: 20px;
            }
            img {
              height: 20px;
              width: 20px;
              border-radius: 50%;
              display: block;
            }
          }
          .price {
            color: red;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
