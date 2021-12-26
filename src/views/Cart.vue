.<template>
  <div class="continar">
    <div class="cart-steps">

      <el-steps :active="stepActive" align-center>
        <el-step
          title="购物车"
        >
        </el-step>
        <el-step
          title="提交订单"
        ></el-step>
        <el-step
          title="付款"
        ></el-step>
        <el-step
          title="完成"
        ></el-step>
      </el-steps>

    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  computed:{
    stepActive(){
      return this.$store.state.vuex_cartsStep
    }
  },
  mounted(){
    var step = this.$store.state.vuex_cartsStep
  }
};
</script>

<style>
.continar{
    width: 1300px;
    margin: 0 auto;
    min-width: 1300px;
}
.cart-steps{
  margin-top: 40px;
}
</style>