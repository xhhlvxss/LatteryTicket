<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>用户中心</el-breadcrumb-item>
      <el-breadcrumb-item>投注记录</el-breadcrumb-item>
      <el-breadcrumb-item>购彩查询</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="searchBox">
      <div class="block">
        <div class="d_i">
          <span>起止时间：</span>
          <el-date-picker
            v-model="value"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </div>

        <div class="d_i ml5">
          <span>用户名：</span>
          <el-input class="input-search" v-model="searchCondition.userName" placeholder="请输入姓名"></el-input>
        </div>
        <div class="d_i ml5">
          <el-checkbox v-model="searchCondition.checked">包含下级</el-checkbox>
        </div>
      </div>
      <div class="block mt8">
        <div class="d_i">
          <span>彩种:</span>
          <el-select v-model="searchCondition.ticketId" clearable filterable placeholder="请选择">
            <el-option
              v-for="item in starLists"
              :key="item.id"
              :label="item.name"
              :value="item.name">
            </el-option>
          </el-select>
        </div>

        <div class="d_i ml5">
          <span>玩法:</span>
          <el-select v-model="searchCondition.playId" clearable filterable placeholder="请选择">
            <el-option
              v-for="item in starLists"
              :key="item.id"
              :label="item.name"
              :value="item.name">
            </el-option>
          </el-select>
        </div>
        <div class="d_i ml5">
          <span>中奖状态:</span>
          <el-select v-model="searchCondition.prizeState" clearable filterable placeholder="请选择">
            <el-option
              v-for="item in starLists"
              :key="item.id"
              :label="item.name"
              :value="item.name">
            </el-option>
          </el-select>
        </div>
        <div class="d_i ml5">
          <button @click="runSearch" type="button" class="el-button el-button--primary"><i class="el-icon-search"></i><span>筛选</span></button>
        </div>
        
      </div>
    </div>

    <!-- 表格 -->
    <div>
      <el-table
        :data="tableData"
        height="250"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="注单编号">
        </el-table-column>
        <el-table-column
          prop="name"
          label="投注时间">
        </el-table-column>
        <el-table-column
          prop="address"
          label="用户">
        </el-table-column>
        <el-table-column
          prop="date"
          label="彩种">
        </el-table-column>
        <el-table-column
          prop="name"
          label="玩法">
        </el-table-column>
        <el-table-column
          prop="address"
          label="投注内容">
        </el-table-column>
        <el-table-column
          prop="date"
          label="投注期号">
        </el-table-column>
        <el-table-column
          prop="name"
          label="投注金额">
        </el-table-column>
        <el-table-column
          prop="address"
          label="投注返点">
        </el-table-column>
        <el-table-column
          prop="date"
          label="奖金">
        </el-table-column>
        <el-table-column
          prop="name"
          label="开奖号码">
        </el-table-column>
        <el-table-column
          prop="address"
          label="状态">
        </el-table-column>
      </el-table>
    </div>
        

    <div class="block" style="text-align: center;padding-top: 20px;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="5"
        layout="prev, pager, next, jumper"
        :total="1000">
      </el-pagination>
    </div>
  </div>
  
</template>
<script>
// import Fecha from 'fecha'

  export default {

    data: function () {
      return {
        value:'',       
        currentPage: 1,
          totalPage: 50,
          message:'',
          starLists: [
            {
              id:1,
              name:"全部"

            },
            {
              id:2,
              name:"山东"

            },
            {
              id:3,
              name:"重庆"

            },
            {
              id:4,
              name:"武汉"

            },
            {
              id:5,
              name:"厦门"

            }

          ],
          searchCondition: {checked: true},
          tableData: [{
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市'
          }, {
            date: '2016-05-08',
            name: '王小虎',
            address: '上海市'
          }, {
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市'
          }, {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市'
          }],
          pickerOptions: {
            shortcuts: [{
              text: '最近一周',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近一个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              }
            }]
          }

      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
        this.runSearch()
      },
      runSearch(){
        

        // this.value[0]=moment(this.value[0]).format("YYYY-MM-DD")
        // console.log(this.value)
        // console.log(fecha.format(new Date(2015, 10, 20), 'dddd MMMM Do, YYYY'));
        this.searchCondition.startTime = this.value[0]||new Date();
        this.searchCondition.endTime = this.value[1]||new Date();
        this.searchCondition.currentPage = this.currentPage;
        this.searchCondition.pageSize = 5;
        console.log(this.searchCondition);
        this.$http.jsonp(this.GLOBAL.host+"/auth/user/user!new",{
                params : searchCondition
            }).then(function(res){
          this.message = res.data;
          console.log(this.message)
        },function(err){
            this.message = err;
        })
      }
    },
    mounted(){
        
      },
    created() {
      // let _params = this.$route.params || [],
      //     _currentDay = moment().format('YYYY-MM-DD'),
      //     startTime = _params.startTime || _currentDay,
      //     endTime = _params.endTime || _currentDay;

    }
  }
    
  

  // window.hasNeedReload = true;
</script>

<style>
  .el-breadcrumb{
    margin: 10px 0 20px
  }
 .searchBox{font-size: 12px;}
 .el-table{
  font-size: 12px;
 }
  .red {
    color: #dd4b39;
  }
  .green {
    color: #43bf61;
  }
  .d_i {
    display: inline-block;
  }
  .mt8 {
    margin-top: 8px;
  }
  .w330 {
    width: 330px;
  }
  .mb0 {
    margin-bottom: 0;
  }
  .ml5{margin-left: 5px;}
  .floar_r {
    float: right;
  }
  .input-search {
    display: inline-block;
    width: 220px;
  }
  .searchBox {
    padding: 20px 12px;
    margin-bottom: 15px;
    border-radius: 6px;
    background: #ccc;
  }
  @media screen and (max-width: 374px) {
    .input-search {
      width: 180px;
    }
  }
  .el-table .info-row{
    background:#c9e5f5;
  }
  .el-table .positive-row{
    background:#e2f0e4;
  }
  .demo-table .name-wrapper{
    display:inline-block;
  }
  .demo-table .demo-table-expand label{
    color:#99a9bf;
  }
  .demo-table .demo-table-expand .el-form-item{
    margin-right:0;
    margin-bottom:0;
    width:33%;
  }
</style>
