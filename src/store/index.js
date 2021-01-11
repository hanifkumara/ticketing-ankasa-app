import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myProfile: {},
    detailMyBooking: {},
    detailMyTicket: {},
    myBooking: []
  },
  mutations: {
    SET_MY_PROFILE (state, payload) {
      state.myProfile = payload
    },
    SET_MY_BOOKING (state, payload) {
      state.myBooking = payload
    },
    SET_DETAIL_BOOKING (state, payload) {
      state.detailMyBooking = payload
    },
    SET_MY_TICKET (state, payload) {
      state.detailMyTicket = payload
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
    getMyBooking (context) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/booking/my-booking`)
          .then((result) => {
            const resData = result.data.result
            context.commit('SET_MY_BOOKING', resData)
            resolve(result)
          }).catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    getDetailMyBooking (context, idBooking) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/booking/my-booking-detail/${idBooking}`)
          .then((result) => {
            const resData = result.data.result[0]
            const myTicket = result.data.result[0].ticket
            console.log(resData)
            console.log(myTicket)
            context.commit('SET_DETAIL_BOOKING', resData)
            context.commit('SET_MY_TICKET', myTicket)
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
    logout (context) {
      localStorage.clear()
      Swal.fire('Logout Success', 'see you again', 'success')
      router.push({ name: 'Login' })
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
        console.log(error.response)
        if (error.response.status === 401) {
          if (error.response.data.message.message === 'Invalid Token') {
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            context.commit('REMOVE_ALL')
            Swal.fire('Invalid Token', 'Please login again', 'error')
            router.push({ name: 'Login' })
          } else if (error.response.data.message.message === 'Token Expired') {
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            context.commit('REMOVE_ALL')
            Swal.fire('Token Expired', 'Please aogin again', 'error')
            router.push({ name: 'Login' })
          }
        }
        return Promise.reject(error)
      })
    }
  },
  getters: {
    setMyProfile (state) {
      return state.myProfile
    },
    setMyBooking (state) {
      const result = state.myBooking
      var parsedobj = JSON.parse(JSON.stringify(result))
      return parsedobj
    },
    setDetailMyBooking (state) {
      return state.detailMyBooking
    },
    setDetailMyTicket (state) {
      console.log(state.detailMyTicket)
      return state.detailMyTicket
    }
  },
  modules: {
  }
})
