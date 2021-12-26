<template>
  <div id="details">
    <!-- 头部 -->
    <div class="page-header">
      <div class="title">
        <button @click="goback">返回</button>
        <div :src="details.name" class="title_name">万物商城</div>
        <div class="list">
          <ul>
            <li>
              <router-link to>概述</router-link>
            </li>
            <li>
              <router-link to>参数</router-link>
            </li>
            <li>
              <router-link to>用户评价</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 头部END -->

    <!-- 主要内容 -->
    <div class="main">
      <!-- 左侧商品图 -->
      <div class="block">
        <img :src="details.picture" />
      </div>
      <!-- 左侧商品图END -->

      <!-- 右侧内容区 -->
      <div class="content">
        <div :src="details.name" class="name">
          &nbsp;&nbsp;&nbsp;{{ details.name }}
        </div>
        <div :src="details.introduce" class="intro">
          &nbsp;&nbsp;&nbsp;{{ details.introduce }}
        </div>
        <div class="store">&nbsp;&nbsp;&nbsp;万物商城自营</div>
        <div :src="details.price" class="price">
          &nbsp;&nbsp;&nbsp;价格： ￥ {{ details.price }}
        </div>

        <div class="pro-list">
          <div class="pn">
            <div style="font-size:20px;margin-top：13px">规格：</div>
             <el-radio v-for="item in details.standard" :key="item" v-model="standard" :label="item">{{item}}</el-radio>
            
          </div>


          <span :src="details.price" class="pro-price"
            >{{ details.price }}元</span
          >

          <div class="pn">
            <div style="font-size:20px;margin-top：16px">数量：</div>
            <el-input-number size="small" v-model="num"></el-input-number>
          </div>

          <div class="price-sum">总计 : {{ totalPrice }}元</div>
        </div>
        <!-- 内容区底部按钮 -->
        <div class="button">
          <el-button class="shop-cart" @click="addToCarts"
            >加入购物车</el-button
          >
          <el-button class="like" @click="addCollect">加入收藏夹</el-button>
        </div>
        <!-- 内容区底部按钮END -->
        <div class="pro-policy">
          <ul>
            <li><i class="el-icon-circle-check"></i> 万物商城自营</li>
            <li><i class="el-icon-circle-check"></i> 万物商城发货</li>
            <li><i class="el-icon-circle-check"></i> 7天无理由退货</li>
            <li><i class="el-icon-circle-check"></i> 7天价格保护</li>
          </ul>
        </div>
      </div>
      <!-- 右侧内容区END -->
    </div>
    <!-- 主要内容END -->
    <div>
      <About></About>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import About from "../components/index/About.vue";

export default {
  name: "Details",
  components: { About },
  data() {
    return {
      //   details:{},
      //   dis: true, // 控制“加入购物车按钮是否可用”
      id: "", // 商品id
      num: 1,
      //   details: "", // 商品详细信息
      picture: "", // 商品图片
      standard:''
    };
  },
  computed: {
    details() {
      let res = JSON.parse(window.sessionStorage.getItem("goodsDetails"));
      return res;
    },
    totalPrice() {
      let price = this.details.price;
      return price * this.num;
    },
  },
  // 通过路由获取商品id
  activated() {
    if (this.$route.query.id != undefined) {
      this.id = this.$route.query.id;
    }
  },
  watch: {
    // 监听商品id的变化，请求后端获取商品数据
    id: function (val) {
      this.details(val);
      this.picture(val);
    },
  },
  mounted: function () {
    //   this.getDetails()
    console.log(this.details);
  },
  methods: {
    ...mapActions(["unshiftShoppingCart", "addShoppingCartNum"]),
    // 获取商品详细信息
    goback(){
      this.$router.go(-1)
    },
    getDetails(val) {
      this.$axios
        .get("http://47.97.207.96:8081/login/index/goods/detail?id=1", {
          id: val,
        })
        .then((res) => {
          this.details = res.data.body;
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    },

    // 加入购物车
    addShoppingCart() {
      this.$axios
        .get("http://47.97.207.96:8081/goods/insert", {
          // user_id: this.$store.getters.getUser.uid,
          product_id: this.id,
        })
        .then((res) => {
          switch (res.data.code) {
            case "001":
              // 新加入购物车成功
              this.unshiftShoppingCart(res.data.shoppingCartData[0]);
              this.notifySucceed(res.data.msg);
              break;
            case "002":
              // 该商品已经在购物车，数量+1
              this.addShoppingCartNum(this.id);
              this.notifySucceed(res.data.msg);
              break;
            default:
              this.notifyError(res.data.msg);
          }
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    },
    addCollect() {
      // 判断是否登录,没有登录则显示登录组件
      if (!this.$store.getters.getUser) {
        this.$store.dispatch("setShowLogin", true);
        return;
      }
      this.$axios
        .post("/api/user/collect/addCollect", {
          // user_id: this.$store.getters.getUser.uid,
          product_id: this.id,
        })
        .then((res) => {
          if (res.data.code == "001") {
            // 添加收藏成功
            this.notifySucceed(res.data.msg);
          } else {
            // 添加收藏失败
            this.notifyError(res.data.msg);
          }
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    },
    handleChange(value) {
      console.log(value);
    },
    addToCarts() {
      console.log(this.details.id, this.num);
      let params = {
        id: this.details.id,
        num: this.num,
        standart:this.standard
      };
      this.$store.dispatch("addToCarts",params);
    },
  },
};
</script>
<style>
/* 头部CSS */
#details {
  padding: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

#details .page-header {
  height: 9%;
  /* margin-top: 20px; */
  z-index: 4;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  -webkit-box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
}

#details .page-header .title {
  width: 100%;
  height: 64px;
  line-height: 64px;
  font-size: 20px;
  font-weight: 400;
  color: #212121;
  margin: 0 auto;
}
#details .page-header .title_name {
  margin-left: 2rem;
  float: left;
}
#details .page-header .title .list {
  height: 64px;
  margin-right: 2rem;
  float: right;
}
#details .page-header .title .list li {
  float: left;
  margin-left: 20px;
}
#details .page-header .title .list li a {
  font-size: 14px;
  color: #616161;
}
#details .page-header .title .list li a:hover {
  font-size: 14px;
  color: #ff6700;
}
/* 头部CSS END */

/* 主要内容CSS */
#details .main {
  width: 75%;
  height: 80%;
  padding-top: 30px;
  margin: 0 auto;
}
#details .main .block {
  float: left;
  width: 500px;
  height: 600px;
}
#details .main .block img {
  width: 450px;
  height: 580px;
  margin-left: 0px;
}

#details .main .content {
  float: left;
  margin-left: 40px;
  width: 680px;
}
#details .main .content .name {
  height: 30px;
  line-height: 30px;
  font-size: 24px;
  font-weight: 530;
  color: #212121;
  margin-top: 20px;
  text-align: left;
  background-color: rgb(255, 242, 232);
}

#details .main .content .intro {
  color: grey;
  padding-top: 10px;
  background: rgb(255, 249, 245);
  text-align: left;
}
#details .main .content .store {
  color: #ff6700;
  padding-top: 10px;
  text-align: left;
  background: rgb(255, 249, 245);
}
#details .main .content .price {
  display: block;
  font-size: 22px;
  color: #ff6700;
  border-bottom: 1px solid #e0e0e0;
  padding: 25px 0 25px;
  text-align: left;
  background: rgb(255, 249, 245);
}
#details .main .content .price .del {
  font-size: 14px;
  margin-left: 10px;
  color: #b0b0b0;
  text-decoration: line-through;
}
#details .main .content .pro-list {
  background: #f9f9fa;
  padding: 30px 60px;
  margin: 50px 0 50px;
}
#details .main .content .pro-list span {
  line-height: 30px;
  color: #4e4e4e;
}
.pn {
  display: flex;
}
#details .main .content .pro-list .pro-name {
  font-size: 14px;
  color: #616161;
  width: 30px;
  height: 30px;
  border: 1px gray solid;
  margin-left: 30px;
  line-height: 30px;
}

#details .main .content .pro-list .pn .pro-name:hover {
  font-size: 14px;
  color: #ff6700;
  border: 1px rgb(235, 169, 107) solid;
}
#details .main .content .pro-list .pro-price {
  float: right;
}

#details .main .content .pro-list .price-sum {
  color: #ff6700;
  font-size: 24px;
  padding-top: 20px;
}
#details .main .content .button {
  height: 55px;
  margin: 10px 0 20px 0;
}
#details .main .content .button .el-button {
  float: left;
  height: 55px;
  font-size: 16px;
  color: #fff;
  border: none;
  text-align: center;
}
#details .main .content .button .shop-cart {
  width: 340px;
  background-color: #ff6700;
}
#details .main .content .button .shop-cart:hover {
  background-color: #f25807;
}

#details .main .content .button .like {
  width: 260px;
  margin-left: 40px;
  background-color: #b0b0b0;
}
#details .main .content .button .like:hover {
  background-color: #757575;
}
#details .main .content .pro-policy li {
  float: left;
  margin-right: 20px;
  color: #b0b0b0;
}
/* 主要内容CSS END */
#details {
  display: flex;
  flex-direction: column;
}
</style>