<template>
  <el-header>
    <el-image
          class="logo"
      :src="require('@/assets/logo.png')"
      fit="cover"></el-image>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo tright"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1"><router-link class="router-link-active" to="/home">首页</router-link></el-menu-item>
      <el-menu-item index="2"><router-link class="router-link-active" to="/fixedPaper">试卷中心</router-link></el-menu-item>
      <el-menu-item index="3"><router-link class="router-link-active" to="/videoClassroom">视频课堂</router-link></el-menu-item>
      <el-menu-item index="4"><router-link class="router-link-active" to="/intelligence">智能训练</router-link></el-menu-item>
      
        <el-dropdown trigger="click">
          <el-image
          class="img"
      :src="require('@/assets/login.jpg')"
      fit="cover"></el-image>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>消息中心</el-dropdown-item>
            <el-dropdown-item @click.native="quit()">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </el-menu>
    <div class="line"></div>
  </el-header>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    setCurrentRoute(){
      if(this.$route.path=='/fixedPaper'){
        this.activeIndex='2';
      }
      else if(this.$route.path=='/videoClassroom'){
        this.activeIndex='3';
      }
      else if(this.$route.path=='/intelligence'){
        this.activeIndex='4';
      }
      else if(this.$route.path=='/record'){
        this.activeIndex='5';
      }
      else if(this.$route.path=='/mistakesCollection'){
        this.activeIndex='6';
      }
      else{
        this.activeIndex='1';
      }
    },
    quit(){
      localStorage.clear("token");
      this.$router.push('/login');
    }
  },
   created() {
    this.setCurrentRoute();
  },
  
};
</script>
<style scoped>
.tright {
  float: right;
  border-bottom:0px!important;
}
.logo{
  height: 50px;
  margin: 6px 0px 0px 15px;
}
.img{
width: 40px; 
height: 40px; 
border-radius:50%;
margin-right: 20px;
margin-top: 10px;
}
.router-link-active{
  display: inline-block;
text-align: center;
width: 100%;
  height: 100%;
}
.router-link-active:hover {
  text-decoration: none;
  
}
</style>