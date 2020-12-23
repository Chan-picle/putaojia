<template>
  <div>
    <van-nav-bar
      title="话题库"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-tabs v-model:active="active" sticky :duration=0 :title-active-color="red">
      <van-tab v-for="index in 4" :title="'选项 ' + index"   >
        内容 {{ index }}
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { defineComponent } from "vue";


export default defineComponent({
  setup(){

  },
  components: {},
  props:{},
  // name:'${该组件名称}',
  // data() {
  //   return {

  //   };
  // },
  // computed: {},

  // mounted() {},

 methods: {
     onClickLeft() {
      history.go(-1)
    },
  
    onClickRight() {
      console.log("弹出框");
    }
  }
});
</script>
<style lang="less" scoped>

</style>