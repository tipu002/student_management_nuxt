import axios from 'axios'

export const state = () => ({
  authUser: null
});

export const mutations = {
  SET_USER (state, user) {
    state.authUser = user
  }
};

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login ({ commit }, { username, password }) {
    try {
      const { data } = await axios.post(process.env.API_URL + '/login/token/', { username, password })
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout ({ commit }) {
    await axios.post(process.env.API_URL + '/logout');
    commit('SET_USER', null)
  }

};
