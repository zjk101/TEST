import Vue from 'vue';
import App from './App.vue';

//引用路由相关文件
import router from '@/router/index';

//引用仓库进行注册
import store from '@/store/index';

//引入element-ui插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//注册插件
Vue.use(ElementUI);

//引入mockserve.js------mock数据
import '@/mock/mockserve';

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')