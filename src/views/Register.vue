<template>
  <div class="page-register">
    <body id="poster">
    <el-page-header @back="goBack" content="注册页面" style="color: white">
    </el-page-header>
    <article class="header" style=" min-width: 980px;
    color: #666;">

      <header style="padding: 10px;width: 980px;margin: 0 auto">

      <span class="login">
        <a herf="/login" style="float: right">
          <em class="bold" style="color: white;font-style: normal">已有帐号？</em>
        <el-button @click="gotoLogin()" style="background: rgba(255,255,255,0.72);border: none;align-items: center">登陆</el-button>
      </a>
      </span>

      </header>

    </article>

    <el-form class="login-container"
             label-position="left"
             label-width="0px">
      <h2 class="title">用 户 注 册</h2>

      <el-steps :active="active" finish-status="success" align-center>

        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>

      </el-steps>
      <section>
        
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="100px"
          class="demo-ruleForm"
          autocomplete="off"
        >
          <div v-if="active==0">
            <el-form-item prop="textarea" >
              <el-input
                :value="ruleForm.textarea"
                type="textarea"
                :rows="10"
                :readonly="true" style="width: 30%" >
              </el-input>
            </el-form-item>
            <el-form-item prop="agreed">
              <el-checkbox v-model="ruleForm.agreed">同意注册协议</el-checkbox>
            </el-form-item></div>
          <div v-if="active==1">
            <el-form-item label="用户名" prop="username">
              <el-input type="text"
                        placeholder="请输入用户名"
                        v-model="ruleForm.username"
                        style="width: 100%"
                        class="user"
                        maxlenngth="10"
                        show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="telephone">
              <el-input placeholder="请输入电话"
                        v-model="ruleForm.telephone"
                        style="width: 100%">

              </el-input>
            </el-form-item>
            <el-form-item label="地址" prop="telephone">
              <el-input placeholder="请输入地址"
                        v-model="ruleForm.address"
                        style="width: 100%">

              </el-input>
            </el-form-item>
<!--            <el-form-item label="验证码" prop="code">-->

<!--              <el-input-->
<!--                v-model="ruleForm.code"-->
<!--                auto-complete="off"-->
<!--                placeholder="验证码"-->
<!--                style="width: 40%;"-->
<!--              >-->
<!--              </el-input>-->
<!--              <div class="code"-->
<!--                   style="width: 40%;display: inline-block;height: 38px;">-->
<!--                <img :src="this.codeImg" alt="" @click="getCode"-->
<!--                     style="  cursor: pointer;vertical-align: middle;"/>-->
<!--              </div>-->
<!--            </el-form-item>-->
            <el-form-item label="密码" prop="pwd">
              <el-input type="password"
                        placeholder="请输入密码"
                        v-model="ruleForm.password"
                        autocomplete="off"
                        style="width: 100%;"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="cpwd">
              <el-input type="password"
                        placeholder="确认密码"
                        v-model="ruleForm.cpwd"
                        autocomplete="off"></el-input>
            </el-form-item>
          </div>
        </el-form>
      </section>
      <div class="footer">
        <el-button v-if="active>0"
                   type="primary"
                   icon="el-icon-arrow-left"
                   @click="prev">上一步</el-button>
        <el-button v-if="active<step-1"
                   type="primary"
                   icon="el-icon-arrow-right"
                   @click="next">下一步</el-button>
        <el-button v-if="active==step-1"
                   type="primary"
                   @click="register">同意以下协议并注册</el-button>
        <div class="error">{{ error }}</div>
      </div>
    </el-form>
    </body>
  </div>
</template>

<script>

  export default {
    name: "register",
    data(){
      return{
        step: 2,
        active: 0,
        statusMsg: '',
        error: '',
        codeImg:'',
        ruleForm: {
          textarea: '请仔细阅读以下协议' ,
          agreed: false,
          username: '',
          telephone:'',
          address:'',
          // code:'',
          pwd: '',
          cpwd: ''

        },
        rules: {
          agreed: [{
            validator: (rule, value, callback) => {
              console.log('value:' + value)
              if (value !== true) {
                callback(new Error('请确认同意注册协议'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }],
          username:[{
            required:true,
            type:'string',
            message:'请输入用户名',
            trigger:'blur'
          }],
          telephone:[{
            required:true,
            message:'请输入电话',
            trigger:'blur'
          }],
          address:[{
            required:true,
            trigger:'blur'
          }],
          // code:[{
          //   required:true,
          //   trigger:'blur'
          // }],
          password: [{
            required: true,
            trigger: 'blur'
          }],
          cpwd: [{
            required: true,
            message: '确认密码',
            trigger: 'blur'
          }, {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请再次输入密码'))
              } else if (value !== this.ruleForm.password) {
                callback(new Error('两次输入密码不一致'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }]
        }
      }
    },
    layout:'blank',
    // mounted() {
    //   this.getCode()
    // },
    methods:{
      sendMsg: function() {
        const self = this
        let namePass
        let telephonePass
        if (self.timerid) {
          return false
        }
        this.$refs['ruleForm'].validateField('name', (valid) => {
          namePass = valid
        })
        self.statusMsg = ''
        if (namePass) {
          return false
        }
        this.$refs['ruleForm'].validateField('telephone', (valid) => {
          telephonePass = valid
        })
      },
      next: function() {
        if (this.active=== 0 ) {
          this.$refs['ruleForm'].validateField('agreed', (valid) => {
            if (valid === '') {
              this.active++
            }
          })
        }
      },
      prev: function() {
        if (--this.active < 0) this.active = 0
      },


      register: function() {
        this.$refs.ruleForm.validate( async (valid) => {
          if (valid) {
            const res =await this.$axios.post(
              "http://47.97.207.96:8081/registry/submit",
              JSON.stringify({
                username: this.ruleForm.username,
                telephone: this.ruleForm.telephone,
                address: this.ruleForm.address,
                password: this.ruleForm.password,
              }),
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )

            if(res.data.success){
              this.$message.success('注册成功')
              setTimeout(() => {
                this.$router.replace({ path: "/login" });
              }, 2000);
            }

          }


        });
        // this.$refs.ruleForm.validate((valid) => {
        //   if (valid) {
        //     this.$axios.post('http://47.97.207.96:8081/registry/submit',this.$qs.stringify({
        //         username: this.ruleForm.username,
        //         telephone:this.ruleForm.telephone,
        //         address:this.ruleForm.address,
        //         // code:this.ruleForm.code,
        //         password: this.ruleForm.password,
        //       })),
        //
        //     setTimeout(()=> {
        //       this.$router.replace({path: '/login'});
        //     }, 2000)
        //   }
        // })
      },
      goBack() {
        this.$router.push({
          name: 'sindex'
        })
      },
      gotoLogin(){
        this.$router.push('/login');
      },
      // getCode(){
      //   this.$axios.get('http://47.97.207.96:8081/registry',{responseType:'blob'}).then((response)=>{
      //     // console.log(response)
      //     this.codeImg=window.URL.createObjectURL(response.data)
      //     console.log(this.codeImg)
      //   })
      // }


    }
  }

</script>

<style >
  .el-input__inner{
    background: transparent;
  }

  body{
    margin: 0px;
  }

  #poster{
    background:url("../assets/k.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;

  }

  .login-container{
    margin: 0px auto;
    background: transparent;

  }
  .title {
    margin: 30px auto 40px auto;
    align: center;
    /*对齐方式*/
    color: #ffffff;
  }
  a {
    color: #000000;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
  }
  .section{
    margin: 0 auto 30px;
    padding-top: 30px;
    width: 980px;
    min-height: 300px;
    padding-right: 550px;
    box-sizing: border-box;

  }
  .footer{
    text-align: center;
  }
</style>
