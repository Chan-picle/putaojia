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
    <section class="all-content">
      <div class="head">
        <img src="TimeImg/jiaocai.jpg" alt="" />
        <div class="h-left">
          <em>外研版英语-1A</em>
          <div class="hours">
            <span>20节</span>课时 <span>10674人</span>已购买
          </div>
          <div class="pratice"><span>25分钟</span>练习时长</div>
        </div>
      </div>
      <div class="class-detail">
        <span class="class-detail-first">课程详情</span>
        <span class="class-detail-second">课件预览</span>
      </div>
      <div class="main">
        <span>课程内容</span>
        <p>
          近日，市场监管总局根据举报，在前期核查研究的基础上，对阿里巴巴集团控股有限公司实施“二选一”等涉嫌垄断行为立案调查。这是我国在互联网领域加强反垄断监管的一项重要举措，有利于规范行业秩序、促进平台经济长远健康发展。
          近年来，我国线上经济蓬勃发展，新业态、新模式层出不穷，对推动经济高质量发展、满足人民日益增长的美好生活需要发挥了重要作用。但与此同时，线上经济凭借数据、技术、资本优势也呈现市场集中度越来越高的趋势，市场资源加速向头部平台集中，关于平台垄断问题的反映和举报日益增加，显示线上经济发展中存在一些风险和隐患。近期召开的中央政治局会议和中央经济工作会议均明确要求强化反垄断和防止资本无序扩张，得到社会热烈反响和广泛支持。可见，反垄断已成为关系全局的紧迫议题。
          反垄断、反不正当竞争，是完善社会主义市场经济体制、推动高质量发展的内在要求。公平竞争是市场经济的核心，只有竞争环境公平，才能实现资源有效配置和企业优胜劣汰，而垄断阻碍公平竞争、扭曲资源配置、损害市场主体和消费者利益、扼杀技术进步，是监管者一直高度警惕的发展和安全隐患。自线上。
        </p>

        <span>级别</span>
        <em>level1</em>
        <span>适合年龄段</span>
        <em>6岁</em>
        <span>核心词汇数</span>
        <em>128+</em>
        <span>拓展词汇</span>
        <em>0+</em>
      </div>
    </section>
    <span class="teacher-msg">外教信息</span>
    <div class="teacher-br"></div>
    <div class="teacher">
      <img src="TimeImg/waijiao.jpg" alt="" />
      <div class="teacher-right">
        <span>Andy</span>
        <div class="star">
          <img
            src="TimeImg/star-not-graded.png"
            alt=""
            v-for="item in StarCount"
          />
          <span>5.0分</span>
        </div>
      </div>
      <div class="go">
        <van-icon name="arrow" size="20px" />
      </div>
    </div>
    <div class="bottom-br"></div>
    <div class="buy">
      <span>￥1790</span>
      <div class="btn">
        <em class="btn-l">免费试听</em>
        <em class="btn-r">立即购买</em>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Toast } from "vant";

export default defineComponent({
  props: ["id"],
  data() {
    return {
      StarCount: 5,
    };
  },
  setup() {
    const onClickIcon = () => {
      Toast("点击图标");
    };
    const onClickButton = () => {
      Toast("点击按钮");
    };
    return {
      onClickIcon,
      onClickButton,
    };
  },
  components: {},

  computed: {},

  mounted() {},

  methods: {
    onClickLeft() {
      Toast("返回");
    },
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
    height: 120px;
    display: flex;
    padding: 10px 0;
    img {
      height: 120px;
      width: 40%;
      display: block;
      border-radius: 10px;
    }
    .h-left {
      height: 120px;
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
        span {
          color: orange;
        }
      }
      .pratice {
        font-size: 14px;
        height: 24px;
        line-height: 24px;
        margin-top: 10px;
        span {
          color: orange;
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
  height: 80px;
  width: 100%;
  background: #fff;
  display: flex;
  padding-top: 10px;
  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
  }
  .go {
    height: 60px;
    padding-right: 10px;
    padding-top: 20px;
  }
  .teacher-right {
    height: 80px;
    background: white;
    width: 235px;
    padding-left: 5px;
    span {
      font-weight: 600;
      font-size: 16px;
      height: 24px;
      line-height: 24px;
    }
    .star {
      margin-top: 30px;
      display: flex;
      padding-top: 5px;
      img {
        height: 10px;
        width: 10px;
        vertical-align: bottom;
      }
      span {
        color: orange;
        font-size: 12px;
        height: 14px;
        line-height: 14px;
        display: block;
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
