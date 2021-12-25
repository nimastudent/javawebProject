<template>
  <div >
    <div >
       <nav-menu class="nav-menu"></nav-menu>
       <router-view/>
             
      </div>
  </div>   
</template>

<script>
import NavMenu from '../components/index/NavMenu';



export default{
  components:{NavMenu},
   
}
</script>

<style scoped>


.nav-menu{
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  margin: 0 auto;
}

</style>
