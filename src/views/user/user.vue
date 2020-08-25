<template>
    <div>
        账户信息
        <el-form ref="form" :model="user" label-width="80px">
           <el-form-item label="用户头像">
           <!-- 默认的方式method: post ATCH
               自定义上传图片，默认的是post 请求
               http-request 他是自定义上组件 一个事件
            -->
            <el-upload
               http-Request="onPhoto"
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false">
                <img width="60"  :src='user.photo' class="avatar">

           </el-upload>
        </el-form-item>
          <el-form-item label="用户昵称">
              <el-input v-model="user.name"></el-input>
          </el-form-item>
      <el-form-item label="个人介绍">
           <el-input type="textarea" v-model="user.intro"></el-input>
      </el-form-item>
         <el-form-item label="用户邮箱">
             <el-input v-model="user.email"></el-input>
        </el-form-item>
          <el-form-item label="手机号">
             <el-input  disabled v-model="user.mobile"></el-input>
        </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存修改</el-button>
      </el-form-item>
    </el-form>
    </div>
</template>

<script>
export default {
  name: 'qq',

  message: '',
  data () {
    return {
      user: {
        id: '',
        name: '',
        intro: '',
        email: '',
        photo: '',
        mobile: ''
      }
    }
  },
  created () {
    this.onSubmit()
  },
  methods: {
    onSubmit () {
      this.$axios({
        method: 'GET',
        url: '/user/profile',
        data: {
          name: this.user.name,
          intro: this.user.intro,
          email: this.user.email
        }
      }).then(res => {
        // console.log(res)
        this.user = res.data.data
        this.$message({
          type: 'success',
          message: '修改成功'
        })
      }).catch(err => {
        console.log(err, '获取失败')
      })
    },

    //  照片（头像）上传
    // 经过简单测试 回调函数中参数会收到一个参数，有上传相关的对象file
    onPhoto (flixe) {
      const fd = new FormData()
      fd.append('photo', flixe.flixe)

      this.$axios({
        method: 'PATCH',
        url: '/user/photo',
        data: fd
      }).then(res => {
        // console.log(res.data)
        this.user = res.data.data.photo
      }).catch(err => {
        console.log(err, '失败')
      })
    }

  }

}

</script>

<style>

</style>
