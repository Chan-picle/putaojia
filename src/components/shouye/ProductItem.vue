<template>
  <div class="bg">
    <!-- <section class="cont"></section> -->
    <div class="class-intro" v-for="i in 1">
      <div class="intro-detail" v-for="item in timeList" :key="item.id">
        <div class="up">
          <img class="ingone" :src="item.classimg" alt="">
        </div>
        <div class="down">
          <span class="text">{{ item.textbook }}</span>
          <span class="hour">课时数：{{ item.hours }}课时</span> 
          <section class="btom">
            <div class="btom-d">
            <img :src="item.teacherimg" alt="">
            <span>{{ item.teachername }}</span>
            </div>
            <span class="price">{{ item.price }}元</span>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data(){
    return {
     
    }
  },
  components: {},
  //请求数据
  mounted() {
    
  },
  methods: {
    
  },
});
</script>
<style lang="less" scoped>
.bg {
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
      width: 48%;
      height: 185px;
      margin-top: 20px;
      border-radius: 10px;
      overflow: hidden;
      .up {
        height: 100px;;
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
        height: 70px;
        // width: 100%;
        background-color: white;
        padding: 10px;
        // border-radius: 10px;
        .text {
          font-size: 14px;
          font-weight: 600;
          height: 20px;
          line-height:20px;
          font-weight: 900;
        }
      
        .hour {
          font-size: 12px;
          color: rgb(167, 170, 174);
          height: 20px;
          line-height:20px;
          margin-bottom: 5px;
        }
        .btom {
          display: flex;
          justify-content: space-between;
          .btom-d {
            display: flex;
            // padding: 0 10px;
            span {
              font-size: 14px;
              height: 20px;
              line-height: 20px;
            }
            img {
              height: 20px;
              width: 20px;
              border-radius: 50%;
              display: block;
              margin-right: 8px;
            }
          }
          .price {
            color: red;
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>



