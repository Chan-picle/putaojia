<template>
  <van-search v-model="value" placeholder="搜索外教/配音" shape="round" @focus="searchFocus"/>
  <div class="index">

  </div>
</template>
<script lang="ts">
import { defineComponent ,ref} from "vue";


export default defineComponent({
  setup(){
    const value = ref('');
    //搜索框聚焦事件
    const searchFocus = ()=>{
      console.log(1);
    };
    return { value,searchFocus };
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

  // methods: {}
});
</script>
<style lang="less" >
.van-cell .van-field__left-icon {
    margin-right: 17px;
}
.van-search{
  position: fixed;
  top:0;
  left:0;
  right:0;
}
.index{
  background-color: #f5f5f5;
  height: 50px;
  margin-top:54px ;
}
</style>