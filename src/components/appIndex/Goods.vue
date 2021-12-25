<template>
  <div  >
     <div class="all">
       <div   class="one" v-for="item in goods"
     :key="item.id"> 
        <div>
           <img :src="item.piceture" alt="商品已下架" >
        </div>
       
        <div :src="goods.name" class="name">{{item.name}}</div>
        <div :src="goods.price"  class="price">￥{{item.price}}</div>
        <div :src="goods.introduce"  class="introduce">{{item.introduce}}</div>

     </div>
     </div>
     
     <div class="bottom">
       <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pagesize"
        >
      </el-pagination>
     </div>
     
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Goods',
    components:{axios},

    data () {
      return {
        goods:[],
        currentPage: 1,
        pagesize: 6,
        activeName:"-1"
      }
    },
    mounted: function () {
      this.localgoods()

    },
    
    methods: {
       async localgoods () {
        // var _this = this
          
        //    this.$axios.get('http://47.97.207.96:8081/login/index/goods?typename=服装').then(resp => {
        //   if (resp && resp.data.code === 200) {
        //     this.goods = resp.data.body
     
        //    }
        //   })  

        const {data:res} = await axios({
          method:'get',
          url:'http://47.97.207.96:8081/login/index/goods?typename=服装'
        })
       
        console.log(res)
        if(res.success){
          res.body.forEach(item => {
          this.goods.push(item)
          });
        }

        },
 
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage
      }
     
    }
  }
</script>
<style >
.all{
  display: flex;
  
}
.one{
  width: 150px;
  height: 200px;
  margin-left: 30px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  border:3px rgb(240, 240, 240) solid;

}
 
  .introduce{
    width: 125px;
    overflow: hidden ;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    cursor: pointer;
    font-size: 8px;
    margin: auto;
  }
  .price{
    width: 125px;
    font-weight: 900;
    font-size: 15px;
    color: brown;
    margin: auto;
    
}
  .one img {
    width: 90px;
    height: 100px;
    margin: 0 auto;
  }

  .name {
    width:125px;
    
    font-size: 18px;
    font-weight: 800;
    color: black;
    margin: auto;
  }
.bottom{
  width: 850px;
  border:3px rgb(240, 240, 240) solid;
  margin-top: 150px;
}

</style>
