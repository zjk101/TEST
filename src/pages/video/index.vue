<template>
  <div class="bg">
    <div class="main">
      <div class="testPaperType">
        <span>视频学科：</span>
        <router-link to="/videoClassroom">
          <span class="span" @click="btn(1)" :class="index==1?'span2':'span1'">语文</span>
          <span class="span" @click="btn(2)" :class="index==2?'span2':'span1'">数学</span>
        </router-link>
      </div>
      <div class="borderbottom"></div>
      <!-- 卡片 -->
      <el-card
        class="video"
        :body-style="{ padding: '0px' }"
        v-for="item in showvideo"
        :key="item.id"
      >
        <img :src="item.src" class="image" />
        <div style="padding: 14px;">
          <div class="video-hidden">{{item.title}}</div>
          <div class="video-border"></div>
          <div class="video-desc">学科：{{item.name}}</div>
          <div class="video-desc">试卷：{{item.number}}</div>
          <div class="bottom clearfix">
            <el-button type="text" class="button">开始答题</el-button>
          </div>
        </div>
      </el-card>
    </div>
    <!-- 分页 -->
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        @current-change="changePageNum"
        :current-page="pageIndex"
        :page-size="pageSize"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      index: 1,
      total: 0, //数据总条数
      pageIndex: 1, //当前页
      pageSize: 8, //每页显示数量
      allvideo: [], //所有的数据
      showvideo: [] //要显示的数据
    };
  },
  methods: {
    btn(e) {
      this.index = e;
      this.getShowTableData();
      
    },
    getShowTableData() {
      //总数据
      this.allvideo=this.$store.state.video.language[this.index-1]?this.$store.state.video.language[this.index-1].list:[];
      //总条数
      this.total=this.allvideo.length;
      let begin=(this.pageIndex-1)*this.pageSize;
      let end=this.pageIndex*this.pageSize;
      //显示的数据
      this.showvideo=this.allvideo.slice(begin,end);     
    },
    changePageNum:function(val){
      this.pageIndex = val;
      this.getShowTableData();
      //初始化页数，避免不同页面的页数混乱
      this.pageIndex=1;
    }
  },
  mounted() {
    this.$store.dispatch("getVideoLanguage");
    setTimeout(()=>{
        this.getShowTableData();
    },200)
  },
  computed: {
    ...mapState({
      language: state => state.video.language,
      math: state => state.video.math
    })
  }
};
</script>
<style lang="less" scoped>
a:hover {
  text-decoration: none;
}
.bg {
  background-color: #fafafa;
  min-height: 500px;
  display: grid;
}
.main {
  margin: 0px 80px 0px 100px;
  padding: 20px 0 0 0;
  height: 100%;

  .borderbottom {
    width: 100%;
    border-bottom: 1px solid #b8b7b7;
  }
}
.testPaperType {
  font-size: 16px;
  margin: 20px 0px;
  padding-left: 10px;
  .span1 {
    margin: 0 10px;
    padding: 2px 5px;
  }
  .span2 {
    margin: 0 10px;
    padding: 2px 5px;
    background-color: skyblue;
    border-radius: 5px;
    color: #fff;
  }
}
.video {
  width: 245px;
  padding: 20px 10px 0px 10px;
  float: left;
  margin: 30px 20px 0px 10px;
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
.block {
  text-align: center;
  margin: 20px 0px;
}
</style>