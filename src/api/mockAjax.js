//对axios进行二次封装
import axios from 'axios';

let requests = axios.create({
    //基础路径
    baseURL: "/api",
    //请求不能超过5s
    timeout: 5000,
});

//请求拦截器------在项目中发送请求（请求没有发送出去）可以做一些事情
requests.interceptors.request.use((config) => {
    return config;
})

//响应拦截器------当服务器手动请求之后，做出响应（响应成功）会执行的
requests.interceptors.response.use((res) => {
    return res.data;
}, (err) => {
    alert("服务器响应数据失败");
})

//最终需要对外暴露
export default requests;