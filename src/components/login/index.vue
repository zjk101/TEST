<template>
  <div id="main">
    <el-card class="box-card">
      <div class="logo">
        <el-avatar :src="require('@/assets/logo2.png')"></el-avatar>
      </div>
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
        ref="ruleForm"
        :rules="rules"
      >
        <el-form-item label="用户名">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="formLabelAlign.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </el-form-item>
        <div class="text-foot">
            还没有账号
            <router-link to="/register">注册</router-link>
        </div>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    
    return {
      labelPosition: "top",
      formLabelAlign: {
        name: "",
        pass: ""
      },
      rules: {
        
      }
    };
  },
  
  methods: {
   async submitForm() {
      const {name,pass}=this.formLabelAlign;
      if(name&&pass){
        try {
          await this.$store.dispatch("userLogin",{name,pass});
          this.$router.push('./home');
        } catch (error) {
          alert(error.message);
        }
      }      
    }
  },
  
};
</script>
<style lang="less" scoped>
#main {
  height: 100%;
  background-image: url("@/assets/logo3.png");
  position: relative;
  .box-card {
    position: absolute;
    overflow:visible;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 360px;
    padding: 40px 5px 5px;

    .el-button {
      width: 100%;
    }
  }
}
/deep/ .el-form--label-top .el-form-item__label {
  padding: 0px;
  color: #0081c6;
  line-height: 30px;
  font-weight: bold;
}
/deep/ .el-input__inner {
  background-color: rgba(0, 129, 198, 0.05);
  border: none;
}
.logo{
    position: absolute;
    left: 50%;
    transform: translate(-50%,-100%);  
    width: 100px;
    height: 100px;
}
.el-avatar{
    width: 100px;
    height: 100px;
    background: #fff;
    border: 1px solid rgba(201, 201, 201, 0.05);
    box-shadow: 5px 5px 10px rgba(201, 201, 201, 0.05);
    /deep/ img{
        padding: 10px;
        width: 70px;
        height: 60px;
    }
}
.text-foot{
    font-size: 14px;
    color: rgba(0,129,198,0.45);
    text-align: center;
    font-weight: bold;
    a{
        font-size: 14px;
        color: #0081c6;
    }
    a:hover{
        text-decoration: none;
    }
}
</style>