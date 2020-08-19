<template>
      <div class="article">
    <!-- 筛选数据 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>全部图文</span>
      </div>
      <el-form ref="form" label-width="80px">
        <el-form-item label="文章状态">
          <el-radio-group v-model="filterForm.status">
            <el-radio label="全部"></el-radio>
            <el-radio label="草稿"></el-radio>
            <el-radio label="待审核"></el-radio>
            <el-radio label="审核通过"></el-radio>
            <el-radio label="审核失败"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道列表">
          <el-select placeholder="请选择活动区域" v-model="filterForm.channel_id">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间选择">
          <el-date-picker
            v-model="rangeDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 文章列表 -->

    <el-card class="box-card">

    <div slot="header" class="clearfix">
        <span>共找到59806条符合条件的内容</span>
    </div>
    <template>

      <el-table

      :data="articles"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="封面"
        width="180">
          <template slot-scope="scope">
            <img style="width:50px" :src="scope.row.cover.images[0]" alt="">
          </template>
        </el-table-column>
        <el-table-column
        prop="title"
        label="标题"
        width="180">
      </el-table-column>

        <el-table-column
        prop="status"
        label="状态"
        >
      </el-table-column>
      <el-table-column
        prop="pubdate"
        label="发布日期"
        >
      </el-table-column>

      <el-table-column
         prop="address"
          label="操作"
         >
      </el-table-column>

      </el-table>

    </template>

    </el-card>
      </div>
</template>

<script>
export default {
  name: 'abc',
  data () {
    return {
      // 过滤数据的表单
      filterForm: {
        status: '',
        channel_id: '',
        begin_pubdate: '',
        end_pubdate: ''
      },
      rangeDate: '',
      articles: [] // 文章列表
    }
  },
  created () {
    this.logadArticles()
  },
  methods: {
    logadArticles () {
      // const token = window.localStorage.getItem('user-token')
      this.$axios({
        method: 'GET',
        url: '/articles',
        headers: {
          Authorization: `Beare ${window.localStorage.getItem('user-token')}`

        }

      }).then(res => {
        console.log(res.data.data)
        // this.articles = res.data.data.results
        // 更新总数
      }).catch(err => {
        console.log(err, '获取数据失败')
      })
    }

  }
}
</script>

<style>

</style>
