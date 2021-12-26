<template>
  <el-card class="card-carousel">
  <el-carousel  class="push" :interval="4000" arrow="always">
    <el-carousel-item v-for="item in items" :key="item.id">
        <img :src="item.img" alt="" class="carousel_img">
    </el-carousel-item>
  </el-carousel>
  </el-card>
</template>

<script>
  export default {
    name: 'Carousel',
    data: function () {
      return {
        items: [{
          id: 1,
          img:require('../../assets/img/carousel/1.png'),
          link: ''
          },
        {
          id: 2,
          img:require('../../assets/img/carousel/2.png'),
          link: ''
        },
        {
          id: 3,
          img:require('../../assets/img/carousel/3.png'),
          link: ''
        }]
      }
    }
  }
</script>

<style scoped>
  

  .card-carousel {
    /*margin: 0 auto;*/
    /* margin-left: 20px; */
    width: 750px;
    height: 350px;
    margin-right: auto;
    margin-left: auto;
  }

  

  .el-carousel__item:nth-child(2n) {
    background: black;
  }

  .el-carousel__item:nth-child(2n+1) {
    background: black;
  }

  .carousel_img {
    height: 100%;
    width: 100%;
    text-align: center;
  }
</style>