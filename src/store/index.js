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
    cities: []
  },
  mutations: {
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
  modules: {
  }
})
