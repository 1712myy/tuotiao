<template>
  <div class="upload-image">
    <div class="preview" @click="onUpladShow">
      <img  v-if="prevImages" :src="prevImages" class="avatar">
      <i  v-else   class="el-icon-plus avatar-uploader-icon"></i>
    </div>
    <!--
      visible 控制对话框的显示和隐藏
     -->
    <el-dialog
      title="请选择文章封面图片"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
        <el-tabs v-model="activeName" >
          <el-tab-pane label="素材库"  name="first">
          <el-radio-group  v-model="activeimgs">
              <el-radio  label="all" >全部</el-radio>
              <el-radio  label="collte">收藏</el-radio>
          </el-radio-group>
            <el-row :gutter="20">
               <el-col :span="6"
                 :class="{
                       'item-images':index===activeindex
                   }"

                  v-for="(item,index) in images " :key="item.id"
                  @click.native="activeindex = index"
                  >
                   <img height="100" :src="item.url">
               </el-col>
           </el-row>
          </el-tab-pane>
          <el-tab-pane label="上传库" name="second">上传库</el-tab-pane>
        </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onfons">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'abc',
  components: {},
  props: {},
  data () {
    return {
      centerDialogVisible: false,
      activeName: 'first', // 摸认选素材库
      activeimgs: 'all',
      images: [],
      activeindex: null, // 激活图片样式
      prevImages: ''
    }
  },
  computed: {},
  watch: {
  },
  created () {},
  methods: {
    onUpladShow () {
      this.loadImages() // 加载的数据

      this.centerDialogVisible = true // 显示弹出
    },
    loadImages () {
      this.$axios({
        method: 'GET',
        url: '/user/images',
        params: {

          collte: this.activeimgs === 'collte' // 是否获取收藏图片
        }
      }).then(res => {
        console.log(res)
        this.images = res.data.data.results
      }).catch(err => {
        console.log(err)
      })
    },
    onfons () {
      const images = this.images[this.activeindex]
      //   当里面有图片 指向里面的图片

      if (images) {
        // 将选中的图片的路径 赋值给prevImages
        this.prevImages = images.url
      }
      this.centerDialogVisible = false
    }

  }
}

</script>

<style scoped>
.item-images{
   border: 1px solid peru;
}
.upload-image {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.upload-image .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 200px;
  height: 300px;
  line-height: 150px;
  text-align: center;
}

.avatar {
  width: 300px;
  height:150px;
  display: block;
}
</style>
