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
  }
}
</script>

<style>

</style>