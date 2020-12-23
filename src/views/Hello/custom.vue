<template>
  <div>
    <van-nav-bar
      title="自定义会话"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <p>会话主题</p>
    <div>
      标题
    </div>
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
    // 后退一步
     onClickLeft() {
      history.go(-1)
    }
    
  }
});
</script>
<style lang="less" scoped>

</style>