<template>
	<div id="app">
		<usernav></usernav>
		<div class="main">
			<div class="sidebar">
				<el-row class="tac">
				  <el-col >
				    <!-- <h5>默认颜色</h5> -->
				    <p class="ml20">账号: <span>{{username}}</span></p>
				    <p class="ml20">余额: <span>334</span></p>
				    <div class="ml20 about_money">
				    	<a href="">
				    		<i class="iconfont">&#xe602;</i>充值
				    	</a>
				    	<span></span>
				    	<a href="">
				    		<i class="iconfont">&#xe61e;</i>提现				    		
				    	</a>
				    </div>
				    <el-menu
				      default-active="2"
				      class="el-menu-vertical-demo"
				      @open="handleOpen"
				      @close="handleClose"
				      unique-opened="true"
				      active-text-color="black"
				      >
				      <el-submenu index="1">
				        <template slot="title">
				          <!-- <i class="el-icon-location"></i> -->
				          <span>投注记录</span>
				        </template>
				        <el-menu-item-group>
				          <el-menu-item index="1-1">
				          	<router-link to="page11">购彩查询</router-link>
				          </el-menu-item>
				          <el-menu-item index="1-2">
				          	<router-link to="page12">追号查询</router-link>
				          </el-menu-item>
				        </el-menu-item-group>
				      </el-submenu>
				      <el-submenu index="2">
				        <template slot="title">
				          <!-- <i class="el-icon-location"></i> -->
				          <span>报表管理</span>
				        </template>
				        <el-menu-item-group>
				          <el-menu-item index="2-1">
				          	<router-link to="page21">帐变报表</router-link>
				          </el-menu-item>
				          <el-menu-item index="2-2">
				          	<router-link to="page22">个人报表</router-link>
				          </el-menu-item>
				          <el-menu-item index="2-3">
				          	<router-link to="page23">团队报表</router-link>
				          </el-menu-item>
				          <el-menu-item index="2-4">
				          	<router-link to="page24">优惠活动详情</router-link>
				          </el-menu-item>
				        </el-menu-item-group>
				      </el-submenu>
				      <el-submenu index="3">
				        <template slot="title">
				          <!-- <i class="el-icon-location"></i> -->
				          <span>账户管理</span>
				        </template>
				        <el-menu-item-group>
				          <el-menu-item index="3-1">
				          	<router-link to="page31">个人总览</router-link>
				          </el-menu-item>
				          <el-menu-item index="3-2">
				          	<router-link to="page32">密码管理</router-link>
				          </el-menu-item>
				          <el-menu-item index="3-3">
				          	<router-link to="page33">银行卡管理</router-link>
				          </el-menu-item>
				          <el-menu-item index="3-4">
				          	<router-link to="page34">用户资料</router-link>
				          </el-menu-item>
				          <el-menu-item index="3-5">
				          	<router-link to="page35">彩种信息</router-link>
				          </el-menu-item>
				          <el-menu-item index="3-6">
				          	<router-link to="page36">彩种限额</router-link>
				          </el-menu-item>
				        </el-menu-item-group>
				      </el-submenu>
				      <el-submenu index="4">
				        <template slot="title">
				          <!-- <i class="el-icon-location"></i> -->
				          <span>代理管理</span>
				        </template>
				        <el-menu-item-group>
				          <el-menu-item index="4-1">
				          	<router-link to="page41">团队总览</router-link>
				          </el-menu-item>
				          <el-menu-item index="4-2">
				          	<router-link to="page42">用户列表</router-link>
				          </el-menu-item>
				          <el-menu-item index="4-3">
				          	<router-link to="page43">注册管理</router-link>
				          </el-menu-item>
				          <el-menu-item index="4-4">
				          	<router-link to="page44">推广注册</router-link>
				          </el-menu-item>
				        </el-menu-item-group>
				      </el-submenu>
				      <el-submenu index="5">
				        <template slot="title">
				          <!-- <i class="el-icon-location"></i> -->
				          <span>短信公告</span>
				        </template>
				        <el-menu-item-group>
				          <el-menu-item index="5-1">
				          	<router-link to="page51">站内短信</router-link>
				          </el-menu-item>
				          <el-menu-item index="5-2">
				          	<router-link to="page52">网站公告</router-link>
				          </el-menu-item>
				        </el-menu-item-group>
				      </el-submenu>
				    </el-menu>
				  </el-col>
				</el-row>
			</div>
			<div class="content">
				<page></page>
			</div>
			<el-dialog title="提示" width="15%" :visible.sync="dialogTableVisible2" show-close = "false" class="login_box">
	      <p>请先登录</p>
	      <button @click="toLogin()">确定</button>
	    </el-dialog>
		</div>
	</div>
</template>

<script>
	import Usernav from 'components/Usernav/Usernav'
	import page from 'components/User/Page.vue'
	export default {
    name: 'app',
    data() {
    	return{
    		username:'',
    		dialogTableVisible2: false
    	}
    	
    },
    components: {
      Usernav,
      page
    },
    created() {
      // if(!localStorage.getItem("username")){
      //   dialogTableVisible2 = true;
      // }
      this.username = localStorage.getItem("username");
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      toLogin(){
        window.location.href = "login.html";

      }
    }
  }
</script>

<style >
	.content {
		margin-right: 20px;
	}
	#app{
    background: #363636;
    width: 100%;
    height: 100%;
  }
	.main{
		display: flex;
	}
	.sidebar{
		flex: 2;
	}
	.content{
		flex: 10;
		padding: 10px;
	}
	.el-menu-item a{
		color: #000000;
	}
	.ml20{
		margin-left: 20px;
		color: #f0a109;
		border: 1px solid #c62133;
		padding: 3px;
		border-radius: 5px;
		margin-bottom: 10px;
	}
	.about_money{
		border: 0;
		padding-left: 0;
		display: flex;
	}
	.about_money span{
		flex: 1;
	}
	.about_money a{
		color: #f0a109;
		background: #c62133;
		flex: 1;
		text-align: center;
		border-radius: 5px;
		padding: 5px 10px;
	}
	.el-menu-vertical-demo {
		background: #c62133;
		border-color: #363636;
	}
	.el-menu-item-group {
		background: #363636;
	}
	.el-submenu__title > span {
		color: #fff;
	}
	.el-menu-vertical-demo .el-submenu {
		background: #c62133;
	}
	.el-menu-item > a {
		color: #fff;
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
</style>

