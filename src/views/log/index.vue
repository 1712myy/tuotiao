<template>
    <div class="login" >
        <!-- 组件卡片 -->
        <el-card class="login-card">
            <div class="itilt">
                <img src="../../assets/img/logo_index.png" alt="">
            </div>
           <!-- 表单组件 -->
           <el-form ref="forms" style="margin-top:20px" :model=" formEex" :rules=" rules">
               <el-form-item prop='sjh'>
                   <!-- 手机号 -->
                   <el-input v-model="formEex.sjh" ></el-input>
               </el-form-item>
               <el-form-item prop="yzm">
                    <el-input  v-model="formEex.yzm" style="width:300px"></el-input>
                    <el-button style="float:right">发送验证码</el-button>
               </el-form-item >
                <el-form-item  prop="tiaoyu" style="text-align:center" >
                    <el-checkbox  v-model="formEex.tiaoyu">我阅读并同意 <el-link type="primary"> 你的该协议条件</el-link></el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width:450px "  @click="formes">主要按钮</el-button>
                </el-form-item>
           </el-form>

        </el-card>

    </div>
</template>

<script>
export default {
  data () {
    return {
      formEex: {
        sjh: '',
        yzm: '',
        tiaoyu: ''

      },
      // 校正规则
      rules: {
        sjh: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[123479]\d{9}$/, message: '正确请输入手机号' }
        ],
        yam: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{{6}$/, message: '输入验证码' }
        ],
        tiaoyu: [
          {
            validator: function (rule, value, callback) {
              // rule 当前规则  value当前表单项的值   callback 回调函数
              if (value) {
                callback() // 正确 勾选了协议
              } else {
                callback(new Error('你对同意给协议'))
              }
            }
          }
        ]

      }
    }
  },
  methods: {
    formes () {
      //
      this.$refs.forms.validator((isok) => {
        if (isok) {
          this.$axios({
            url: '/authorizations',
            data: this.loginForm,
            method: 'POST'
          }).then(ser => {
            console.log(ser.data)
          })
        }
      })
    }
  }
}

</script>

<style lang='less' scoped>
    .login{
        background-image: url('../../assets/img/login_bg.jpg');
        background-size: cover;  //自定应以
        height: 100vh;
        display: flex;
        justify-content:center;
        align-items: center;
        .login-card{
             width: 500px;
             height: 450px;
             .itilt{
                 text-align: center;
             }
        }
    }
</style>
