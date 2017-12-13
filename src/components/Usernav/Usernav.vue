<template>
  <div class="user_header">
    <div class="logo">
      <img src="./logo.png">
    </div>
    
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#c62133"
      text-color="#fff">
      <!-- <el-submenu index="1">
        <template slot="title"><a href="" target="_blank">购票大厅</a></template>
        <div class="play_list">
          <div class="official">
            <h3>官方玩法</h3>
            <div>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
            </div>
          </div>
          <div class="credit">
            <h3>信用玩法</h3>
            <div>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
            </div>
          </div>
        </div>
        
        
      </el-submenu> -->
      <el-menu-item index="1"><a href="lottery.html" target="_blank">购票大厅</a></el-menu-item>
      <el-menu-item index="2"><a href="index.html" target="_blank">返回大厅</a></el-menu-item>
      <el-menu-item index="3"><a href="" target="_blank">联系客服</a></el-menu-item>
      <el-menu-item index="4"><a href="" target="_blank">规则说明</a></el-menu-item>
      <el-menu-item index="5"><a href="" target="_blank">游戏帮助</a></el-menu-item>
      <el-menu-item index="6" @click = "quit()"><a href="javascript:;" target="_blank">登出账号</a></el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: 'usernav',
  data() {
      return {
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      quit(){
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        window.location.href = "login.html";

      },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-menu.el-menu-demo {
    padding-right: 20px;
  }
  .user_header{
    display: flex;
  }
  .user_header .logo{
    flex: 2
  }
  .user_header .el-menu{
    flex: 10;
    display: flex;
    justify-content: flex-end;
  }
  .play_list{
    display: flex;
  }
  .play_list .official{
    flex: 1;
  }
  .play_list .credit{
    flex: 1;
  }
  .el-menu{
    background-color: transparent!important;
    border-bottom: 0
  }
  .el-submenu {
    margin: 6px;
  }
  .el-submenu > .el-submenu__title {
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
  }
  .el-menu--horizontal .el-submenu .el-submenu__title {
    height: 40px;
    line-height: 40px;
    border-radius: 5px!important;
  }
  .el-menu--horizontal > .el-menu-item {
    margin: 6px;
    margin-top: 15px;
    background: #fff;
    border-radius: 5px;
    height: 40px;
    line-height: 40px
  }

</style>