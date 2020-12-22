<template>
  <div class="bg">
    <section class="cont"></section>
    <span class="intro">课程推荐</span>
    <div class="class-intro">
      <div class="intro-detail" v-for="item in 8"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {};
  },
  components: {}
});
</script>
<style lang="less" scoped>
.bg {
  background: #ccc;
  padding: 0 10px;
  padding-top: 20px;
  margin-bottom: 50px;
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
      width:45%;
      height: 120px;
      background: yellow;
      margin-top: 20px;
      border-radius: 10px;
    }
  }
}
</style>
