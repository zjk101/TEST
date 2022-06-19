import { reqGetIntelligence } from '@/api/index'
const state = {
    intelligence: [],
};
const mutations = {
    GETINTELLIGENCE(state, intelligence) {
        state.intelligence = intelligence;
    }
};
const actions = {
    async reqIntelligence({ commit }) {
        let result = await reqGetIntelligence();
        if (result.code == 200) {
            commit('GETINTELLIGENCE', result.data);
        }
    }
};
export default {
    state,
    mutations,
    actions
}