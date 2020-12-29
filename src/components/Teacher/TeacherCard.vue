<template>
<div class="tc-container" v-if="msg">
  <div class="teacherinfo">
    <div class="head-p">
      <img :src="info.head" alt="">
    </div>
    <div class="head-info">
      <p>{{info.tname}}<img :src="info.flag" alt=""></p>
      <p>资格证书<img src="/img/products/icon06.png" alt="" style="width:10px;height:10px;margin:0 7px">:<span>{{info.tag}}</span></p>
      <p>{{info.exp}}年教学经验</p>
    </div>
  </div>
  <div class="productlist">
    <ul>
      <li v-for="(item,i) in imgs" :key="i" @click="toProduct(item.productId)">
        <img :src="item.cimg" alt="">
        <h5>{{item.title}}</h5>
        <p><span class="ks">{{item.time}}课时</span><span class="price">{{item.price}}元</span></p>
      </li>
    </ul>
  </div>
  <div class="comment">
    <div class="stars">学生评价
      <van-rate v-model="star"  color="#F8B551" readonly :size="11" />
    </div>
    <div class="com">杨*。:太好了！</div>
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
  data() {
    return {
    };
  },
  methods: {
    toProduct(id){
      // console.log(id);
      this.$router.push("/timedetail/"+id)
    }
  },
  // setup() {
  //   let star = ref(3);
  //   return { star };
  // },
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
    star(){
      return this.msg.score
    },
    imgs(){
      let tempimg = this.msg.c_img1.split(",").map(elm=>{
        return "/img/products/" + elm
      });
      let temptitle = this.msg.title1.split(",");
      let temptime = this.msg.time1.split(",");
      let tempprice = this.msg.c_price1.split(",");
      let tempids = this.msg.productId1.split(",");
      let arr = [{cimg:"",title:"",time:"",price:""},{},{}]
      arr.forEach((elm,i)=>{
        elm.cimg = tempimg[i];
        elm.title = temptitle[i];
        elm.time = temptime[i];
        elm.price = tempprice[i];
        elm.productId = tempids[i];
      })
      return arr
    }
  }
});
</script>
<style lang="less" scoped>
.tc-container{
  width: 335px;
  height: 250px;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  margin: 12px auto 0;
  .teacherinfo{
    display: flex;
    height: 60px;
    .head-p{
      border-radius: 50%;
      border: 2px solid #633EC1;
      height: 60px;
      width: 60px;
      box-sizing: border-box;
      img{
        margin: 3px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: block;
      }
    }
    .head-info{
      flex: 1;
      margin-left: 15px;   
      display: flex;
      flex-direction: column; 
      p{
        margin:0;
        padding: 0;
        flex-shrink: 1;
        font-size: 12px;
        color:#737373;
        font-weight: bold;
        line-height: 20px;
      }
      p:nth-child(1){
        font-size: 15px;
        text-transform: capitalize;
        color: #2D2D2D;
        img{
          width: 27px;
          margin-left:15px;
          border-radius:10px;
          vertical-align: middle;
        }
      }
    }
  }
  //产品列表
  .productlist{
    margin-top:11px;
    ul{
      display: flex;
      justify-content: space-between;
      li{
        display: flex;
        flex-direction: column;
        height: 140px;
        width: 103px;
        img{
          width: 103px;
          height: 87px;
        }
        h5{
          margin: 0;
          line-height: 26px;
          font-size: 13px;
          overflow-x: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
        }
        p{
          margin: 0;
          .ks{
            font-size: 11px;
            float: left;
          }
          .price{
            color:#EF2D2D;
            font-size: 13px;
            float: right;
          }
        }
      }
    }
  }
  .comment{
    .stars{
      font-size: 11px;
    }
    .com{
      width: 300px;
      height: 20px;
      padding: 0 15px;
      background: #F2F2F2;
      border-radius: 10px;
      font-size: 9px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #737373;
      line-height: 20px;
      margin-top:5px;
    }
  }
}
</style>