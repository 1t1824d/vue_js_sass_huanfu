import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bgcolor: "red",
    color: "#fff",
  },
  mutations: {
    reset1: state => {
      state.bgcolor = "red"
      state.color = "#fff"

    },
    reset2: state => {
      state.bgcolor = "green"
      state.color = "yellow"
    }
  }
})
