<template>
  <div>
    <van-nav-bar
      title="自定义会话"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

  <van-form @submit="onSubmit">
  <van-field
    v-model="state.username"
    name="biaoti"
    label="标题"
    placeholder="请输入会话标题"
    class="aaa"
  />
 


  <van-field name="uploader" label="文件上传" class="aaa">
    <template #input>
      <van-uploader v-model="value" />
    </template>
  </van-field>
    
  <div class="button" style="margin: 16px;">
    <van-button round block type="info" native-type="submit">下一步</van-button>
  </div>
</van-form>



    <!-- <p>会话主题</p>
    <div>
      标题
    </div> -->
  </div>
</template>
<script>
import { defineComponent,reactive,ref } from "vue";




export default defineComponent({
  mounted(){
    console.log(this.value[0]);
  },
  data(){
    return{
      // state:1,
      // onSubmit:1,
      // value:1
    }
  },
   setup() {
    const state = reactive({
      username: '',
      password: '',
    });
    const onSubmit = (values) => {
      console.log('submit', values);
    };

    const value = ref([{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }]);
    

    return {
      state,
      onSubmit,
      value
    };
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
  .aaa{
    height: 50px;
    font-size: 18px;
  }
  .button{
    position: absolute;
    bottom: 10px;
    width: 90%;
    height: 5%;
  }
</style>