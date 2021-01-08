import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myProfile: {}
  },
  mutations: {
    SET_MY_PROFILE (state, payload) {
      state.myProfile = payload
    }
  },
  actions: {
    getMyProfile (context) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/users/my-profile`)
          .then((result) => {
            console.log(result)
            context.commit('SET_MY_PROFILE', result.data.result)
            resolve(result)
          }).catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    updateProfile (context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        axios.patch(`${process.env.VUE_APP_BASE_URL}/users`, payload)
          .then((result) => {
            console.log(result)
            resolve(result)
          }).catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    forgotPassword (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/auth/forgot-password`, payload)
          .then((result) => {
            resolve(result)
          }).catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    interceptorRequest () {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    interceptorResponse (context) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        if (error.response.status === 401) {
          if (error.response.data.err === 'Invalid Token') {
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            context.commit('REMOVE_ALL')
            this.$router.push('/login')
          } else if (error.response.data.err === 'Token Expired') {
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            context.commit('REMOVE_ALL')
            this.$router.push('/login')
          }
        }
        return Promise.reject(error)
      })
    }
  },
  getters: {
    setMyProfile (state) {
      return state.myProfile
    }
  },
  modules: {
  }
})
