import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const resourceHost = '/restful'

export default new Vuex.Store({
  state: {
    accessToken: null
  },
  getters: {},
  mutations: {
    LOGIN(state,
          data
    ) {
      // 스토어에 액세스 토큰 저장
      state.etsid = data.etsid;
      localStorage.etsid = data.etsid;
    },
    LOGOUT(state) {
      state.etsid = null;
      localStorage.etsid = null;
    }
  },
  actions: {
    LOGIN({
            commit
          }, {
            id,
            password
          }) {
      return axios.post(`${resourceHost}/login/`, {
        id,
        password
      })
        .then(({
                 data
               }) => {
          // LOGIN 변이 실행
          commit('LOGIN', data);

          axios.defaults.headers.common['etsid'] = `${localStorage.etsid}`;
        })
    },
    LOGOUT({
             commit
           }) {
      axios.defaults.headers.common['etsid'] = undefined
      commit('LOGOUT');
    },

  }
});
