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
    myBooking: [],
    tickets: [
      {
        id: 1,
        images: 'https://logos-download.com/wp-content/uploads/2016/05/Lion_Air_logo.png',
        name_maskapai: 'lion_air',
        city_departure: 'jakarta',
        country_departure: 'IDN',
        city_arrived: 'seol',
        country_arrived: 'KOR',
        date_departure: '2021-01-29',
        time_departure: '19:28:55',
        date_arrived: '2021-02-22',
        time_arrived: '22:28:55',
        date_return: '2021-04-22',
        time_return: '02:35:25',
        ticket_type: 'one_way',
        price: 1500000,
        child_person: 2,
        adult_person: 4,
        transit: 'direct',
        class: 'economy'
      },
      {
        id: 2,
        images: 'https://i.pinimg.com/originals/2e/f6/e2/2ef6e2cc6b19f94dfd22c9b61e1d16de.png',
        name_maskapai: 'garuda',
        city_departure: 'jakarta',
        country_departure: 'IDN',
        city_arrived: 'seol',
        country_arrived: 'KOR',
        date_departure: '2021-01-29',
        time_departure: '19:28:55',
        date_arrived: '2021-02-22',
        time_arrived: '22:28:55',
        date_return: '2021-04-22',
        time_return: '02:35:25',
        ticket_type: 'round_trip',
        price: 2550000,
        child_person: 2,
        adult_person: 4,
        transit: 'transit',
        class: 'first_class'
      }
    ]
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
    getMyBooking (context, page) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/booking/my-booking?page=${page}`)
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
    deleteMyBooking (context, idBooking) {
      return new Promise((resolve, reject) => {
        axios.delete(`${process.env.VUE_APP_BASE_URL}/booking/delete/${idBooking}`)
          .then((result) => {
            context.dispatch('getMyBooking')
            Swal.fire('Delete Success', '', 'success')
            resolve(result)
          }).catch((err) => {
            console.log(err.response)
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
