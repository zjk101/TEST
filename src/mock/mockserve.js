//引入mockjs模块
import Mock from 'mockjs';
//引入json数据,webpack默认对外暴露图片和json数据格式，所以在json文件里我们没有对外暴露但是可以引入
import task from './task.json';
import fixedpaper from './fixedPaper.json';
import videoclassroom from './videoClassroom.json';
import rotation from './rotation.json';
import subjectlist from './subjectList.json';
import exam from './exam.json';
import videolanguage from './videolanguage.json';
import intelligence from './intelligence.json';
import register from './register.json';
import login from './login.json';
//mock数据：第一个参数请求地址  第二个参数：请求数据
//首页轮播图数据
Mock.mock("/api/student/dashboard/rotation", { code: 200, data: rotation });
//首页任务中心数据
Mock.mock("/api/student/dashboard/task", { code: 200, data: task });
//首页试卷中心数据
Mock.mock("/api/student/dashboard/fixedpaper", { code: 200, data: fixedpaper });
//首页视频课堂数据
Mock.mock("/api/student/dashboard/videoclassromm", { code: 200, data: videoclassroom });

//学科列表数据
Mock.mock("/api/student/education/subject/list", { data: subjectlist });

//试卷中心页面数据
Mock.mock('/api/student/exam/paper/pageList', 'post', { data: exam });

//视频中心页面数据
Mock.mock('/api/student/video/language', { code: 200, data: videolanguage });
Mock.mock('/api/student/intelligence', { code: 200, data: intelligence });
Mock.mock('/api/student/user/register', { data: register });
Mock.mock('/api/user/login', { data: login });