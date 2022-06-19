//配置路由的文件
import Vue from 'vue';
import VueRouter from 'vue-router';

//引入路由
Vue.use(VueRouter);
//引入路由组件
import Home from '@/pages/Home';
import Paper from '@/pages/Paper';
import Video from '@/pages/video';
import Intelligence from '@/pages/Intelligence';
import Login from '@/components/login';
import Register from '@/components/register';

//配置跳转路由信息
export default new VueRouter({
    routes: [{
            name: 'login',
            path: '/login',
            component: Login,
            meta: { show: false }
        },
        {
            name: 'register',
            path: '/register',
            component: Register,
            meta: { show: false }
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
            meta: { show: true },
            beforeEnter(to, from, next) {
                if (localStorage.getItem("token")) {
                    next();
                } else {
                    next("/login");
                }
            }
        },
        {
            name: 'paper',
            path: '/fixedPaper',
            component: Paper,
            meta: { show: true }
        },
        {
            name: 'video',
            path: '/videoClassroom',
            component: Video,
            meta: { show: true }
        },
        {
            name: 'intelligence',
            path: '/intelligence',
            component: Intelligence,
            meta: { show: true }
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})