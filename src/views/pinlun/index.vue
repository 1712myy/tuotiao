<template>
  <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>评论列表</span>
  </div>
    <el-table
      :data="article"
      style="width: 100%">
      <el-table-column

        prop="title"
        label="标题"
       >
      </el-table-column>

      <el-table-column
        prop="total_comment_count"
        label="总论数"

        >
      </el-table-column>
     <el-table-column
        prop="fans_comment_count"
        label="粉丝评论数">
      </el-table-column

      >

      <el-table-column
        prop="comment_status"
        label="评论状态"
        width="200"
      >
         <template slot-scope="scope">
           <!-- 开关属性 绑定的数据是一个布尔值得真假 -->
             <el-switch
                v-model="scope.row.comment_status"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @change="changClick(scope.row)"
                >
             </el-switch>
         </template>

      </el-table-column>

       <el-table-column

        label="操作">
       <template >
          <el-link type="primary"  >修改</el-link>
          <el-link type="primary" >关闭</el-link>
       </template>

      </el-table-column>

    </el-table>
</el-card>
</template>

<script>
export default {
  name: 'abcd',
  data () {
    return {
      article: [] // 文章列表
    }
  },
  created () {
    this.chanAadd()
  },
  methods: {

    chanAadd () {
      this.$axios({
        method: 'GET',
        url: '/articles',
        params: {
          response_type: 'comment'
        }
      }).then(res => {
        console.log(res)
        this.article = res.data.data.results
      })
    },

    changClick (article) {
      const token = window.localStorage.getItem('user-token')
      this.$axios({
        method: 'PUT',
        url: '/comments/status',
        params: {
          article_id: article.id.toString()
        },
        headers: {
          Authorization: `Bearer ${token}`
        },

        data: {
          allow_comment: article.comment_status
        }
      }).then(res => {
        // console.log(res)
        this.$message({
          type: 'success',
          message: `${article.comment_status ? '开启' : '关闭'} 成功`
        })
      }).catch(err => {
        console.log(err)
        this.$message.error('操作失败')
      })
    }
  }
}

</script>

<style>

</style>
