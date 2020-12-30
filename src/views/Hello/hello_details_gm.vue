<template>
  <div class="details_body">
    <div>
      <van-nav-bar
        title="会话详情"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
      />

      <div class="huihua_main">
        <van-empty
          class="custom-image"
          image="https://img.yzcdn.cn/vant/custom-empty-image.png"
          description="无商品价格数据库"
        />
      </div>
    </div>
  </div>
</template>

<script >
import { defineComponent } from "vue";
import { getHello } from "../../utils/api";

import { reactive } from "vue";
import { Toast } from "vant";

export default defineComponent({
  data() {
    return {};
  },

  setup() {},
  methods: {
    // fn(){console.log(this.list)},
    onClickLeft() {
      history.go(-1);
    },
  },
});
</script>
<style lang="less" scoped>
</style>