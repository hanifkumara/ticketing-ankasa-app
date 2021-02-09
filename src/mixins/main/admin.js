import city from './cities.json'
import country from './country.json'
export default {
  data () {
    return {
      cities_dep: null,
      select_citydep: null,
      cities_arr: null,
      select_cityarr: null,
      allcities: null,
      countries: null,
      allcountries: null
    }
  },
  methods: {
    getDataCountry () {
      this.countries = null
      this.countries = country
      this.allcountries = country
      this.allcities = city
    },
    inputCountry (data) {
      if (data.length < 1) {
        this.countries = this.allcountries
      } else {
        const letter = data[0].toUpperCase() + data.slice(1)
        this.countries = []
        let index
        for (index of this.allcountries) {
          if (index.name.includes(letter)) {
            this.countries.push(index)
          }
        }
      }
    },
    inputCityDep (data) {
      if (data.length < 1) {
        this.cities_dep = this.select_citydep
      } else {
        const letter = data[0].toUpperCase() + data.slice(1)
        this.cities_dep = []
        let index
        for (index of this.select_citydep) {
          if (index.includes(letter)) {
            this.cities_dep.push(index)
          }
        }
      }
    },
    inputCityArr (data) {
      if (data.length < 1) {
        this.cities_arr = this.select_cityarr
      } else {
        const letter = data[0].toUpperCase() + data.slice(1)
        this.cities_arr = []
        let index
        for (index of this.select_cityarr) {
          if (index.includes(letter)) {
            this.cities_arr.push(index)
          }
        }
      }
    }
  }
}
