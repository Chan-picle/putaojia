<template>
  <div class="bg">
    <section class="cont">
      <img src="/TimeImg/find.png" alt="" />
      <em>快去寻找你的专属外教吧!Go!</em>
      <span>Go!</span>
    </section>
    <span class="intro">课程推荐</span>
    <div class="class-intro" v-for="i in 8">
      <div class="intro-detail" @click="goToDetail(id1)">
        <div class="up">
          <img src="TimeImg/jiaocai.jpg" alt="" />
        </div>
        <div class="down">
          <span class="text">新概念英语5B</span>
          <span class="hour">课时数: 45课时</span>
          <section class="btom">
            <div class="btom-d">
              <img src="TimeImg/waijiao.jpg" alt="" />
              <span>Mark</span>
            </div>
            <span class="price">3600元</span>
          </section>
        </div>
      </div>
      <div class="intro-detail" @click="goToDetail(id2)">
        <div class="up">
          <img src="TimeImg/jiaocai2.jpg" alt="" />
        </div>
        <div class="down">
          <span class="text">新概念英语入门</span>
          <span class="hour">课时数：30课时</span>
          <section class="btom">
            <div class="btom-d">
              <img src="TimeImg/waijiao2.jpg" alt="" />
              <span>Mark</span>
            </div>
            <span class="price">1500元</span>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { defineComponent } from "vue";
import { getTimeListApi } from "../../utils/api";

export default defineComponent({
  data() {
    return {
      //请求渲染数据
      timeList: [],
      id1: 1001,
      id2: 1002,
    };
  },
  components: {},
  //请求数据
  mounted() {
    // axios.get('http://42.192.148.152:3000/classdetail')
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) =>  {
    //     console.log(error);
    //   });
    this.getTimeList();
  },
  methods: {
    async getTimeList() {
      const res = await getTimeListApi({});
      console.log(res);
      this.timeList = res.result;
    },
    goToDetail(id) {
      this.$router.push("/timedetail/" + id);
    },
  },
});
</script>
<style lang="less" scoped>
.bg {
  background: #efefef;
  padding: 0 10px;
  padding-top: 20px;
  padding-bottom: 5px;
  .cont {
    height: 300px;
    width: 100%;
    background: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
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
              margin-top: 5px;
              margin-left: 5px;
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
