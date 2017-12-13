<template>
  <div id="app">
    <div class="top">
      <div class="top_left">
        当前在线: <span>122</span>人
      </div>
      <div class="top_right">
        <a href=""><i class="el-icon-service"></i>联系客服</a>
        <a href=""><i class="el-icon-question"></i>忘记密码</a>
        <a href=""><i class="el-icon-message"></i></a>
      </div>
    </div>
    <div class="header">
      <ul class="header_top">
        <li><img src="./images/logo.png"></li>
        <li>
          <div><i class="iconfont">&#xe610;</i>账号:<span>{{username}}</span></div>
        </li>
        <li>
          <div><i class="iconfont">&#xe684;</i>余额:<span>0</span></div>
        </li>
        <li><a href=""><i class="iconfont">&#xe602;</i>充值</a></li>
        <li><a href=""><i class="iconfont">&#xe61e;</i>提款</a></li>
        <li @click="quit()"><a href="javascript:;"><i class="iconfont">&#xe815;</i>登出</a></li>      
      </ul>
      <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <!-- <el-submenu index="1">
          <template slot="title"><i class="iconfont">&#xe638;</i>彩票大厅</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu> -->
        <el-menu-item index="1"><a href="lottery.html"><i class="iconfont">&#xe638;</i>彩票大厅</a></el-menu-item>       
        <el-menu-item index="2"><a href="user.html"><i class="iconfont">&#xe617;</i>用户中心</a></el-menu-item>
        <el-menu-item index="3"><a href="#"><i class="iconfont">&#xe637;</i>优惠活动</a></el-menu-item>
        <el-menu-item index="4"><a href="#"><i class="iconfont">&#xe6eb;</i>平台公告</a></el-menu-item>
        <el-menu-item index="5"><a href="#"><i class="iconfont">&#xe64d;</i>彩种信息</a></el-menu-item>
        <el-menu-item index="6"><a href="#"><i class="iconfont">&#xe627;</i>手机下注</a></el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <ul>
        <li>
          <div class="small_img"><img src="./images/01.jpg"></div>
          <div class="activity">
            <span class="activity_name">用户活动</span>
            <button class="more" @click="show_activity=!show_activity">更多信息</button>
          </div>
          <div class="activity_detail" v-show="show_activity">
            <img src="./images/01.jpg">
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="copyright">豪彩娱乐版权所有  Copyright © 2017 HaoCaiYuLe Co. Group All Rights Reserved</div>
    </div>
    <el-dialog title="提示" width="15%" :visible.sync="dialogTableVisible2" show-close = "false" class="login_box">
      <p>请先登录</p>
      <button @click="toLogin()">确定</button>
    </el-dialog>
  </div>
  
</template>

<script>

  export default {
    name: 'app',
    data() {
      return{
        dialogTableVisible: false,
        dialogTableVisible2: false,
        show_activity: false,
        tabPosition: 'left',
        username:''
      }
    },
    created() {
      // if(!localStorage.getItem("username")){
      //   dialogTableVisible2 = true;
      // }
      this.username = localStorage.getItem("username");
    },
    methods: {
      quit(){
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        window.location.href = "login.html";

      },
      toLogin(){
        window.location.href = "login.html";

      }
    }
  }
</script>

<style>
  #app{
    background: url(./images/01.jpg);
    width: 100%;
    height: 100%;
  }
  .top{
    background: url(./images/top_bg.png);
    display: flex;
    height: 50px;
    line-height: 50px
  }
  .top_left{
    flex: 1;
    padding-left: 120px;
    color: #FFFFFF
  }
  .top_right{
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding-right: 120px;
  }
  .top_right a{
    margin-right: 20px
  }
  .top_right a i{
    margin-right: 10px
  }
  .header_top{
    display: flex;
    justify-content: center;
    padding-right: 150px;
    height: 110px;
    /*line-height: 110px*/
  }
  .header_top li i{
    margin: 0 5px;
    font-weight: bold;
  }
  .header_top li:nth-child(1){
    flex: 3;
  }
  .header_top li:nth-child(1) img{
    vertical-align: -10px;
  }
  .header_top li:nth-child(2),.header_top li:nth-child(3){
    flex: 2;
    color: #FFFFFF;
  }
  .header_top li:nth-child(2) div,.header_top li:nth-child(3) div{
    margin-top: 50px;
    width: 200px;
    height: 30px;
    line-height: 30px;
    border: 2px solid #f81d35;
    border-radius: 5px;
  }
  .header_top li:nth-child(2) i,.header_top li:nth-child(3) i{
    margin: 0 5px;
    font-weight: bold;
  }
  .header_top li:nth-child(2) span,.header_top li:nth-child(3) span{
    color: #f0a109;
    margin-left: 5px;
  }
  .header_top li:nth-child(4),.header_top li:nth-child(5),.header_top li:nth-child(6){
    width: 80px;
    height: 30px;
    line-height: 30px;
    margin-top: 50px;
    margin-right: 10px;
    background: #f81d35;
    border: 2px solid #f81d35;
    border-radius: 5px;
  }
  .el-menu{
    margin: 20px auto!important;
    width: 80%;
    background-color: transparent!important;
    color: #FFFFFF!important;
  }
  .el-menu--horizontal{
    border-bottom: solid 2px #f81d35!important;
  }
  .el-menu li{
    width: 16.6%;
  }
  .el-menu li:hover{
    background-color: transparent!important;
    color: #f81d35!important;
  }
  .el-menu li:hover>a>i{
    color: #f81d35!important;
  }
  .el-menu a i{
    color: #FFFFFF;
    font-weight: bold;
    margin-right: 5px;
  }
  
  .el-menu--horizontal .el-submenu .el-submenu__title:hover{
    background-color: transparent!important;
    color: #f81d35!important;

  }
  .el-menu--horizontal .el-submenu .el-submenu__title:hover>i{
    /*background-color: transparent!important;*/
    color: #f81d35!important;
    
  }
  .el-submenu__title i{
    color: #FFFFFF!important;
    font-weight: bold;
    margin-right: 5px;

  }
  .el-submenu__title,.el-menu-item{
    color: #FFFFFF!important;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item{
    background: url(./images/01.jpg);
    background-size: 100% 100%;
  }
  
  .copyright{
    color: #FFFFFF;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .el-dialog__header{
    background: url(./images/top_bg.png);
  }
  .el-dialog__header .el-dialog__title{
    color: #FFFFFF;
  }
  .el-dialog__headerbtn .el-dialog__close{
    color: #FFFFFF!important;
  }
  .login_box .el-dialog__headerbtn{
    display: none!important;
  }
  .login_box p{
    text-align: center;
  }
  .login_box button{
    color: #fff;
    background-color: #eb9e05;
    border-color: #eb9e05;
    cursor: pointer;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    margin: 0 auto;
    display: block;
  }
  /*活动内容*/
  .content{
    width: 70%;
    margin: 0 auto;
    border: 1px solid #071217;
    background: #071217;
    border-radius: 5px;
    padding: 0px 40px;
  }
  .small_img img{
    width: 100%;
    height: 200px
  }
  .activity{
    overflow: hidden;
    margin: 20px 0;
  }
  .activity_name{
    color: #FFFFFF;
    float: left;
  }
  .more{
    background: #F2F6FC;
    float: right;
    cursor: pointer;
  }
  .activity_detail img{
    width: 100%;
    height: auto;
  }
</style>
