<template>
  <div class="cart-continar">
    <span>填写并核对订单</span>

    <div class="">

      <div class="top-info" style="margin-top: 20px">
          <el-button style="float:right" type="text" @click="dialogFormVisible = true">单击此处修改信息</el-button>

        <!-- <a > 单击此处修改信心</a>
        <span>收货地址：</span>
        <span>福建省&nbsp;龙岩市&nbsp;新罗区&nbsp;东肖路1号&nbsp;龙岩学院</span>
        <div>收货人：XXX</div>&nbsp;&nbsp;&nbsp;&nbsp;电话：1234567890 -->

        <el-descriptions title="用户信息">
          <el-descriptions-item label="姓名">啥都不会</el-descriptions-item>
          <el-descriptions-item label="手机号"
            >18100000000</el-descriptions-item
          >
          <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
          <el-descriptions-item label="备注">
            <el-tag size="small">学校</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="联系地址"
            >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item
          >

        </el-descriptions>

        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话号码" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="收货地址" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
           <el-form-item label="备注" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>

          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false"
              >确 定</el-button
            >
          </div>
        </el-dialog>
      </div>

      <div class="test-continar">
        <div style="display: flex; font-size: 1rem">商品信息</div>

        <ul class="uls2" id="box" v-for="item in carts" :key="item.name">
          <a href="#">
            <img :src="item.picture" alt="" />
            <p>
              {{ item.name }}
            </p>
          </a>
          <p class="weight">
            <i id="weight">单价￥：{{ item.price }}</i>
          </p>
          <input ref="add1" type="text" class="txt" v-model="item.count" />
          <p class="xiaoji">
            <i id="xiaoji1">总金额￥：{{ item.price * item.count }}</i>
          </p>
        </ul>
      </div>
      <div class="buttn">
        <p>
          <i>您需要支付：￥{{ totalNum }}元</i>
        </p>
        <el-button @click="fukuan" type="danger">付款</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible:false,
       form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
    };
  },
  mounted() {
    this.$store.commit("DINGDAN");
  },
  computed: {
    carts() {
      let goods = window.sessionStorage.getItem("carts");
      return JSON.parse(goods);
    },
    totalNum() {
      var num = 0;
      this.carts.forEach((element) => {
        num += element.price * element.count;
      });
      return num;
    },
  },
  methods: {
    fukuan() {
      this.$store.dispatch("updateCarts");
    },
  },
};
</script>

<style scoped>
.dialog-footer{
  height: 60px;
}
.top-info {
  width: 900px;
  margin: 0 auto;
}
.test-continar {
  width: 900px;
  margin: 0 auto;
}
.cart-continar {
  width: 100%;
  /* display: flex; */
}
.p-img {
  /* float: left; */
  width: 80px;
  height: 80px;
  border: 1px solid #ddd;
  margin-right: 10px;
  background-color: #fff;
}

img {
  width: 80px;
  height: 80px;
}
.buttn {
  float: right;
  margin-right: 150px;
}
</style>