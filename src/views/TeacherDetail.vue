<template>
  <div class="bg">
    <header class="head">
      <van-icon name="arrow-left" size="20px" @click="goback" />
      <van-icon name="star-o" size="20px"/>
    </header>
    <section class="video">
      <img src="TimeImg/shipin01.png" alt="" />
    </section>
    <div class="teacher" v-if="timeDetail.id">
      <div class="t-up">
        <img src="TimeImg/waijiao.jpg" alt="" />
        <section class="up-right">
          <div class="score">
            <span>{{ timeDetail.t_name }}</span>
            <van-rate v-model="value" color="#ffd21e" :size="14" />
            <em>{{ timeDetail.score }}分</em>
          </div>
          <div class="from">
            <van-icon name="location-o" size="12px" />
            <span class="come-from">来自 {{ timeDetail.t_nation }}</span>
            <van-icon name="user-o" size="12px" />
            <span>毕业院校 the harford university</span>
          </div>
        </section>
      </div>
      <div class="t-down">
        <span>服务时长：</span>
        <em>20min</em>
        <span class="jiaoxue">教学经验：</span>
        <em>{{ timeDetail.experience }}年</em>
        <span class="open-class">开课时间</span>
        <van-icon name="arrow" size="12px" />
      </div>
      <div class="t-bottom">
        <span>认真</span>
        <span>轻松</span>
        <span>细致</span>
      </div>
    </div>
    <section class="bg-br"></section>
    <div class="his-class">TA的课程</div>
    <section class="class-detail">
      <div class="detail" @click="goDetail(id3)">
        <img :src="timeDetail.c_img" alt="" />
        <section class="d-right">
          <em>{{ timeDetail.title }}</em>
          <span class="first">包括10个学习模块(modules)</span>
          <div class="second">
            <span>{{ timeDetail.time }}课时</span>
            <span>6-12岁</span>
          </div>
          <div class="third">
            <span>￥{{ timeDetail.c_price }}</span>
            <div>购买</div>
          </div>
        </section>
      </div>
      <div class="detail" @click="goDetail(id2)">
        <img :src="timeDetail2.c_img" alt="" />
        <section class="d-right">
          <em>{{ timeDetail2.title }}</em>
          <span class="first">包括10个学习模块(modules)</span>
          <div class="second">
            <span>{{ timeDetail2.time }}课时</span>
            <span>6-12岁</span>
          </div>
          <div class="third">
            <span>￥{{ timeDetail2.c_price }}</span>
            <div>购买</div>
          </div>
        </section>
      </div>
      <div class="detail" @click="goDetail(id1)">
        <img :src="timeDetail3.c_img" alt="" />
        <section class="d-right">
          <em>{{ timeDetail3.title }}</em>
          <span class="first">包括10个学习模块(modules)</span>
          <div class="second">
            <span>{{ timeDetail3.time }}课时</span>
            <span>6-12岁</span>
          </div>
          <div class="third">
            <span>￥{{ timeDetail3.c_price }}</span>
            <div>购买</div>
          </div>
        </section>
      </div>
    </section>
    <div class="more" @click="goMore(id)">
      <span>查看更多</span>
      <van-icon name="arrow" />
    </div>
    <div class="bottom-br"></div>
    <div class="evaluate">TA收到的评价(0人评价)</div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { defineComponent, ref } from "vue";
import { getTeacherCourseApi } from "../utils/api";


export default defineComponent({
  props:["id"],
  data() {
    return {
      timeDetail: {},
      timeDetail2: {},
      timeDetail3: {},
      timeImg:[],
      id1: 1002,
      id2: 1001,
      id3: 1000
    };
  },
  setup() {
    let value= ref(3);
    return { value };
  },
  components: {},

  computed: {},

  mounted() {
    this.getTeacherCourse();
  },

  methods: {
    goback() {
      this.$router.go(-1);
    },
    async getTeacherCourse() {
      const res = await getTeacherCourseApi({id: this.id});
      console.log(res.result);
      let msg = res.result[0];
      this.timeDetail = {
        bought: msg.bought,
        detail: JSON.parse( msg.c_detail),
        c_img: "img/products/" + msg.c_img,
        c_price:msg.c_price,
        id: msg.id,
        lasting: msg.lasting,
        pic:"img/shouye/" + msg.pic,
        productId:msg.productId,
        title:msg.title,
        t_name:msg.t_name,
        time:msg.time,
        experience:msg.t_experience,
        t_nation:msg.t_nation,
        score:msg.score
      };
      let msg1 = res.result[1];
      this.timeDetail2 = {
        bought: msg1.bought,
        detail: JSON.parse( msg1.c_detail),
        c_img: "img/products/" + msg1.c_img,
        c_price:msg1.c_price,
        id: msg1.id,
        lasting: msg1.lasting,
        pic:"img/shouye/" + msg1.pic,
        productId:msg1.productId,
        title:msg1.title,
        t_name:msg1.t_name,
        time:msg1.time,
        experience:msg1.t_experience,
        t_nation:msg1.t_nation,
        score:msg1.score
      };
      let msg2 = res.result[2];
      this.timeDetail3 = {
        bought: msg2.bought,
        c_img: "img/products/" + msg2.c_img,
        c_price:msg2.c_price,
        id: msg2.id,
        lasting: msg2.lasting,
        pic:"img/shouye/" + msg2.pic,
        productId:msg2.productId,
        title:msg2.title,
        t_name:msg2.t_name,
        time:msg2.time,
        experience:msg2.t_experience,
        t_nation:msg2.t_nation,
        score:msg2.score
      };
    },
    goMore(id) {
      this.$router.push("/moreclass/" + id)
    },
    goDetail(id) {
      this.$router.push("/timedetail/" + id)
    }
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
    img {
      height: 100%;
      width: 100%;
      border-radius: 5px;
    }
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
        background: #ffebcd;
        font-size: 12px;
        width: 40px;
        text-align: center;
        margin-right: 50px;
        color: #f4a460;
      }
    }
  }
  .bg-br {
    height: 5px;
    width: 100%;
    background: #eee;
  }
  .his-class {
    height: 24px;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  .class-detail {
    width: 100%;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    .detail {
      height: 100px;
      width: 100%;
      display: flex;
      margin-bottom: 20px;
      img {
        height: 100%;
        width: 40%;
        border-radius: 20px;
        margin-right: 5%;
      }
      .d-right {
        height: 100%;
        width: 55%;
        display: flex;
        flex-direction: column;
        em {
          font-style: normal;
          font-size: 16px;
          font-weight: 600;
          height: 20px;
          line-height: 20px;
        }
        .first {
          font-size: 12px;
          color: #ccc;
          display: block;
          margin-top: 5px;
          margin-bottom: 5px;
          height: 20px;
          line-height: 20px;
        }
        .second {
          font-size: 14px;
          height: 20px;
          line-height: 20px;
          display: flex;
          span {
            display: block;
            margin-right: 20px;
          }
        }
        .third {
          height: 30px;
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          span {
            color: red;
            font-weight: 600;
            font-size: 16px;
          }
          div {
            width: 60px;
            border-radius: 20px;
            border: 2px orange solid;
            display: flex;
            justify-content: center;
            align-items: center;
            color: orange;
          }
        }
      }
    }
  }
  .more {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    color: #ccc;
    justify-content: center;
  }
  .bottom-br {
    height: 3px;
    width: 100%;
    background: #eee;
  }
  .evaluate {
    height: 20px;
    line-height: 20px;
    font-weight: 600;
    font-size: 16px;
    padding: 20px 0;
  }
}
</style>
