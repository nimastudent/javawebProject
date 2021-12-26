./<template>
  <div>
      <!-- <img src="../assets/img/carousel/1.png" alt=""> -->
      {{name}}
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  computed:{
    name(){
      return this.$store.state.vuex_username
    }
  },
  mounted(){
    this.test()
  },
  methods:{
    test(){
      var res = JSON.parse(window.sessionStorage.getItem('goodsDetails'))
      console.log(res)
    }
  }
}
</script>

<style>

</style>