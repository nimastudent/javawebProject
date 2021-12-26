<template>

  <body id="poster">
  <el-page-header @back="goBack" content="登录页面" style="color: white">
  </el-page-header>
  <div class="login-wrap">
  <el-form class="login-container"
           label-position="left" label-width="0px">
    <h2 class="login-title">用  户  登  录</h2>
    <br>
    <el-form-item style="color: white">
    用户名：
      <el-input type="text"
                  v-model="loginForm.username"
                  placeholder="请输入用户名"
                  style="width: 80%;text-align: center">
      <i slot="prefix" class="el-icon-user" style="color: white"></i>
    </el-input>
    </el-form-item>
    <el-form-item style="color: white">
      密码：
     <el-input type="password"
               v-model="loginForm.password"
               placeholder="请输入密码"
                  style="width: 80%;text-align: center">
      <i slot="prefix" class="el-icon-unlock" style="color: white"></i>
    </el-input>
    </el-form-item>
    <br>
    <el-form-item style="width: 100%" >
    <el-button type="primary"
               style="width: 40%;background: rgba(48,166,226,0.72);border: none"
               v-on:click="login">登 录</el-button>
    </el-form-item>
    <el-form-item style="text-align: right; width: 100%">
      <el-link @click="gotoRegister()" type="primary" style="color: white">没有注册？</el-link>
      <!--      增加跳转注册页面的功能-->
    </el-form-item>
  </el-form>
  </div>
  </body>
</template>

<script>
  import qs from "qs"
import axios from "axios"
  export default {
    name: "index",
    data(){
      return{
        loginForm:{
          username:'',
          password:''
        }
      }
    },
    methods:{
      goBack() {
        this.$router.go(-1)
      },
      gotoRegister(){
        this.$router.push({
          name: 'register'
        })
      },
      async login () {
        // this.$store.dispatch('login',this.loginForm)
        const {data:res} = await axios.post('http://47.97.207.96:8081/login',qs.stringify(this.loginForm),{
          withCredentials:true
        })
        
        // if(res.success){
        //   this.$message.success('登陆成功')
        //   window.sessionStorage.setItem('username',res.body.username)
        //   this.$store.commit('LOGIN',res.body.username)
        //   this.$router.push('index')
        // }

          // .then((successResponse)=>{                    //请求成功后执行函数
          //   if(successResponse.data.code === 200){
          //     this.$router.replace('/index')	//登录验证成功路由实现跳转
          //     this.$notify({
          //       title: '提示',
          //       message: '用户登录成功',
          //       duration: 3000
          //     });
          //   }else{
          //     this.$notify({
          //       title: '提示',
          //       message: '用户登录失败',
          //       duration: 3000
          //     });
          //   }
          // })
          // .catch(err=>{                   //请求错误后执行函数
          //   this.$notify({
          //     title: '提示',
          //     message: '用户访问错误',
          //     duration: 3000
          //   });
          //   console.log(err)
          // })
      }
    }
  }
</script>

<style >
  .el-input__inner{
    background: transparent;
  }
.login-container{
  border-radius: 15px;
  /*给元素边角设置圆角弧度*/
  background: padding-box;
  /*确定背景定位*/
  margin: 100px auto;
  /*所有外边距*/
  width: 350px;
  padding: 35px 35px 15px 35px;
  background:transparent;
  border: 1px solid #ffffff;
  box-shadow: 0 0 25px #ffffff;
  text-align: center;
}
.login-title {
  margin: 0px auto 40px auto;
  text-align: center;
  /*对齐方式*/
  color: #ffffff;
}
#poster {
  background:url("../assets/k.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body{
  margin: 0px;
}
</style>
