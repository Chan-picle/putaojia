<template>
  <div>
    <div class="header">
      <van-nav-bar title="现金券" fixed placeholder />
      <van-icon class="left" name="arrow-left" @click="luyou" />
    </div>
    <van-pull-refresh class="xiala" v-model="state.loading" @refresh="onRefresh" success-text="刷新成功">
      <!-- 优惠券单元格 -->
      <van-coupon-cell
        :coupons="state.coupons"
        :chosen-coupon="state.chosenCoupon"
        @click="state.showList = true"
      />
      <!-- 优惠券列表 -->
      <van-popup
        v-model:show="state.showList"
        round
        position="bottom"
        style="height: 90%; padding-top: 4px;"
      >
        <van-coupon-list
          :coupons="state.coupons"
          :chosen-coupon="state.chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </van-pull-refresh>
  </div>
</template>

<script>
import { reactive } from 'vue';

const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '天天神券',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
};

export default {
  setup() {
    const state = reactive({
      loading: false,
      coupons: [coupon],
      showList: false,
      chosenCoupon: -1,
    });
    const onRefresh = () => {
      setTimeout(() => {
        state.loading = false;
      }, 1000);
    };

    const onChange = (index) => {
      state.showList = false;
      state.chosenCoupon = index;
    };
    const onExchange = (code) => {
      state.coupons.push(coupon);
    };

    return {
      state,
      onRefresh,
      onChange,
      onExchange,
      disabledCoupons: [coupon],
    };
  },
  methods:{
    luyou(){
      this.$router.push("/mine");
    }
  }
};
</script>

<style lang="less" scoped>
  .header{

    .left{
     position: fixed;
     font-size: 20px;
      top: 15px;
      left: 15px;
      z-index: 999;
    }
  }
  .xiala{
      background-color: #F2F2F2;
      height: 621px;
    }
</style>