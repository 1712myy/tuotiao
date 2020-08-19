<template>
  <div>
  <el-row>
      <el-col :span="12" class="text">
         <i class="el-icon-s-unfold"></i>
        <span>山西天狐云科技有限公司</span>

      </el-col>
      <el-col :span="12" class="text_1">
            <el-tooltip   style="width:300px"  class="item" effect="dark" content="搜索" placement="top">
           <el-input placeholder="请输入内容"></el-input>
          </el-tooltip>
           <el-tooltip class="item" effect="dark" content="消息" placement="top">
           <span>消息</span>
          </el-tooltip>

                  <img src="../assets/img/avatar.jpg" alt="">

          <!-- 下拉菜单 -->
          <el-dropdown trigger='click'>

            <span>
              水若寒宇
            </span>
            <el-dropdown-menu>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>git地址</el-dropdown-item>
                 <!-- native 原生js的修饰符 -->
              <el-dropdown-item @click.native="loginto">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

      </el-col>
  </el-row>
  </div>

</template>

<script>
export default {
  methods: {
    loginto () {
      console.log(122)
      this.$confirm('你确定要退出吗', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 确认删除
        // 删除
        window.localStorage.removeItem('user-token')
        // 返回页面
        this.$router.push('/log')
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '退出失败'
        })
      })
    }
  }
}
</script>

<style  lang="less">
  .text{

    display: flex;
    align-content: center;
   i{
     font-size: 25px;
   }
  }
  .text_1{
      display: flex;
      justify-content: center;

      float: left;
      img{
        border-radius: 50%;
      }
  }

</style>
