.<template>
  <div>
      您还未登录 <a href="">登录</a>
  </div>
</template>

<script>
export default {
    name:'unLogin',
    mounted(){
      let username = window.sessionStorage.getItem('username')
      if(username != null){
        this.$store.push()
      }
    }
}
</script>

<style>

</style>