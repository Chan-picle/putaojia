<template>
  <div style="position:relative;">
    <van-nav-bar
      title="课程详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
      placeholder="true"
    />
    <section class="all-content" v-if="timeDetail.id">
      <div class="head">
        <img :src="timeDetail.c_img" alt="" />
        <div class="h-left">
          <em>{{ timeDetail.title }}</em>
          <div class="hours">
            <span>{{ timeDetail.time }}节</span>课时 <span class="hours-l">{{ timeDetail.bought }}人</span>已购买
          </div>
          <div class="pratice">
            <van-icon name="clock-o" size="14px" />
            <span>{{ timeDetail.lasting }}</span>练习时长
          </div>
        </div>
      </div>
      <div class="class-detail">
        <span class="class-detail-first" @click="chageClass">课程详情</span>
        <span class="class-detail-second" @click="chageClass">课件预览</span>
      </div>
      <div class="main" v-if="show">
        <span>课程内容</span>
        <p>
          {{ timeDetail.detail.content }}
        </p>

        <span>级别</span>
        <em>{{ timeDetail.detail.level }}</em>
        <span>适合年龄段</span>
        <em>{{ timeDetail.detail.fit }}</em>
        <span>核心词汇数</span>
        <em>{{ timeDetail.detail.core }}</em>
        <span>拓展词汇</span>
        <em>{{ timeDetail.detail.expand }}</em>
      </div>
      <div class="main-2" v-if="!show">
        <van-collapse v-model="activeNames">
        <van-collapse-item title="上册" name="1" size="large">
          <div class="unit" v-for="item in 9">
            <span>一(上)-M1-Unit1</span>
            <div>查看</div>
          </div>
        </van-collapse-item>
      </van-collapse>
      </div>
    </section>
    <span class="teacher-msg">外教信息</span>
    <div class="teacher-br"></div>
    <div class="teacher" @click="goTeacherDetail(timeDetail.productId)">
      <img :src="timeDetail.pic" alt="" />
      <div class="teacher-right">
        <span>{{ timeDetail.t_name }}</span>
        <div class="star">
          <van-rate v-model="value" size="12px" color="#ffd21e" />
          <span>5.0分</span>
        </div>
      </div>
      <div class="go">
        <van-icon name="arrow" size="20px" />
      </div>
    </div>
    <div class="bottom-br"></div>
    <div class="buy">
      <span>￥{{ timeDetail.c_price }}</span>
      <div class="btn">
        <em class="btn-l">免费试听</em>
        <em class="btn-r" @click="route(id)">立即购买</em>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Toast } from "vant";
import { getProductInfoApi } from "../utils/api";
import { ref } from 'vue';

export default defineComponent({
  props: ["id"],
  data() {
    return {
      StarCount: 5,
      timeDetail: {},
      show: true
    };
  },
  setup() {
    const onClickIcon = () => {
      Toast("点击图标");
    };
    const onClickButton = () => {
      Toast("点击按钮");
    };
    const value = ref(5);
    const activeNames = ref(['1']);
    return {
      onClickIcon,
      onClickButton,
      value,
      activeNames
    };
   
  },
  components: {},

  computed: {
    // arr(){
    //   return msg.filter(elm => {
    //    return elm.id == that.id;
    //  })
     
    // }
    
  },

  mounted() {
    // this.$store.dispatch("getTimeDetail", {
    //   id: this.id
    // });
    this.getProductInfo();
  },

  methods: {
    onClickLeft() {
      Toast("返回");
      this.$router.go(-1);  
    },
    async getProductInfo() {
      const res = await getProductInfoApi({id: this.id});
      let msg = res.result[0];
      this.timeDetail = {
        bought: msg.bought,
        detail: JSON.parse( msg.c_detail),
        c_img:"img/products/" + msg.c_img,
        c_price:msg.c_price,
        id: msg.id,
        lasting: msg.lasting,
        pic:"img/shouye/" + msg.pic,
        productId:msg.productId,
        title:msg.title,
        t_name:msg.t_name,
        time:msg.time
      }
    //   this.timeDetail = res.result.filter(elm => {
    //     // console.log(this.id == elm.id)
    //    return elm.id == this.id;
    //  })[0];
    },
    goTeacherDetail(id) {
      this.$router.push("/teacherdetail/" + id);
    },
    route(id) {
      this.$router.push("/closing/" + id);
    },
    chageClass() {
      this.show = !this.show;
    }
  },
});
</script>
<style lang="less" scoped>
* {
  margin: 0;
}
.all-content {
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  .head {
    width: 100%;
    height: 100px;
    display: flex;
    padding: 10px 0;
    img {
      height: 100px;
      width: 40%;
      display: block;
      border-radius: 10px;
    }
    .h-left {
      height: 100px;
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      em {
        font-style: normal;
        font-size: 16px;
        font-weight: 600;
        height: 22px;
        line-height: 22px;
        display: block;
      }
      .hours {
        font-size: 14px;
        height: 24px;
        line-height: 24px;
        margin-top: 5px;
        color: #aaa;
        span {
          color: orange;
        }
        .hours-l {
          margin-left: 10px;
        }
      }
      .pratice {
        font-size: 14px;
        height: 24px;
        line-height: 24px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        color: #aaa;
        span {
          color: orange;
          margin-left: 5px;
        }
      }
    }
  }
  .class-detail {
    height: 30px;
    line-height: 30px;
    width: 100%;
    display: flex;
    .class-detail-first {
      display: block;
      width: 100px;
    }
    .class-detail-second {
      color: #ccc;
      &:hover {
        color: #000;
      }
    }
  }
  .main {
    width: 100%;
    background: #eee;
    display: flex;
    flex-direction: column;
    padding: 10px 0 20px 0;
    span {
      font-size: 14px;
      color: #aaa;
      display: block;
      height: 30px;
      line-height: 30px;
    }
    em {
      font-size: 14px;
      height: 20px;
      line-height: 20px;
      color: #aaa;
      font-style: normal;
      display: block;
    }
    p {
      font-size: 14px;
      line-height: 20px;
      color: #aaa;
    }
  }
  .main-2 {
    .unit {
      height: 50px;
      display: flex;
      padding: 0 10px;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      align-items: center;
      span {
        font-size: 16px;
      }
      div {
        height: 30px;
        display: flex;
        align-items: center;
        color: orange;
        border: 1px solid orange;
        border-radius: 20px;
        width: 60px;
        justify-content: center;
      }
    }
  }
}
.teacher-msg {
  height: 30px;
  line-height: 30px;
  background: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-top: 5px;
  padding-left: 10px;
}
.teacher-br {
  height: 2px;
  width: 100%;
  background: #eee;
}
.teacher {
  height: 60px;
  width: 100%;
  background: #fff;
  display: flex;
  padding: 10px 0 ;
  img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    padding-left: 10px;
  }
  .go {
    height: 40px;
    padding-right: 10px;
    padding-top: 20px;
  }
  .teacher-right {
    height: 55px;
    background: white;
    width: 235px;
    padding-left: 5px;
    padding-top: 5px;
    span {
      font-weight: 600;
      font-size: 18px;
      height: 24px;
      line-height: 24px;
    }
    .star {
      display: flex;
      align-items: center;
      margin-top: 10px;
      span {
        color: #ffd21e;
        font-size: 12px;
        margin-left: 5px;
      }
    }
  }
}
.bottom-br {
  height: 30px;
  width: 100%;
  background: #eee;
  margin-bottom: 40px;
}
.buy {
  height: 30px;
  width:100%;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 5px 0;
  overflow: hidden;
  background: #fff;
  span {
    font-size: 20px;
    font-weight: 600;
    color: red;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
  }
  .btn {
    display: flex;
    position: absolute;
    bottom: 5px;
    right: 10px;
    em {
      font-style: normal;
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      display: block;
      width:100px;
      text-align: center;
    }
    .btn-l {
      background: #FFDEAD;
      color: #EE6363;
      border-top-left-radius: 999px;
      border-bottom-left-radius: 999px;
      cursor: pointer;
    }
    .btn-r {
      background: #F4A460;
      color: #FFFFE0;
      border-top-right-radius: 999px;
      border-bottom-right-radius: 999px;
      cursor: pointer;
    }
  }
}
</style>
