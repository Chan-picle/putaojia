<template>
  <div
    class="intro-detail"
    v-for="item in timeList"
    :key="item.id"
    @click="goToDetail(item.id)"
  >
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
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    timeList: Array
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
})
</script>
<style lang="less" scoped>
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
</style>
