import { reqGetSubjectList, reqGetExam } from '@/api/index'
const state = {
    subjectlist: [],
    subjectlist2: [],
    exam: []
};
const mutations = {
    GETSUBJECTLIST(state, subjectlist) {
        state.subjectlist = subjectlist;
    },
    GETSUBJECTLIST2(state, subjectlist2) {
        state.subjectlist2 = subjectlist2;
    },
    GETEXAM(state, exam) {
        state.exam = exam;
    }
};
const actions = {
    async getSubjectList({ commit }) {
        let result = await reqGetSubjectList();
        if (result.data.code == 200) {
            commit("GETSUBJECTLIST", result.data.response);
            commit("GETSUBJECTLIST2", result.data.response2);
        }
    },
    async getExam({ commit }, data) {
        let result = await reqGetExam(data);
        if (result.data.code == 200) {
            commit("GETEXAM", result.data.response);
        }
    }
}
export default {
    state,
    mutations,
    actions
}