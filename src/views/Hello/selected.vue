<template>
  <div class="asd">
    <van-nav-bar
      title="话题库"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
      placeholder
    />

    <!-- 按钮弹出框  筛选框 -->
    <div class="tanchukuang" v-show="kaiguan">
      <ul>
        <li @click="shaixuan_click(item.tite)" v-for="(item,index) in tanchulist" :key="index">{{item.tite}}</li>
      </ul>
    </div>

    <!-- <button @click="fn">aa</button> -->
    <van-tabs
      v-model:active="active"
      :duration="0.2"
      animated
      title-active-color="orange"
      color="orange"

      sticky 
      offset-top="46px"
    >
      <van-tab v-for="(i, index) in fenlist" :title="i.tite" >
          <!-- 下拉刷新组件 -->
        <van-pull-refresh v-model="state.loading" @refresh="onRefresh" success-text="刷新成功">
          <!-- 内容 {{ index }} -->

          <div class="huadong_box" v-if="list.list.length" style="overflow:hidden" >
            <div class="img_box" v-for="(item,i) in list.list" @click="jumpTo(to1,item.id)" :key="i">
              <!-- <p>{{item}}</p> -->
              <img :src="item.topic_img" alt="" />
              <p>{{ item.topic_title }}</p>
              <!-- <p>{{ item.id  }}</p> -->
            </div>
          </div>


          <!-- <div class="huadong_box">
            <div class="img_box" v-for="item in list">
              <img :src="item.topic_img" alt="" />
              <p>{{ item.topic_title }}</p>
            </div>
          </div> -->
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>

</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { getHello } from "../../utils/api";

import { reactive } from "vue";
import { Toast } from "vant";

export default defineComponent({
  data() {
    return {
      tanchulist:[
          { tite: "全部" },
          { tite: "入门" },
          { tite: "初级" },
          { tite: "中级" },
          { tite: "高级" }
        ],
        //筛选级别
      jibie:"全部",
      //筛选开关
      kaiguan:false,
      aaa:3,
      fenlist: [
        { tite: "认识" },
        { tite: "动物" },
        { tite: "趣味" },
        { tite: "科普" },
      ],
      to1: "/hello_details/",
    };
  },

  setup() {
    // 请求数据
    const state = reactive({
      // count: 0,
      loading: false,
    });
    const list = reactive({
      list: []
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
      list,
    };
  },
  mounted() {
    // this.list = [1, 2]
    getHello({}).then((res: any) => {
      console.log(res);
      this.list.list = res.result;
      this.$forceUpdate();



      
      // console.log(this.list);
      // console.log(item.topic_img)
    });
    // setTimeout((): void => {
    //   this.list.list = [1,2];
    // }, 2000)
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
    fn(){console.log(this.list)},
    onClickLeft() {
      history.go(-1);
    },

    onClickRight() {
      console.log("弹出框");
      this.kaiguan?this.kaiguan=false:this.kaiguan=true
    },

    // 筛选
    shaixuan_click(a:string){
      console.log(a);
      console.log(this.jibie);
      this.jibie=a;
      console.log(this.jibie);
      
    },

//需要的数据要用参数来接收，this就试过垃圾
    jumpTo(to: string,a: string) {
      let allto = to + a;
      this.$router.push(allto);
    },
  },
});
</script>
<style lang="less" scoped>
// 弹出框
.tanchukuang{
  background-color: red;
  position: absolute;
  right: 5px;
  z-index: 100;
  ul{
    width: 100px;
    background-color: yellow;
    border-radius:5px;
    li{
      text-align: center;
      width: 100%;
      font-size: 20px;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #ddd;
      

    }
  }
}

.asd {
  // padding-bottom: 400px;
  margin-bottom: 100px;
  overflow-y:scroll;

}
.huadong_box {
  width: 100%;
  height: 100%;
  // background-color: red;
  // margin-bottom: 10px;
}
.img_box {
  width: 28%;
  height: 150px;
  // background-color: yellow;
  float: left;
  padding: 5px;
  margin: 5px;  
  margin-bottom: 10px;
  img {
    width: 100%;
    height: 80%;
    border-radius:10px;
  }
  p {
    text-align: center;
    line-height: 10px;
    height: 10px;
  }
}
</style>