import { createStore } from 'vuex'

const store = createStore({
  state: {
    isLoggedIn: false
  },
  mutations: {
    setLogin(state, payload) {
      state.isLoggedIn = payload
    }
  }
})
