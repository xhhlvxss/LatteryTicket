<template>
  <div class="user_header">
    <div class="logo"></div>
    
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title"><a href="https://www.ele.me" target="_blank">购票大厅</a></template>
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
        
        
      </el-submenu>
      <el-menu-item index="2"><a href="https://www.ele.me" target="_blank">返回大厅</a></el-menu-item>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">联系客服</a></el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">规则说明</a></el-menu-item>
      <el-menu-item index="5"><a href="https://www.ele.me" target="_blank">游戏帮助</a></el-menu-item>
      <el-menu-item index="6"><a href="https://www.ele.me" target="_blank">登出账号</a></el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  name: 'usernav',
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>