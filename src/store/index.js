//引入Vuex--这是大仓库
import Vuex from "vuex";
//引入Vue
import Vue from "vue";
//使用插件
Vue.use(Vuex);

//引入home模块的仓库
import home from "./home"
//引入exam模块仓库
import exam from "./exam"
import video from "./video"
import intelligence from "./intelligence"
import register from "./register"

//需要暴露Vuex.Store类的实例，这样外部才可以使用
export default new Vuex.Store({
    //把小仓库合并成大仓库
    modules: {
        home,
        exam,
        video,
        intelligence,
        register
    }
})