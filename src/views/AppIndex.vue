<template>
  <div class="all">

    
     <div class="car" >
         <div class="side">
           <Sideimg> </Sideimg>
         </div>
         <div>
          <Carousel ></Carousel>
         </div>
         <div class="side">
           <Sideimg> </Sideimg>
         </div>
      </div>
  
      <div class="sid">
        <div>
          <SideMenu @indexSelect="listByCategory" class="sm" ref="sideMenu" ></SideMenu>
        </div>
        <div>
           <Goods  class="goods-area" ref="goodsArea"></Goods>
        </div>
        
   
      </div>
          <div>
          <About ></About>
         </div>
 
  </div>   
</template>

<script>

import Carousel from '../components/appIndex/Carousel.vue';
import Sideimg from '../components/appIndex/Sideimg.vue';
import SideMenu from '../components/appIndex/SideMenu.vue';
import Goods from '../components/appIndex/Goods.vue';
import About from '../components/index/About.vue';


export default{
  name:'AppIndex',
  components:{Carousel,SideMenu,Sideimg,Goods,About},
  data(){
    return{

    }
  },
   
  methods: {
      listByCategory () {
        var _this = this
        var id = this.$refs.SideMenu
        console.log(id);
        var url = 'http://47.97.207.96:8081/login/index/goods?typename=' + typename
        this.$axios.get(url).then(resp => {
          if (resp && resp.data.code === 200) {
            _this.$refs.goodsArea.goods = resp.data.result
            _this.$refs.goodsArea.currentPage = 1
          }
        })
      }
    }
}
</script>

<style scoped>

.goods-area {
    width: 990px;
    margin-left: 30px;
  }
  .car{
    width:1200px;
    margin-right:auto ;
    margin-left:auto ;
    margin-top: 15px;
    display: flex;
  }
  .sid{
    box-shadow:2px rgb(201, 189, 189);
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    margin-top: 10px;
    border:3px rgb(240, 240, 240) solid;
  }
  .all{
    display: flex;
    flex-direction: column;
  }
  .sm{
    border:5px rgb(240, 240, 240) solid;
  }
</style>
