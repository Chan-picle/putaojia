<template>
  <div class="bg">
    <header class="head">
      <van-nav-bar
      title="全部商品"
      left-arrow
      @click-left="goback"
      fixed
    />
    </header>
    <section class="class-detail">
      <div class="more" v-for="item in 9">
      <div class="detail" @click="goDetail(id)">
        <img src="TimeImg/jiaocai.jpg" alt="" />
        <section class="d-right">
          <em>{{ moreList.title }}</em>
          <span class="first">包括10个学习模块(modules)</span>
          <div class="second">
            <span>{{ moreList.time }}课时</span>
            <span>6-12岁</span>
          </div>
          <div class="third">
            <span>￥{{ moreList.c_price }}</span>
            <div>购买</div>
          </div>
        </section>
      </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getProductInfoApi } from "../utils/api";
export default defineComponent({
  props:["id"],
  data() {
    return {
      moreList: {}
    };
  },

  components: {},

  computed: {},

  mounted() {
    this.getProductInfo();
  },

  methods: {
    goback() {
      this.$router.go(-1);
    },
    async getProductInfo() {
      const res:any = await getProductInfoApi({id: this.id});
      let msg = res.result[0];
      this.moreList = {
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
        time:msg.time,
        experience:msg.t_experence
      }as any;
    },
    goDetail(id:any) {
      this.$router.push('/timedetail/' + id);
    }
  }
})
</script>
<style lang="less" scoped>
.bg {
  padding: 0 15px;
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
}
</style>
