<template>
 <el-card class="card-carousel">
   <el-carousel  class="push" :interval="4000" arrow="always">
     <el-carousel-item v-for="item in imgList" :key="item.id" >
         <img :src="item.img1.img" alt="" class="carousel_img">
         <img :src="item.img2.img" alt="" class="carousel_img">
         <img :src="item.img3.img" alt="" class="carousel_img">
      </el-carousel-item>   
        
     
   </el-carousel>
  </el-card>
           
  

</template>

<script>
export default {
     name: 'Carousel',
    data: function () {
        return{
          name:{
            id:{}
          },
      imgList:[
        {
          id:1,
          img1:{
          img:require('../../assets/img/carousel/10.jpg'),
         },
          img2:{
          img:require('../../assets/img/carousel/5.jpg'),
         },
          img3:{
          img:require('../../assets/img/carousel/11.jpg'),
         }
        },
        {
          id:2,
          img1: {
          id: 2,
          img:require('../../assets/img/carousel/7.jpg'),
        },
        img2:{ id: 3,
          img:require('../../assets/img/carousel/8.jpg'),
        },
        img3: {
          id: 8,
          img:require('../../assets/img/carousel/6.jpg'),
        },
        },
        {
          id:3,
          img1: {
          id: 5,
          img:require('../../assets/img/carousel/4.jpg'),
        },
          img2:{
          id: 6,
          img:require('../../assets/img/carousel/9.jpg'),
        },
          img3:{
          id: 9,
          img:require('../../assets/img/carousel/12.jpg'),
        }

        }
      ],
      itemms: [
       
        
         
       
        ],
      itemmms: [
       
        ]

        }
    
    }
  }
</script>
<style  scoped>
 .card-carousel {
    /*margin: 0 auto;*/
    
    width: 220px;

    display: flex;
    flex-direction: column;
  }

  

  .el-carousel__item:nth-child(2n) {
    background: rgb(244, 244, 244);
  }

  .el-carousel__item:nth-child(2n+1) {
    background: rgb(244, 244, 244);
  }

  .carousel_img {
    height: 100px;
    width: 80%;
    text-align: center;
    margin-top: 10px;
    box-shadow:3px grey;
 
  }
 

 
</style>