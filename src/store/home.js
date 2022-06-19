import { reqGetTask, reqGetFixedPaper, reqGetVideoClassroom, reqGetRotation } from "@/api/index";
//hone模块的仓库
const state = {
    rotation: [],
    task: [],
    fixedPaper: [],
    videoclassroom: []
};
//mutations是唯一修改state的地方
const mutations = {
    GETROTATION(state, rotation) {
        state.rotation = rotation;
    },
    GETTASK(state, task) {
        state.task = task;
    },
    GETFIXEDPAPER(state, fixedPaper) {
        state.fixedPaper = fixedPaper;
    },
    GETVIDEOCLASSROOM(state, videoclassroom) {
        state.videoclassroom = videoclassroom;
    }
};
//actions 用户处理派发action的地方，可以书写异步语句、自己逻辑的地方
const actions = {
    async getRotation({ commit }) {
        let result = await reqGetRotation();
        if (result.code == 200) {
            commit("GETROTATION", result.data);
        }
    },
    async getTask({ commit }) {
        let result = await reqGetTask();
        if (result.code == 200) {
            commit("GETTASK", result.data);
        }
    },
    async getFixedPaper({ commit }) {
        let result = await reqGetFixedPaper();
        if (result.code == 200) {
            commit("GETFIXEDPAPER", result.data);
        }
    },
    async getVideoClassroom({ commit }) {
        let result = await reqGetVideoClassroom();
        if (result.code == 200) {
            commit("GETVIDEOCLASSROOM", result.data);
        }
    }
};
//计算属性
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}