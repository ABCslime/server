import AuthService from '../services/auth.service';





export const auth = {
  namespaced: true,
  state: {
    status: null,
    user: null,
  },
  actions: {



    login({ commit }, user) {
      return AuthService.login(user).then(
        user => {

          commit('loginSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        response => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    initializeState: (state, payload) => {
      state.status = payload.status;
      state.muser = payload.muser;
      state.short_muser = payload.short_muser;
    },

    loginSuccess(state, user) {
      state.status.admin = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.admin = false;
      state.user = null;
    },
    logout(state) {
      state.status.admin = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.admin = false;
    },
    registerFailure(state) {
      state.status.admin = false;
    }

  }

};
