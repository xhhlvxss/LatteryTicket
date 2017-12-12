<template>
	<div id="app">
		<usernav></usernav>
		<div class="main">
			<div class="sidebar">
				<el-row class="tac">
				  <el-col >
				    <!-- <h5>默认颜色</h5> -->
				    <p class="ml20">账号: <span>3899324</span></p>
				    <p class="ml20">余额: <span>334</span></p>
				    <div class="ml20 about_money">
				    	<a href="">
				    		<img src="">充值
				    	</a>
				    	<a href="">
				    		<img src="">提现				    		
				    	</a>

				    	
				    </div>
				    <el-menu
				      default-active="2"
				      class="el-menu-vertical-demo"
				      @open="handleOpen"
				      @close="handleClose"
				      unique-opened="true"
				      >
				      <el-submenu index="1">
				        <template slot="title">
				          <i class="el-icon-location"></i>
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
				          <i class="el-icon-location"></i>
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
				          <i class="el-icon-location"></i>
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
				          <i class="el-icon-location"></i>
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
				          <i class="el-icon-location"></i>
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
				<!-- <template> -->
					<!-- <router-view></router-view> -->
				<!-- </template> -->
				<page></page>
			</div>
		</div>
	</div>
</template>

<script>
	import Usernav from 'components/Usernav/Usernav'
	import page from 'components/Page.vue'
	export default {
    name: 'app',
    components: {
      Usernav,
      page
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

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
	}
	.about_money a{
		color: #000000;
	}
</style>

