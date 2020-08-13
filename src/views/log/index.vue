<template>
    <div class="login" >
        <!-- 组件卡片 -->
        <el-card class="login-card">
            <div class="itilt">
                <img src="../../assets/img/logo_index.png" alt="">
            </div>
           <!-- 表单组件 -->
           <el-form style="margin-top:20px">
               <el-form-item>
                   <el-input></el-input>
               </el-form-item>
               <el-form-item >
                    <el-input style="width:300px"></el-input>
                    <el-button style="float:right">发送验证码</el-button>
               </el-form-item>
                <el-form-item  style="text-align:center">
                    <el-checkbox >我阅读并同意 <el-link type="primary"> 你的该协议条件</el-link></el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width:450px ">主要按钮</el-button>
                </el-form-item>
           </el-form>

        </el-card>

    </div>
</template>

<script>
export default {

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
