<template>
<div class="product-container" v-if="courseList.length">
  <product-item v-for="(item,i) in courseList" :key="i" :msg="item" @click="jumpToDetail(item.productId)"/>
  <!-- <product-item />
  <product-item /> -->
</div>
  
  <!-- <product-item /> -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ProductItem from "../../components/shouye/ProductItem.vue";
import {getCourseListApi} from "../../utils/api";

export default defineComponent({
  components: {ProductItem},
  props:{},
  data() {
    return {
      courseList:[]
    };
  },
  computed: {},
  mounted() {
    getCourseListApi({}).then((res:any)=>{
      this.courseList = res.result;
    });
  },
  methods: {
    jumpToDetail(id:any){
      this.$router.push("/timedetail/"+id)
    }
  }
});
</script>
<style lang="less" scoped>
.product-container{
  width: 355px;
  margin:0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>