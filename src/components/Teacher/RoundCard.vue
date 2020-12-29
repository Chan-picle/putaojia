<template>
  <div class="round-container" @click="toTeacher(msg.t_no)">
    <div class="circle">
      <img :src="info.head" class="head">
      <div class="flag">
        <div class="flag-contain" :style="flags"></div>
        <!-- <img :src="info.flag" alt=""> -->
      </div>
    </div>
    <p>{{info.tname}}</p>
    <p>资格证书<img src="/img/products/icon06.png" alt="" style="width:10px;height:10px;margin:0 7px">:<span>{{info.tag}}</span></p>
    <p>{{info.exp}}年教学经验</p>
    <div class="tags">
      <span>口音纯正</span>  
      <span>热情</span>  
    </div>    
  </div>
</template>
<script>
import { defineComponent,ref,reactive } from "vue";

export default defineComponent({
  components: {},
  props:{
    msg: {
      type: Object,
      default: {}
    }
  },
  methods: {
    toTeacher(id){
      this.$router.push("/teacherdetail/"+id);
    }
  },
  data() {
    return {
      flags:{
        "background-image":`url("/img/flags/${this.msg.flag}")`
      },
    };
  },
  computed: {
     info(){
      return {
        head:"/img/shouye/"+this.msg.pic,
        tname:this.msg.t_name,
        flag:"/img/flags/"+this.msg.flag,
        tag:JSON.parse(this.msg.t_tag).join(),
        exp:this.msg.t_experience
      }
    },
  },
});
</script>
<style lang="less" scoped>
.round-container{
  background-color: #fff;
  border-radius: 8px;
  margin: 10px 0 0 10px;
  float: left;
  width: calc(50% - 15px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  .circle{
    border: 1px solid #633EC1;
    padding:4px;
    border-radius: 50%;
    position: relative;
    .head{
      border-radius: 50%;
      display: block;
    }
    .flag{
      position: absolute;
      right: 0;
      bottom: -3px;
      background-color: #fff;
      border-radius: 50%;
      padding:4px;
      height: 25px;
      width: 25px;
      .flag-contain{
        width: 100%;
        height: 100%;
        background-color: #f00;
        border-radius: 50%;
        // background-image: url("/img/flags/xixik-0a41c28457c0d50b.png");
      }
    }
  }
  p{
    margin:0;
    font-size: 12px;
    color:#737373;
    line-height: 23px;
  }
  p:nth-of-type(1){
    font-size: 20px;
    text-transform: capitalize;
    color: #2D2D2D;
    line-height: 30px;
    font-weight: bold;
    img{
      width: 27px;
      margin-left:15px;
      border-radius:10px;
      vertical-align: middle;
    }
  }
  .tags{
    margin-top: 8px;
    span{
      margin:0 5px;
      background-color: #F2F2F2;
      font-size: 11px;
      color:#737373;
      padding:3px 9px;
      border-radius: 10px;
    }
  }
}
</style>