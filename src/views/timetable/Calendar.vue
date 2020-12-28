<template>
  <div class="bgcolor">
    <div class="container">
      <div class="head-title">
        {{ year }}年&nbsp;{{ month }}月
        <div class="left"><van-icon name="arrow-left" @click="goLeft" /></div>
        <div class="right"><van-icon name="arrow" @click="goRight" /></div>
      </div>
      <div class="calendar">
        <!-- 星期 -->
        <div v-for="(item, index) in dayArr" :key="index">{{ item }}</div>
        <!-- 天数 -->
        <div
          v-for="item in dateArr"
          :key="item"
          :class="day == item ? 'active' : ''"
          @click="addItem(item)"
          v-if="tog"
        >
          {{ item }}
        </div>
        <div  v-if="!tog" v-for="item in dateShow" :key="item">
          {{ item }}
        </div>
      </div>
      <div class="toggle" @click="changeTog">
        <van-icon name="arrow-up" v-if="tog" />
        <van-icon name="arrow-down" v-if="!tog" />
      </div>
    </div>
    <section class="cont">
      <img src="/TimeImg/find.png" alt="" />
      <em>快去寻找你的专属外教吧!Go!</em>
      <span>Go!</span>
    </section>
    <span class="intro">课程推荐</span>
    <div class="class-intro" v-for="i in 8">
      <div class="intro-detail" v-for="item in timeList" :key="item.id" @click="goToDetail(item.id)">
        <div class="up">
          <img :src="item.classimg" alt="" />
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
import { onMounted, reactive, toRefs } from "vue";
export default defineComponent({
  data() {
    return {
      timeList: [],
    };
  },
  setup() {
    let state = reactive({
      year: "", // 年
      month: "", // 月
      day: "", // 日
      dayArr: ["一", "二", "三", "四", "五", "六", "日"], // 星期数组
      dateArr: [], // 当前月份的天数
      tog: true,
      dateShow: [1 ,2, 3, 4, 5, 6, 7]
    });

    let addZero = (date) => {
      // 月、日个位数 补零
      return date.toString().padStart(2, "0");
    };

    let getDate = (newDate) => {
      // 获得当前月份的所有天数
      let date = new Date(newDate);
      state.year = date.getFullYear();
      state.month = addZero(date.getMonth() + 1); // 补零
      state.day = addZero(date.getDate()); // 补零

      let firstDay = new Date(state.year, state.month - 1, 1).getDay(); // 每月第一天星期几

      let monthNum = new Date(state.year, state.month, -1).getDate() + 1; // 每月天数

      for (let i = 1; i < monthNum + 1; i++) {
        state.dateArr.push(i); // 遍历添加当前月份的每一天
      }
      for (let i = 0; i < firstDay - 1; i++) {
        state.dateArr.unshift(""); // 根据第一天在数组前填充字符串，确定第一天是星期几
      }
    };

    onMounted(() => {
      // 相当于 vue2.0 的 mounted
      getDate(new Date());
    });

    return {
      ...toRefs(state), // 将 state 返回出去，就可以直接使用 state 里面的属性
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
    goLeft() {
      if (this.month > 1) {
        this.month = this.month - 1;

        let firstDay = new Date(this.year, this.month - 1, 1).getDay(); // 每月第一天星期几
        console.log(firstDay);
        let monthNum = new Date(this.year, this.month, -1).getDate() + 1; // 每月天数
        console.log(monthNum);
        this.dateArr = [];
        for (let i = 1; i < monthNum + 1; i++) {
          this.dateArr.push(i); // 遍历添加当前月份的每一天
        }
        for (let i = 0; i < firstDay; i++) {
          this.dateArr.unshift(""); // 根据第一天在数组前填充字符串，确定第一天是星期几
        }
      } else if ((this.month = 1)) {
        this.month = 12;
        this.year -= 1;
        let firstDay = new Date(this.year, this.month - 1, 1).getDay(); // 每月第一天星期几

        let monthNum = new Date(this.year, this.month, -1).getDate() + 1; // 每月天数

        this.dateArr = [];
        for (let i = 1; i < monthNum + 1; i++) {
          this.dateArr.push(i); // 遍历添加当前月份的每一天
        }
        for (let i = 0; i < firstDay; i++) {
          this.dateArr.unshift(""); // 根据第一天在数组前填充字符串，确定第一天是星期几
        }
      }
    },
    goRight() {
      if (this.month < 12) {
        this.month = this.month + 1;
        let firstDay = new Date(this.year, this.month - 1, 1).getDay(); // 每月第一天星期几
        let monthNum = new Date(this.year, this.month, -1).getDate() + 1; // 每月天数
        this.dateArr = [];
        for (let i = 1; i < monthNum + 1; i++) {
          this.dateArr.push(i); // 遍历添加当前月份的每一天
        }
        for (let i = 0; i < firstDay; i++) {
          this.dateArr.unshift(""); // 根据第一天在数组前填充字符串，确定第一天是星期几
        }
      } else if ((this.month = 12)) {
        this.month = 1;
        this.year += 1;
        let firstDay = new Date(this.year, this.month - 1, 1).getDay(); // 每月第一天星期几
        let monthNum = new Date(this.year, this.month, -1).getDate() + 1; // 每月天数
        this.dateArr = [];
        for (let i = 1; i < monthNum + 1; i++) {
          this.dateArr.push(i); // 遍历添加当前月份的每一天
        }
        for (let i = 0; i < firstDay; i++) {
          this.dateArr.unshift(""); // 根据第一天在数组前填充字符串，确定第一天是星期几
        }
      }
    },
    addItem(i) {
      this.day = i;
    },
    changeTog() {
      this.tog = !this.tog;
    },
    goToDetail(id) {
      this.$router.push('/timedetail/' + id);
    }
  },
});
</script>
<style lang="less" scoped>
.bgcolor {
  background: white;
  padding: 0 10px;
  .container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .head-title {
      font-size: 16px;
      font-weight: 600;
      height: 40px;
      line-height: 40px;
      position: relative;
      width: 100%;
      justify-content: center;
      display: flex;
      div {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background: #ffe4c4;
        cursor: pointer;
        .van-icon {
          color: red;
          font-size: 18px;
          font-weight: 900;
        }
      }
      .right {
        position: absolute;
        right: 20%;
        bottom: 20%;
        .van-icon-arrow {
          margin-left: 6px;
        }
      }
      .left {
        position: absolute;
        left: 20%;
        bottom: 20%;
        .van-icon-arrow-left {
          margin-left: 5px;
        }
      }
    }
    .calendar {
      width: 100%;
      height: 100%;
      background-color: #fff;
      display: flex;
      flex-wrap: wrap;
      div {
        width: calc(100% / 14);
        height: calc(100% / 14);
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 26px;
        margin: calc(100% / 28) calc(100% / 28);
      }
    }
    .toggle {
      height: 20px;
      width: 100%;
      line-height: 20px;
      display: flex;
      justify-content: center;
      padding-top: 10px;
    }
  }
  .active {
    background-color: purple;
    color: #fff;
    border-radius: 30%;
  }
  .cont {
    height: 300px;
    width: 100%;
    background: white;
    border-radius: 10px;
    img {
      height: 163px;
      width: 180px;
      display: block;
      margin: 20px auto;
    }
    em {
      font-style: normal;
      display: block;
      height: 22px;
      line-height: 22px;
      width: 160px;
      margin: 10px auto;
      text-align: center;
      font-size: 12px;
    }
    span {
      height: 22px;
      line-height: 22px;
      width: 66px;
      display: block;
      background: orange;
      color: #fff;
      border-radius: 20px;
      text-align: center;
      margin: 0 auto;
    }
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
      height: 200px;
      margin-top: 10px;
      border-radius: 10px;
      .up {
        height: 125px;
        width: 100%;
        display: flex;
        img {
          height: 100%;
          width: 100%;
          display: block;
        }
      }
      .down {
        display: flex;
        flex-direction: column;
        width: 100%;
        .text {
          font-size: 16px;
          font-weight: 600;
          height: 30px;
          line-height: 30px;
          margin-top: 5px;
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
            span {
              font-size: 12px;
              height: 20px;
              line-height: 20px;
              padding-left: 5px;
              margin-top: 5px;
            }
            img {
              height: 25px;
              width: 25px;
              border-radius: 50%;
              display: block;
            }
          }
          .price {
            color: red;
            font-size: 12px;
            margin-top: 5px;
          }
        }
      }
    }
  }
}
</style>
