<template>
  <div class="bg">
    <div class="main">
      <div class="testPaperType">
        <span>试卷类型：</span>
        <router-link to="/fixedPaper" v-for="item in subjectList2" :key="item.id">
          <span
            class="span"
            @click="btn(item.id)"
            :class="index==item.id?'span2':'span1'"
          >{{item.name}}</span>
        </router-link>
      </div>
      <div class="testPaperType">
        <span>试卷学科：</span>
        <router-link to="/fixedPaper" v-for="item in subjectList" :key="item.id">
          <span
            class="span"
            @click="btn2(item.id)"
            :class="index2==item.id?'span2':'span1'"
          >{{item.name}}</span>
        </router-link>
      </div>
      <div class="borderbottom"></div>
      <!-- 卡片 -->
      <div class="pcard">
        <div class="paper-card-content" v-for="item in showlist" :key="item.id">
          <div class="font-hidden">{{item.name}}</div>
          <div class="font-desc">学科:{{item.subjectName}}</div>
          <div class="font-desc">题目数：{{item.questionCount}}</div>
          <div class="font-desc">试卷总分：{{item.score}}</div>
          <div class="font-desc">考试时长：5</div>
          <div class="font-desc">开始时间：{{item.createTime}}</div>
          <div class="font-desc">结束时间：7</div>
          <el-button type="text" class="button">开始答题</el-button>
        </div>
      </div>

      <div class="block">
        <el-pagination
          layout="prev, pager, next"
          @current-change="changePageNum"
          :current-page="pageIndex"
          :page-size="pageSize"
          :total="exam.total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      index: 0,
      index2: 0,
      data: [],
      pageIndex: 1, //当前页
      pageSize: 9, //每页显示数量
      alllist: [], //所有的数据
      showlist: [] //要显示的数据
    };
  },
  methods: {
    btn(e) {
      this.index = e;
      this.data["paperType"] = this.index;
      this.data["subjectId"] = this.index2 == 0 ? 10 : this.index2;
      this.$store.dispatch("getExam", this.data);
    },
    btn2(e) {
      this.index2 = e;
    },
    getShowTableData() {
      this.alllist = this.$store.state.exam.exam.list;
      //获取截取开始索引
      let begin = (this.pageIndex - 1) * this.pageSize;
      //获取截取结束索引
      let end = this.pageIndex * this.pageSize;
      //通过索引截取，从而展示
      this.showlist = this.alllist.slice(begin, end);
    },
    changePageNum: function(val) {
      this.pageIndex = val;
      this.getShowTableData();
    }
  },
  created() {
    this.btn(1);
    this.btn2(10);
  },
  mounted() {
    this.$store.dispatch("getSubjectList");
    setTimeout(() => {
      this.getShowTableData();
    }, 200);
  },
  computed: {
    ...mapState({
      subjectList: state => state.exam.subjectlist,
      subjectList2: state => state.exam.subjectlist2,
      exam: state => state.exam.exam
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
  height: 100%;
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
// 卡片

.paper-card-content {
  display: inline-block;

  width: 300px;
  height: 250px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  font-size: 14px;
  padding: 20px;
  margin: 10px;
  background-color: #fff;
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
.block {
  text-align: center;
}
</style>