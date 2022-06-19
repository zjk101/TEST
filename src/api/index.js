//统一管理项目接口的模块
import mockRequests from "./mockAjax";

//首页轮播图接口
export const reqGetRotation = () => mockRequests.get(`student/dashboard/rotation`);

//首页任务中心的接口
export const reqGetTask = () => mockRequests.get(`/student/dashboard/task`);

//首页试卷中心的接口
export const reqGetFixedPaper = () => mockRequests.get(`/student/dashboard/fixedpaper`);

//首页视频课堂接口
export const reqGetVideoClassroom = () => mockRequests.get(`/student/dashboard/videoclassromm`);

//学科列表接口
export const reqGetSubjectList = () => mockRequests.get(`/student/education/subject/list`);
//试卷中心页面接口
export const reqGetExam = () => mockRequests.post(`/student/exam/paper/pageList`);
//视频课堂页面接口
export const reqGetvideoLanguage = () => mockRequests.get(`student/video/language`);
export const reqGetIntelligence = () => mockRequests.get(`student/intelligence`);

export const reqUserRegister = (data) => mockRequests.post(`/student/user/register`, data);
export const reqUserLogin = (data) => mockRequests.post(`/user/login`, data);