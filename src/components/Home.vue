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
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

      </el-col>
  </el-row>
  </div>

</template>

<script>
export default {

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
