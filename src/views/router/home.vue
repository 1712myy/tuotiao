<template>

    <div class="publish">
    <el-card>
           <div slot="header" class="clearfix">
          <span>文章发布</span>
      </div>

    <el-form ref="article" :model="article" label-width="80px">
    <el-form-item label="活动名称">
        <el-input v-model="article.title" ></el-input>
    </el-form-item>
        <!-- 富文本 -->
          <quill-editor
            ref="myQuillEditor"
            v-model="article.content"
          />
  <el-form-item label="内容">
        <el-input v-model="article.content"></el-input>
  </el-form-item>

  <el-form-item label="频道列表">
     <el-select v-model="article.channel_id" placeholder="列表内容">

        <el-option label="所有列表"  :value="null"></el-option>
        <el-option
             :label="channel.name"
              :value="channel.id"
              v-for="channel in channels" :key="channel.id"
        >

        </el-option>

    </el-select>
  </el-form-item >
    <el-form-item label="封面"   >
      <el-radio-group v-model="article.type" >

               <el-radio :label="1">单图</el-radio>
              <el-radio :label="3">三图</el-radio>
              <el-radio :label="0">自动</el-radio>
              <el-radio :label="-1">无图</el-radio>

      </el-radio-group>
         <template v-if="article.cover.type !=='-1'">
           <el-row>
              <el-col :span="6"
                v-for="item in article.type " :key="item">
                  <phot-imgs></phot-imgs>
              </el-col>
           </el-row>
         </template>
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
import Vue from 'vue'
import VueQuillEditor, { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
import phot from '../hpots/index'
Vue.use(VueQuillEditor /* { default global options } */)
export default {
  name: 'abc',

  components: {
    quillEditor,
    'phot-imgs': phot
  },
  data () {
    return {
      article: {
        title: '', // 文章标题
        content: '', // 文章内容
        cover: {
          type: 0, // 封面类型 -1:自动，0-无图，1-1张，3-3张
          images: [] // 图片，无图就是空数组即可

        },

        message: '',

        channel_id: ''

      },
      title: '',
      channel_id: '',
      content: '',

      channels: []
    }
  },
  created () {
    this.logadchangcles()
    //   添加和编辑使用的都是这个组件
    if (this.$route.params.id) {
      //  params  只有编辑的时候，初始化 ，有id 加载文章内容
      this.logadd()
    }
  },

  methods: {

    logadd () {
      this.$axios({
        method: 'GET',
        url: `/articles/${this.$route.params.id}`
      }).then(res => {
        console.log(res)
        this.article = res.data.data
      })
    },

    // 添加列表内容
    onAdd (draft) {
      this.$axios({
        method: 'POST',
        url: '/articles',
        data: this.article,
        params: {
          draft
        }

      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err, '数据失败')
      })
    },

    // 频道表
    logadchangcles () {
      this.$axios({
        method: 'GET',
        url: '/channels'
      }).then(res => {
      // console.log(res.data.data)
        this.channels = res.data.data.channels
      }).catch(err => {
        console.log(err, '获取数据失败')
      })
    }

  }

}
</script>

<style lang='less'>

</style>
