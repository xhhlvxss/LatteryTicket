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
          <div><i class="iconfont">&#xe610;</i>账号:<span>r4rwe</span></div>
        </li>
        <li>
          <div><i class="iconfont">&#xe684;</i>余额:<span>0</span></div>
        </li>
        <li><a href=""><i class="iconfont">&#xe602;</i>充值</a></li>
        <li><a href=""><i class="iconfont">&#xe61e;</i>提款</a></li>
        <li><a href=""><i class="iconfont">&#xe815;</i>登出</a></li>      
      </ul>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-submenu index="1">
          <template slot="title"><i class="iconfont">&#xe638;</i>彩票大厅</template>
          <!-- <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item> -->
        </el-submenu>
        <el-menu-item index="2"><a href="#"><i class="iconfont">&#xe617;</i>用户中心</a></el-menu-item>
        <el-menu-item index="3"><a href="#"><i class="iconfont">&#xe637;</i>优惠活动</a></el-menu-item>
        <el-menu-item index="4"><a href="#"><i class="iconfont">&#xe6eb;</i>平台公告</a></el-menu-item>
        <el-menu-item index="5"><a href="#"><i class="iconfont">&#xe64d;</i>彩种信息</a></el-menu-item>
        <el-menu-item index="6"><a href="#"><i class="iconfont">&#xe627;</i>手机下注</a></el-menu-item>
      </el-menu>
    </div>
    
    <div>
      <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content">
      <!-- <el-tabs type="border-card">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs> -->
      中间内容
    </div>
    <div class="footer">
      <div class="copyright">豪彩娱乐版权所有  Copyright © 2017 HaoCaiYuLe Co. Group All Rights Reserved</div>
    </div>
    <el-dialog title="平台公告" :visible.sync="dialogTableVisible">
      <el-tabs :tab-position="tabPosition" style="height: 200px;">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-dialog>
  </div>
  
</template>

<script>

  export default {
    name: 'app',
    data:function(){
      return{
        dialogTableVisible: false,
        tabPosition: 'left'
      }
    },
    method: {
       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      } 
    }
  }
</script>

<style>
  #app{
    background: url(./images/01.jpg);
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
  .content{
    height: 200px;
    color: #FFFFFF;
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

</style>
