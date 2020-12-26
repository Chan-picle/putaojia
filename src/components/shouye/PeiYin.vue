<template>
  <div>
    <div class="top">
      <img src="../../../public/img/shouye/touxiang01.png" alt="头像">
      <span>顾雨惜</span>
    </div>
    <div class="shipin">
      <img src="../../../public/img/shouye/shipin01.png" alt="视频">
    </div>
    <div class="jieshao">
      <p class="timu">参观厨房</p>
      <span>【加菲猫2】温斯顿带加菲猫参观厨房，厨房里所有的一切都是加菲猫的。</span>
      <div class="xinqv">
        <p>兴趣点</p>
        <span>cookery</span>
        <span>mine</span>
        <span>morsel</span>
      </div>
      <div class="fenxiang">
        <van-icon class="one" name="like-o" />
        <van-icon class="one" name="comment-circle-o" />
        <van-icon class="one" name="certificate" />
        <van-icon class="one" name="music-o" />
        <div class="sandian">
          <van-icon name="ellipsis" @click="show1 = true" />
          <van-action-sheet v-model:show ="show1" :actions="actions" @select="onSelect" />
        </div>
      </div>
    </div>
        
    <div class="foot">
      <van-cell is-link @click="showPopup">
        <div class="pinlun">
          <div><img src="../../../public/mienimg/icon04.png" alt="头像"></div>
          <input type="text" placeholder="发射你的爱心评论吧~">
        </div>
      </van-cell>
      <van-popup v-model:show="show" position="bottom">
        <p>共5条评论</p>
        <div class="pinlun">
          <div><img src="../../../public/mienimg/icon04.png" alt="头像"></div>
          <input type="text" placeholder="发射你的爱心评论吧~">
          <p>发送</p>
        </div>
      </van-popup>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ref } from 'vue';

export default defineComponent({

  setup() {
    const show = ref(false);
    const show1 = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    const actions = [
      { name: '举报' },
      { name: '取消' }
    ];
    const onSelect = (item) => {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      show1.value = false;
      // Toast(item.name);
    };
    return {
      show,
      show1,
      showPopup,
      actions,
      onSelect
    };
  },
  data(){
    return {
     
    }
  },
  components: {},
  //请求数据
  mounted() {
    
  },
  methods: {
    
  },
});
</script>
<style lang="less" scoped>
.top{
  padding: 10px 15px;
  border-top: 1px solid rgb(235, 231, 231);
  
  img{
    width: 35px;
    height: 35px;
    vertical-align: middle;
    margin-right: 20px;
  }
  span{
    font-size: 14px;
  }
}
.shipin{
  
  img{
    width: 100%;
    height: 200px;
  }
}
.jieshao{
  padding: 0 15px;

  .timu{
    font-size: 15px;
    line-height: 40px;
  }
  span{
    display: inline-block;
    font-size: 12px;
    padding-top: 5px;
  }

  .xinqv{
    display: flex;
    margin-top: 10px;

    p{
      font-size: 15px;
    }
    span{
      display: inline-block;
      background-color: orange;
      border-radius: 10px;
      padding: 3px 5px;
      margin: 0 5px;
      color: white;
    }
  }
}
.fenxiang{
  margin-top: 15px;
  position: relative;
  
  .one{
    margin-right: 33px;
    font-size: 25px;
  }
  .sandian{
    display: flex;
    position: absolute;
    top: 10px;
    right: 0;
  }
}
.foot{

  p{
    text-align: center;
    font-size: 13px;
    line-height: 40px;
    color: rgb(186, 179, 179);
  }

  .pinlun{
    display: flex;
    margin: 25px 0;
    padding: 0 10px;
    position: relative;

    div{
      background-color: rgb(241, 240, 240);
      width: 30px;
      padding: 10px 0 0 8px;

      img{
        width: 22px;
        height: 22px;
      }
    }

    input{
      border: none;
      background-color: rgb(241, 240, 240);
      width: 100%;
      height: 40px;
      font-size: 12px;
    }

    p{
      background-color: orange;
      border-radius: 3px;
      position: absolute;
      top: 6px;
      right: 10px;
      line-height: 30px;
      padding: 0 8px;
      color: white;
      box-shadow: 0 1px 1px 1px rgb(201, 197, 197);
    }
  }
}
</style>



