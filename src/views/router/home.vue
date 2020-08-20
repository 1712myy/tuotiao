<template>
    <div class="publish">
      <el-card>
          <el-form ref="article" :model="article" label-width="80px">
    <el-form-item label="活动名称">
        <el-input v-model="article.title"></el-input>
    </el-form-item>
  <el-form-item label="内容">
        <el-input v-model="article.content"></el-input>
  </el-form-item>
      <!-- 富文本 -->

  <el-form-item label="频道列表">
     <el-select v-model="article.channel_id" placeholder="列表内容">

        <el-option label="所有列表"  :value="null"></el-option>
        <el-option
          :label="channel.name"
          :value="channel.id"
          v-for="channel in channels" :key="channel.id"
        ></el-option>

    </el-select>
  </el-form-item>

  <el-form-item>
    <el-button type="primary"  @click="onAdd(false)">发布</el-button>
    <el-button  @click="onchange(true)">存入文档</el-button>
  </el-form-item>
</el-form>
      </el-card>
    </div>
</template>

<script >
export default {
  data () {
    return {
      article: {
        title: '', // 文章标题
        content: '', // 文章内容
        cover: {
          type: 0, // 封面类型 -1:自动，0-无图，1-1张，3-3张
          images: [] // 图片，无图就是空数组即可
        },
        channel_id: ''
      },
      channels: []
    }
  },
  created () {
    this.logadchangcles()
  },
  methods: {
    logadchangcles () {
      this.$axios({
        methods: 'GET',
        url: '/channels'

      }).then(res => {
        // console.log(res.data.data)
        this.channels = res.data.data.channels
      }).catch(err => {
        console.log(err, '获取数据失败')
      })
    },
    onAdd (draft) {
      this.$axios({
        methods: 'POST',
        url: '/articles',
        headers: {
          Authorization: `Bearer${localStorage.getItem('user-token')}`
        },
        // jQurey 参数
        prams: {
          draft
        },
        data: this.article
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err, '请求失败')
      })
    }

  }

}
</script>

<style lang='less'>

</style>
