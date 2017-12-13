<template>
  <div id="app">
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="loginForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="vcode">
        <el-input v-model="loginForm.vcode"></el-input>
        <img :src="host+'/auth/user/user!vcode'">
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
      </el-form-item>
    </el-form>
   
  </div>
  
</template>

<script>

  export default {
    name: 'app',
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }        
      };
      var checkPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('密码不能为空'));
        }
      };
      var checkVcode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('验证码不能为空'));
        }
      };
      return {
        loginForm: {
          userName: '',
          pass: '',
          vcode: ''
        },
        rules: {
          userName: [
            { validator: checkName, trigger: 'blur' }
          ],
          pass: [
            { validator: checkPass, trigger: 'blur' }
          ],
          vcode: [
            { validator: checkVcode, trigger: 'blur' }
          ]
        },
        host: this.GLOBAL.host,
        message:''
      };
    },
    created() {
      // this.$http.jsonp(this.GLOBAL.host+"/auth/user/user!vcode").then(function(res){
      //     this.message = res.data;
      //     console.log(this.message)
      //   },function(err){
      //       this.message = err;
      // })
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
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
  

</style>
