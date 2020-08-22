<template>
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>评论列表</span>
  </div>
 <template>
    <el-table
      :data="articles"
      style="width: 100%">
      <el-table-column
        prop="type"
        label="标题"
        width="300">
      </el-table-column>
      <el-table-column
        prop="total_comment_count"
        label="评论状态"

       >
      </el-table-column>
      <el-table-column
         prop="fans_comment_count"
         label="总评论数">
        </el-table-column>
      <el-table-column
        prop="address"
        label="粉丝品论次数">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作">
      </el-table-column>

    </el-table>
  </template>
</el-card>
</template>

<script>
export default {
  name: 'abc',
  data () {
    return {
      articles: {
        type: '', // 标题
        total_comment_count: '', // 评论状态
        fans_comment_count: ''
      }
    }
  }

}
</script>

<style>

</style>
