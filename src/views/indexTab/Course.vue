<template>
  <product-item />
  <product-item />
</template>
<script>
import { defineComponent } from "vue";
import ProductItem from "../../components/shouye/ProductItem.vue";

export default defineComponent({
  components: {ProductItem},
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

</style>