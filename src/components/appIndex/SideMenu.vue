<template>
  <el-menu
    class="categories"
    default-active="1"
    @select="handleSelect"
    active-text-color="red"
    >
    <el-menu-item v-for="(items) in sidemenu"
    :key="items.id" :index="items.name"
    >
      <i class="el-icon-menu"></i>
      <span src="sidemenu"> {{items.name}}</span>
    </el-menu-item>
    
  </el-menu>
</template>

<script>
import axios from 'axios'
    export default {
      name: 'SideMenu',
      data () {
        return {
          sidemenu:[],
          typename:'',
          index:'1'
        }
      },
      mounted(){
        this.localsidemenu()
      },
      methods: {
      
        async localsidemenu(){
          var _this =this

          const {data:res}=  await axios({
            method:'get',
            url:'http://47.97.207.96:8081/login/index'
          })
          console.log(res);
          if(res.success){
            this.sidemenu = res.body
          }
        },
        handleSelect (key, keyPath) {
          this.index = key
          // console.log(keyPath)
          // this.typename=key,
          // this.$emit('Goods')
        }
      }
    }
</script>

<style scoped>
  .categories {
  
    
    width: 150px;
  }
</style>
