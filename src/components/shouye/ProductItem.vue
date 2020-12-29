<template>
  <div class="course-container">
    <div class="imgBox">
      <img :src="info.pimg" alt="">
      <div class="purple-tag">官方课</div>
    </div>
    <div class="text-container">
      <h5>{{info.title}}</h5>
      <p class="ks">课时数：{{info.time}}课时</p>
      <div class="t-info">
        <img src="/img/shouye/touxiang01.png" alt="">
        <span class="t-name">{{info.teacher}}</span>
        <span class="price">{{info.price}}元</span>
      </div>
    </div>
    
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

interface courseType{
  title:string,
  time:number,
  productId:number,
  price:string,
  pimg:string,
  teacher:string
}
export default defineComponent({
  props:["msg"],
  data(){
    return {
      info:{} as courseType
    }
  },
  //请求数据
  mounted() {
    this.fliterMsg(this.msg);
  },
  computed:{
  },
  methods: {
    fliterMsg(msg:any){
      this.info = {
        title:msg.title,
        time:msg.time,
        productId:msg.productId,
        price:msg.c_price,
        pimg:"/img/products/"+msg.c_img,
        teacher:msg.t_name
      }
    }
  },
});
</script>
<style lang="less" scoped>
.course-container{
  background-color: #fff;
  height: 215px;
  width: 170px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;
  .imgBox{
    position: relative;
    width: 100%;
    height: 125px;
    img{
      height: 100%;
      width: 100%;
    }
    .purple-tag{
      position: absolute;
      top:0;
      left:0;
      background-color: #8D52C0;
      border-radius: 10px 0 10px 0;
      padding:5px;
      color:#fff;
      font-size: 12px;
    }
  }
  .text-container{
    flex: 1;
    padding:10px;

    h5{
      font-size: 15px;
      width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 5px;
    }
    .ks{
      font-size: 12px;
      color:#7B7B7B;
      margin-bottom: 5px;
    }
    .t-info{
      display: flex;
      justify-content: space-between;
      img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .t-name{
        text-transform: capitalize;
        font-size: 13px;
        color:#2D2D2D;
        flex: 1;
        line-height: 25px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .price{
        color:#E31716;
        font-size: 15px;
        line-height: 25px;
      }
    }
  }
}
</style>



