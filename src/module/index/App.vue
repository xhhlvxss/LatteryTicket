<template>
  <div id="app">
    <div class="top">
      <div class="top_left">
        当前在线: <span>122</span>人
      </div>
      <div class="top_right">
        <a href="">联系客服</a>
        <a href="">忘记密码</a>
        <a href=""></a>
      </div>
    </div>
    <div class="header">
      <ul class="header_top">
        <li>logo</li>
        <li>账号:<span>r4rwe</span></li>
        <li>余额:<span>0</span></li>
        <li><a href="">充值</a></li>
        <li><a href="">提款</a></li>
        <li><a href="">登出</a></li>      
      </ul>

    </div>
    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-tabs :tab-position="tabPosition" style="height: 200px;">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-dialog>
    <div>
      <el-carousel :interval="4000" type="card" height="500px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    
  </div>
  
</template>

<script>

  export default {
    name: 'app',
    data:function(){
      return{
        dialogTableVisible: true,
        tabPosition: 'left'
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
    height: 50px
  }
  .top_left{
    flex: 1;
  }
  .top_right{
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  .header_top{
    display: flex;
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

</style>
