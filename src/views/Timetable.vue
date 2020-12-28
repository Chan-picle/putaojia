<template>
  <header>
    <van-nav-bar title="Timetable" fixed placeholder="true">
      <template #right>
        <span></span>
        <span class="buyed">已购项目</span>
      </template>
    </van-nav-bar>
  </header>
  <div>
    <van-tabs v-model:active="active" @click="onClick">
      <van-tab title="日历模式" name="calendar"></van-tab>
      <van-tab title="列表模式" name="list"></van-tab>
    </van-tabs>
  </div>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <router-view></router-view>
  </van-pull-refresh>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Toast } from "vant";
import { ref } from "vue";

export default defineComponent({
  setup() {
    const activeName = ref("a");
    return { activeName };
  },
  data() {
    return {
      isLoading: false,
    };
  },
  components: {},
  props: {},
  // name:'${该组件名称}',
  // computed: {},

  // mounted() {},

  methods: {
    onClickRight() {
      Toast("按钮");
    },
    onClick(to: string): void {
      this.$router.push(to);
    },
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
  },
});
</script>
<style lang="less" scoped>
.buyed {
  font-size: 12px;
  color: #ccc;
}
</style>