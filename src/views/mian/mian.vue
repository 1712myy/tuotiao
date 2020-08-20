<template>
      <div class="article">
    <!-- 筛选数据 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>全部图文</span>
      </div>
      <el-form ref="form" label-width="80px" >
        <el-form-item label="文章状态">
          <el-radio-group v-model="filterForm.status">
            <el-radio :label="null">全部</el-radio>
            <el-radio label="0">草稿</el-radio>
            <el-radio label="1">待审核</el-radio>
            <el-radio label="2">审核通过</el-radio>
            <el-radio label="3">审核失败</el-radio>
            <el-radio label="4">已删除</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道列表">
          <el-select placeholder="请选择活动区域" v-model="filterForm.channel_id">

            <el-option label="所有列表" :value="null"></el-option>
            <el-option
              :label="channel.name"
              :value="channel.id"
              v-for="channel in channels" :key="channel.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间选择">
          <el-date-picker
            v-model="rangeDate"
            type="daterange"
            range-separator="至"
           begin-pubdate="开始日期"
           end-pubdate="结束日期"
            value-format="yyyy-MM-dd"
           >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="logadArticles(1)">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 文章列表 -->

    <el-card class="box-card">

    <div slot="header" class="clearfix">
        <span>共找到{{totalCount}}条符合条件的内容</span>
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
       <template slot-scope="scope">
        <el-tag
          :type=" articleStatus[scope.row.status].type"
        >
          {{articleStatus[scope.row.status].label}}
        <!-- <span v-show="scope.row.status === 0">草稿</span>
            <span v-show="scope.row.status === 1">待审核</span>
            <span v-show="scope.row.status === 2">审核通过</span>
            <span v-show="scope.row.status === 3">审核失败</span>
            <span v-show="scope.row.status === 4">已删除</span> -->

        </el-tag>

       </template>

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
         <template slot-scope="scope" >
             <el-button type="primary" icon="el-icon-edit" @click="$router.push('/indes/'+scope.row.id)"></el-button>
              <el-button type="primary" icon="el-icon-delete" @click="onDel(scope.row.id)"></el-button>
          </template>
      </el-table-column>

      </el-table>

    </template>

    </el-card>
    <el-pagination
        background
        layout="prev, pager, next"
        :total="totalCount"
       @current-change = 'onPageChange'

      >
    </el-pagination>
      </div>
</template>

<script>
export default {
  name: 'abc',
  data () {
    return {
      // 过滤数据的表单
      filterForm: {
        status: null,
        channel_id: null,
        begin_pubdate: '',
        end_pubdate: ''
      },

      articleStatus: [
        {
          value: 0,
          label: '草稿'
        },
        {
          value: 1,
          label: '待审核'
        },
        {
          value: 2,
          label: '审核通过'
        },
        {
          value: 3,
          label: '审核失败'
        },
        {
          value: 4,
          label: '已删除'
        }

      ],
      rangeDate: '',
      articles: [], // 文章列表
      totalCount: 0, // 默认页数
      loading: true,
      channels: [] // 频道列表
    }
  },
  created () {
    this.logadArticles()

    this.logadchangcles()
  },
  methods: {
    logadArticles (page = 1) {
      const token = window.localStorage.getItem('user-token')
      console.log(token)
      this.$axios({
        method: 'GET',
        url: '/articles',
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          page, // 页码
          per_page: 10, // 页数
          status: this.filterForm.status, // 文章状态
          channel_id: this.filterForm.channel_id, // 媒体频道
          begin_pubdate: this.rangeDate ? this.rangeDate[0] : null, // 开始的时间
          end_pubdate: this.rangeDate ? this.rangeDate[1] : null // 结束的日期

        }
      }).then(res => {
        console.log(res)
        this.articles = res.data.data.results
        // 更新总页
        this.totalCount = res.data.data.total_count
      }).catch(err => {
        console.log(err, '获取数据失败')
      })
    },
    onPageChange (page) {
      // 指定的总页数
      this.logadArticles(page)
    },

    logadchangcles () {
      this.$axios({
        methods: 'GET',
        url: '/channels'
      }).then(res => {
        console.log(res.data.data)
        this.channels = res.data.data.channels
      }).catch(err => {
        console.log(err, '获取数据失败')
      })
    },
    onDel (articleid) {
      this.$axios({
        methods: ' DELETE',
        url: `/articles/${articleid}`
        // headers: {
        //   Authorization: `Bearer${window.logadchangcles.getItem('user-token')}`
        // }
      }).then(res => {
        console.log('成功')
        this.logadArticles(1)
      }).catch(err => {
        console.log(err, '失败')
      })
    }
  }

}
</script>

<style>

</style>
