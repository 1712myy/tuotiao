<template>
  <div class="home">
          <!-- 布局 -->
      <el-container>
          <!-- 左右两侧 -->
          <!-- 导航栏 -->
          <el-aside >
                 <div class="nav" style="width:200px background:red">
                    <img src="../../assets/img/logo_admin.png" alt="">
                 </div>
                <el-menu class="nav_1"
                style="width:224px"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <!-- 一级路由 -->
               <el-menu-item >
                   <span slot="title">首页</span>
              </el-menu-item>
                 <!-- 二级路由 -->
          <el-submenu >
               <template slot="title">
                   <span>内容管理</span>
               </template>
           <el-menu-item-group>
                <el-menu-item >文章发布</el-menu-item>
                <el-menu-item >内容列表</el-menu-item>
                <el-menu-item >评论列表</el-menu-item>
                <el-menu-item >素材管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

         <el-submenu >
               <template slot="title">
                   <span>粉丝管理</span>
               </template>
           <el-menu-item-group>
                <el-menu-item >图文数据</el-menu-item>
                <el-menu-item >粉丝概况</el-menu-item>
                <el-menu-item >粉丝画图</el-menu-item>
                <el-menu-item >粉丝列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 一级路由 -->
          <el-menu-item >
                   <span slot="title">账户信息</span>
          </el-menu-item>

     </el-menu>
          </el-aside>
          <!-- 上下的里面的布局 -->
          <el-container>
              <el-header>
                 <hea-der></hea-der>
              </el-header>
              <el-main>容器</el-main>
          </el-container>
      </el-container>

  </div>
</template>

<script>
import header from '../../components/Home'
export default {
  components: {
    'hea-der': header
  }
}
</script>

<style lang='less'>

.nav{
  width: 223px;
  background:#545c64 ;
}

.nav_1{
  height: 1000vh;
}
</style>
