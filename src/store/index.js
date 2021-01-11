import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    ],
    search: {},
    dataUser: [],
    dataTickets: []
  },
  mutations: {
    NOTFOUND (state, payload) {
      state.dataTickets = payload
    },
    DATA_TICKETS (state, payload) {
      state.dataTickets = payload
    },
    DATA_USER (state, payload) {
      state.dataUser = payload
    },
    SET_MY_PROFILE (state, payload) {
      state.myProfile = payload
    },
    SET_FILTER (state, payload) {
      state.search.transit = payload.transit
      state.search.time_departure = payload.time_departure
      state.search.time_arrived = payload.time_arrived
      state.search.name_maskapai = payload.name_maskapai
    },
    SET_CITIES (state, payload) {
      state.search.city_departure = payload.city_departure
      state.search.country_arrived = payload.country_arrived
      state.search.ticket_type = payload.ticket_type
      state.search.date_departure = payload.date_departure
      state.search.child_person = payload.child_person
      state.search.adult_person = payload.adult_person
      state.search.class = payload.class
      state.search.time_departure = payload.time_departure
      state.search.time_arrived = payload.time_arrived
      state.search.name_maskapai = payload.name_maskapai
      state.search.transit = payload.transit
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
    getDataSearch (context, { search, query }) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/ticket/ticketing?city_departure=${search.city_departure}&country_departure=${search.country_departure}&city_arrived=${search.city_arrived}&country_arrived=${search.country_arrived}&ticket_type=${search.ticket_type}&date_departure=${search.date_departure}&child_person=${search.child_person}&adult_person=${search.adult_person}&class=${search.class}&transit=${query.transit}&time_departure=${query.time_departure}&time_arrived=${query.time_arrived}&name_maskapai=${query.name_maskapai}`)
          .then((result) => {
            resolve(result)
            context.commit('DATA_TICKETS', result.data)
          })
          .catch((error) => {
            console.log(error)
            reject(error)
          })
      })
    },
    getMyProfile (context) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/users/my-profile`)
          .then((result) => {
            console.log(result)
            context.commit('SET_MY_PROFILE', result.data.result)
            context.commit('DATA_USER', result.data.result)
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
    createBooking (context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/booking/create/`, data).then((result) => {
          resolve(result)
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
