<template>
  <div class="card-container">
    <div class="c-wrapper">
      <div class="c-header">
        <img src="http://42.192.148.152/wp-content/uploads/2020/12/touxiang01.png" alt="">
        <div>
          <span>Kim</span>
          <img src="http://42.192.148.152/wp-content/uploads/2020/12/xixik-8accb7e51f5673c1.png" alt="">
          <p>三年教学经验</p>
        </div>
      </div>
      <p>学识渊博，擅长对各国文化进行拓展，多彩多艺，有亲和力</p>
      <div class="c-tag">
        <span>TEFL</span>
        <span>工商管理硕士</span>
      </div>
      <div>
        <img src="http://42.192.148.152/wp-content/uploads/2020/12/tu01.png" alt="">
        <img src="http://42.192.148.152/wp-content/uploads/2020/12/tu02.png" alt="">
        <img src="http://42.192.148.152/wp-content/uploads/2020/12/tu03.png" alt="">
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props:{},
  data() {
    return {

    };
  },
  computed: {},

  mounted() {},

  methods: {}
});
</script>
<style lang="less" scoped>
@import "../../assets/style/var.less";
.card-container{
  width: 346px;
  height: 221px;
  border-radius:15px;
  background-color: #002253;
  color:#fff;
  font-size:12px;
  .c-wrapper{
    padding:14px 20px 0;
    .c-header{
      display: flex;
      img{
        width: 40px;
        height: 40px;
      }
      >div{
        height: 40px;
        img{
          height: 15px;
          width:22px ;
        }
      }
    }
  }

}
</style>