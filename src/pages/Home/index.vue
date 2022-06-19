<template>
  <div>
    <!-- 轮播图 -->
    <header>
      <el-carousel :interval="4000" type="card" height="360px">
        <el-carousel-item v-for="item in rotation" :key="item.id">
          <el-image :src="item.src"></el-image>
        </el-carousel-item>
      </el-carousel>
    </header>
    <!-- 任务中心 -->
    <el-card class="box-card">
      <div class="clearfix mask">
        <span>任务中心</span>
      </div>
      <el-collapse accordion>
        <el-collapse-item v-for="taskvalue in task" :key="taskvalue.id" :title="taskvalue.title">
          <div style="margin-left:30px">{{taskvalue.paperItems[0].examPaperName}}</div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <!-- 试卷中心 -->
    <el-card class="box-card" style="padding-bottom:40px">
      <div slot="header" class="clearfix examination">
        <span>试卷中心</span>
      </div>
      <div class="paper-card-content" v-for="value in fixedPaper" :key="value.id">
        <div class="font-hidden">{{value.title}}</div>
        <div class="font-desc">学科:{{value.name}}</div>
        <div class="font-desc">题目数：{{value.subjectNumber}}</div>
        <div class="font-desc">试卷总分：{{value.totalScore}}</div>
        <div class="font-desc">考试时长：{{value.duration}}</div>
        <div class="font-desc">开始时间：{{value.limitStartTime}}</div>
        <div class="font-desc">结束时间：{{value.limitEndTime}}</div>
        <el-button type="text" class="button">开始答题</el-button>
      </div>
    </el-card>
    <!-- 视频课堂 -->
    <el-card class="box-card" style="padding-bottom:40px">
      <div slot="header" class="clearfix examination">
        <span>视频课堂</span>
      </div>
      <el-card
        class="video"
        :body-style="{ padding: '0px' }"
        v-for="value in videoClassroom"
        :key="value.id"
      >
        <img :src="value.src" class="image" />
        <div style="padding: 14px;">
          <div class="video-hidden">{{value.title}}</div>
          <div class="video-border"></div>
          <div class="video-desc">学科：{{value.name}}</div>
          <div class="video-desc">试卷：{{value.number}}</div>
          <div class="bottom clearfix">
            <el-button type="text" class="button">开始答题</el-button>
          </div>
        </div>
      </el-card>
    </el-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("getRotation");
    this.$store.dispatch("getTask");
    this.$store.dispatch("getFixedPaper");
    this.$store.dispatch("getVideoClassroom");
  },
  computed: {
    ...mapState({
      rotation:state=>state.home.rotation,
      task: state => state.home.task,
      fixedPaper: state => state.home.fixedPaper,
      videoClassroom: state => state.home.videoclassroom
    })
  }
};
</script>
<style scoped lang="less">
//轮播图
header {
  background-image: url("@/assets/carousel.png");
  height: 400px;
  width: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

//任务中心

.text {
  font-size: 18px;
}

.item {
  margin-bottom: 18px;
}
.clearfix {
  font-size: 22px;
  height: 25px;
  padding-left: 10px;
  margin-bottom: 20px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
// 试卷中心
.box-card {
  width: 1319px;
  margin: 50px auto;
}
.mask {
  border-left: 10px solid rgb(54, 81, 212);
}
.examination {
  border-left: 10px solid #2ce8b4;
}
.paper-card-content {
  float: left;
  width: 300px;
  height: 250px;
  border: 1px solid #9b9b9b;
  border-radius: 5px;
  font-size: 14px;
  padding: 20px;
  margin: 10px;
  .font-hidden {
    margin: 15px 0px;
  }
  .font-desc {
    font-size: 14px;
    color: #9b9b9b;
    margin: 10px 0px;
  }
  button {
    float: right;
  }
}
//视频课堂
.video {
  width: 245px;
  padding: 20px 10px 0px 10px;
  float: left;
  margin-right: 30px;
  .video-hidden {
    font-size: 14px;
    margin: 10px 0px;
  }
  .video-border {
    border-top: 1px solid #9b9b9b;
    height: 2px;
  }
  .video-desc {
    font-size: 14px;
    color: #9b9b9b;
    margin: 10px 0px;
  }
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>