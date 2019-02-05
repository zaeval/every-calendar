import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const resourceHost = 'http://councils.tk/login'

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
      state.accessToken = data.token;
      localStorage.accessToken = data.token;
    },
    LOGOUT(state) {
      state.accessToken = null;
      localStorage.accessToken = null;
    }
  },
  actions: {
    LOGIN({
            commit
          }, {
            email,
            password
          }) {
      return axios.post(`${resourceHost}/login/`, {
        email,
        password
      })
        .then(({
                 data
               }) => {
          // LOGIN 변이 실행
          commit('LOGIN', data);
          console.log('login');

          axios.defaults.headers.common['Authorization'] = `Token ${localStorage.accessToken}`;
        })
    },
    LOGOUT({
             commit
           }) {
      axios.defaults.headers.common['Authorization'] = undefined
      commit('LOGOUT');
    },

  }
});
