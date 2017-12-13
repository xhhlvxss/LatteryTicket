<template>
  <div id="app">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="vcode">
        <el-input v-model="loginForm.vcode" class="vcode_in"></el-input>
        <img :src="host+'/auth/user/user!vcode?'+random" class="vcode" @click= "changeRandom()">
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="submitForm('loginForm')">提交</el-button>
      </el-form-item>
    </el-form>
   <el-dialog title="提示" :visible.sync="dialogFormVisible">
      用户名或密码错误
    </el-dialog>

  </div>
  
</template>

<script>

  export default {
    name: 'app',
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else {
          callback();
        }        
      };
      var checkPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('密码不能为空'));
        }else {
          callback();
        }
      };
      var checkVcode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('验证码不能为空'));
        }else {
          callback();
        }
      };
      return {
        dialogFormVisible:false,
        loginForm: {
          username: '',
          password: '',
          vcode: ''
        },
        rules: {
          username: [
            { validator: checkName, trigger: 'blur' }
          ],
          password: [
            { validator: checkPass, trigger: 'blur' }
          ],
          vcode: [
            { validator: checkVcode, trigger: 'blur' }
          ]
        },
        host: this.GLOBAL.host,
        random:new Date()-0,
        message:''
      };
    },
    created() {
      // this.$http.jsonp(this.GLOBAL.host+"/auth/user/user!login",{
            //   params:loginForm
            // }).then(function(res){
            //     this.message = res.data;
            //     console.log(this.message)
            //   },function(err){
            //       this.message = err;
            // })
    },
    methods: {
      submitForm(formName) {
        var that = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.jsonp(this.GLOBAL.host+"/auth/user/user!login",{
              params: that.loginForm
            }).then(function(res){
                // this.message = res.data.success;
                if(res.data.error){
                  this.dialogFormVisible = true; 
                
                }else if(res.data.success){
                  window.location.href = "index.html";
                  localStorage.setItem("username",that.loginForm.username);
                  localStorage.setItem("password",that.loginForm.password);

                }
              },function(err){
                  this.message = err;
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      changeRandom(){
        this.random = new Date()-0;
      }
    }
  }
</script>

<style>

  #app{
    width: 100%;
    height: 100%;
    background: url(./images/01.jpg);
  }
  form{
    width: 30%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .vcode_in{
    width: 65%!important;
  }
  .vcode{
    width: 30%;
    height: 40px;
    cursor: pointer;
    vertical-align: -15px;
  }
  .el-form-item__label{
    color: #FFFFFF!important;
  }
  .el-dialog{
    width: 20%!important;
  }

</style>
