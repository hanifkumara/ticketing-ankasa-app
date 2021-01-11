import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default
new Vuex.Store({
  state: {
    city_departure: '',
    country_departure: '',
    country_arrived: '',
    ticket_type: '',
    date_departure: '',
    child_person: '',
    adult_person: '',
    class: '',
    time_departure: '',
    time_arrived: '',
    name_maskapai: '',
    transit: '',
    myProfile: {},
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
      }
    ]
  },
  mutations: {
    SET_MY_PROFILE (state, payload) {
      state.myProfile = payload
    },
    SET_CITIES (state, payload) {
      state.city_departure = payload.city_departure
      state.country_arrived = payload.country_arrived
      state.ticket_type = payload.ticket_type
      state.date_departure = payload.date_departure
      state.child_person = payload.child_person
      state.adult_person = payload.adult_person
      state.class = payload.class
      state.time_departure = payload.time_departure
      state.time_arrived = payload.time_arrived
      state.name_maskapai = payload.name_maskapai
      state.transit = payload.transit
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
          if (error.response.data.message.message === 'Invalid Token') {
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            // context.commit('REMOVE_ALL')
          } else if (error.response.data.message.message === 'Token Expired') {
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            // context.commit('REMOVE_ALL')
          }
        }
        return Promise.reject(error)
      })
    },
    getallcities (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/ticket/ticketing?city_departure=${context.state.city_departure}&country_departure=${context.state.country_departure}&city_arrived=${context.state.city_arrived}&country_arrived=${context.state.country_arrived}&ticket_type=${context.state.ticket_type}&date_departure=${context.state.date_departure}&child_person=${context.state.child_person}&class=${context.state.class}=&time_departure=${context.state.time_departure}&time_arrived=${context.state.time_arrived}&name_maskapai=${context.state.name_maskapai}&transit=${context.state.transit}`, payload)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
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
