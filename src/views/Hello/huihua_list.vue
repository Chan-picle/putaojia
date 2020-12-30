<template>
  <van-nav-bar
    title="会话列表"
    left-text=""
    left-arrow
    @click-left="onClickLeft"
  />

  <!-- 下拉刷新组件 -->

  <van-tabs
    v-model:active="active"
    sticky
    :duration="0.2"
    animated
    title-active-color="orange"
    color="orange"
  >
    <van-tab v-for="(item, index) in fenlist" :title="item.tite">
      <van-pull-refresh
        v-model="state.loading"
        @refresh="onRefresh"
        success-text="刷新成功"
      >
        <div class="huihua_main">
          <van-empty
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="暂无课程内容"
          />
        </div>
      </van-pull-refresh>
    </van-tab>
  </van-tabs>
</template>
<script>
import { defineComponent } from "vue";

import { reactive } from "vue";
import { Toast } from "vant";

export default defineComponent({
  data() {
    return {
      fenlist: [{ tite: "全部" }, { tite: "已上课" }, { tite: "已取消" }],
    };
  },
  setup() {
    const state = reactive({
      // count: 0,
      loading: false,
    });
    const onRefresh = () => {
      setTimeout(() => {
        // Toast("刷新成功");
        state.loading = false;
        // state.count++;
      }, 1000);
    };

    return {
      state,
      onRefresh,
    };
  },
  components: {},
  props: {},
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
      history.go(-1);
    },
  },
});
</script>
<style lang="less" scoped>
.huihua_main {
  height: 500px;
  margin-top: 30%;
}
</style>