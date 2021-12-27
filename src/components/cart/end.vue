.<template>
  <div class="contiane">
      <div class="imgcontianr">
      <img src="../../assets/duihao.png" alt="">
	<div class="div11"></div>

      </div>

    <div>付款成功</div>
    <div class="btn-class" >
    <el-button type="text">点击查看订单</el-button>

    </div>
  
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.$store.commit('CARTLAST')
    }
}
</script>

<style>
.contiane{
    margin: 0 50px;
}
.imgcontianr{
    
    width: 100px;
    height: 100px;
    margin: 0 auto;
    position: relative;
    }

el-button{
    width: 100px;
    margin: 0 auto;

}
.imgcontianr img{
    width: 100px;
    height: 100px;
    }
.btn-class{
    display:flex; 
    justify-content: center;
}
.div11{
    position: absolute;
    top: 0;
    width: 100px;
    height: 100px;
    background-color: white;

    animation: myfirst1 3s;
    animation-iteration-count:3;
    animation-fill-mode:forwards;
    /* animation: myfirst 5s;
-moz-animation: myfirst 3s;  
-webkit-animation: myfirst 3s;  
-o-animation: myfirst 3s;top: 0;background:#fff;left:0; */
}
@keyframes myfirst1
{
0%   {left: 0;
}

100% {left:100px;
}
}

@-moz-keyframes myfirst1 /* Firefox */
{
0%   {left: 0;
    background-color: black;
}

100% {left:100px;
    background-color: yellow;
}
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */
{
0%   {left: 0;}

100% {left:100px;}
}

@-o-keyframes myfirst /* Opera */
{
0%   {left: 0;}

100% {left:100px;}
}
</style>