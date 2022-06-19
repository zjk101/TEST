<template>
  <div class="main">
    <div class="content">
      <div class="conleft">
        <div class="block">
          <span>学科：</span>
          <el-select v-model="value" placeholder="请选择">
            <el-option label="语文" value="选项一"></el-option>
            <el-option label="数学" value="选项二"></el-option>
          </el-select>
        </div>
        <div class="block">
          <span>单选题：</span>
          <el-slider v-model="value2" :step="5" show-stops class="ra"></el-slider>
        </div>
        <div class="block">
          <span>多选题：</span>
          <el-slider v-model="value3" :step="5" show-stops class="ra"></el-slider>
        </div>
        <div class="block">
          <span>判断题：</span>
          <el-slider v-model="value4" :step="5" show-stops class="ra"></el-slider>
        </div>
        <div class="block">
          <span>难度：</span>
          <el-rate v-model="value5"></el-rate>
        </div>
        <el-button type="primary">生成试卷</el-button>
      </div>
      <div class="conright">
        <div class="el-card__header">智能训练记录</div>
        <el-table :data="showintelligence" style="width: 100%">
          <el-table-column prop="title" label="名称" width="400"></el-table-column>
          <el-table-column prop="name" label="学科" width="80"></el-table-column>
          <el-table-column prop="date" label="创建时间"></el-table-column>
          <el-table-column width="120">
            <el-button type="text">开始答题</el-button>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            layout="prev, pager, next"
            @current-change="changePageNum"
            :current-page="pageIndex"
            :page-size="pageSize"
            :total="intelligence.length"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import intelligence from "../../store/intelligence";
export default {
  data() {
    return {
      value: "",
      value2: 20,
      value3: 20,
      value4: 20,
      value5: 3,
      total: 0, //数据总条数
      pageIndex: 1, //当前页
      pageSize: 10, //每页显示数量
      allintelligence: [], //所有的数据
      showintelligence: [] //要显示的数据
    };
  },
  mounted() {
    this.$store.dispatch("reqIntelligence");
    setTimeout(()=>{
        this.getShowTableData();
    },500)
    
  },
  methods: {
    getShowTableData() {
      this.allintelligence = intelligence.state.intelligence;
      //  获取截取开始索引
      let begin = (this.pageIndex - 1) * this.pageSize;
      // 获取截取结束索引
      let end = this.pageIndex * this.pageSize;
      //  通过索引去截取，从而展示
      this.showintelligence = this.allintelligence.slice(begin, end);
    },
    changePageNum: function(val) {
      this.pageIndex = val;
      this.getShowTableData();
    }
  },
  computed: {
    ...mapState({
      intelligence: state => state.intelligence.intelligence
    })
  }
};
</script>
<style lang="less" scoped>
.main {
  background-color: #fafafa;
  padding: 50px 0px;

  .content {
    margin: 0 auto;
    width: 1319px;
    height: 930px;
    .conleft {
      float: left;
      width: 400px;
      border: 1px solid #fafafa;
      padding: 40px 30px;
      background-color: #fff;
      .block {
        width: 338px;
        height: 38px;
        margin-bottom: 22px;
        font-size: 14px;
        color: #606266;
        span {
          display: inline-block;
          width: 90px;
          height: 36px;
          padding-right: 12px;
          line-height: 36px;
          text-align: right;
        }
        .ra {
          display: inline-block;
          width: 236px;
          height: 22px;
        }
        .el-rate {
          display: inline-block;
        }
      }
      .el-button {
        display: block;
        padding: 10px 16px;
        margin: 0 auto;
      }
    }
    .conright {
      width: 850px;
      float: right;
      background-color: #fff;
      .el-card__header {
        font-size: 16px;
      }
      .el-table {
        padding: 20px;
      }
      .el-table::before {
        content: none;
      }
      .block {
        text-align: center;
        margin: 10px 0px;
      }
    }
  }
}
</style>