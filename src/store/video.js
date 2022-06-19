import { reqGetvideoLanguage } from '@/api/index'
const state = {
    language: [],

};
const mutations = {
    GETVIDEOLANGUAGE(state, language) {
        state.language = language;
    }
};
const actions = {
    async getVideoLanguage({ commit }) {
        let result = await reqGetvideoLanguage();
        if (result.code == 200) {
            commit("GETVIDEOLANGUAGE", result.data);
        }
    },

};
export default {
    state,
    mutations,
    actions
}