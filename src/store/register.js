import { reqUserRegister, reqUserLogin } from "@/api/index"
const state = {
    token: '',
};
const mutations = {
    GETREQUSERLOGIN(state, token) {
        localStorage.setItem("token", token);
        state.token = token;
    }
};
const actions = {
    // 注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return "ok";
        } else {
            return "error";
        }
    },
    // 登录
    async userLogin({ commit }, token) {
        let result = await reqUserLogin(token);
        if (result.data.code == 200) {
            commit('GETREQUSERLOGIN', result.data.token);
        } else {
            return "error";
        }
    }
};
export default {
    state,
    mutations,
    actions
}