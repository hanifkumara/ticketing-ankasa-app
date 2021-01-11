<template>
  <div class=" container-fluid">
    <div class="container">
      <h1 class=" text-center mb-4">Add Ticket</h1>
      <div class="row">
        <!-- Big Box -->
        <section class="add-box mb-5 w-100">

          <!-- Image and Airlines Name -->
          <div class=" d-flex align-items-center flex-wrap mb-4">
            <!-- Image -->
            <div class="container-img col-12 col-md-4">
              <div class="wrap-img d-block d-sm-flex justify-content-sm-center align-items-sm-center">
                <label for="image" class=" d-flex justify-content-center align-items-center">
                  <img :src="this.images" alt="img" v-if="this.images !== null">
                  <div class="w-100 h-100 blank-img d-flex justify-content-center align-items-center" v-if="this.images === null"><img src="../../assets/main/cross-grey.svg" alt="img"></div>
                </label>
              </div>
              <input class="d-none" type="file" id="image"  @change="handleImage" multiple>
            </div>
            <!-- Airlines Name -->
            <div class="col-12 col-md wrap-dropdown">
              <h3 class=" mb-3">Airlines Name</h3>
              <div class=" position-relative">
                <!-- Selected -->
                <div class="selected" :class="selectedAir === 0 ? '':'open'" @click="selectedAirlines" >
                  <h3 class="select" v-if="name_maskapai == 'air_asia'">Air Asia</h3>
                  <h3 class="select" v-else-if="name_maskapai == 'lion_air'">Lion Air</h3>
                  <h3 class="select" v-else-if="name_maskapai == 'garuda'">Garuda</h3>
                  <h3 class="unselect" v-else>Select Airlines</h3>
                </div>
                <!-- Children -->
                <div :class="selectedAir === 1 ? 'upside':''" v-if="selectedAir === 1" class="dropdown-custom position-absolute">
                  <div class="drop-all">
                    <div @click="changeAirlines('air_asia')" class="child">
                      <h3>Air Asia</h3>
                    </div>
                    <div @click="changeAirlines('lion_air')" class="child">
                      <h3>Lion Air</h3>
                    </div>
                    <div @click="changeAirlines('garuda')" class="child ">
                      <h3>Garuda</h3>
                    </div>
                  </div>
                </div>
                <!-- End Children -->
              </div>
            </div>
            <!-- End Airlines Name -->
          </div>
          <!-- End Images and Name Airlines -->

          <hr class=" d-lg-none">

          <!-- Country -->
          <div class="row">
            <div class="col-lg-6 mb-4">
              <!-- Departure Country -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">Country (Departure)</h3>
                <div class=" position-relative">
                  <!-- Selected -->
                  <div class="selected" :class="selectedDepCountry === 0 ? '':'open'" @click="handleDepCountry" >
                    <h3 class="select" v-if="depCountry !== ''">{{depCountry}}</h3>
                    <h3 class="unselect" v-else>Select Departure Country</h3>
                  </div>
                  <!-- Children -->
                  <div :class="selectedDepCountry === 1 ? 'upside':''" v-if="selectedDepCountry === 1" class="dropdown-custom position-absolute">
                    <input @keyup.enter="inputCountry($event.target.value)" type="text" class="input" placeholder="Search Country Here">
                    <div class="drop-all">
                      <div v-for="(data, i) in countries" :key="i">
                        <div @click="selectDepCountry(data)" class="child">
                          <h3>{{data.name}}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Children -->
                </div>
              </div>
              <!-- End Departure Country -->
            </div>
            <!-- Split -->
            <div class="col-lg-6 mb-4">
              <!-- Arrived Country -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">Country (Arrived)</h3>
                <div class=" position-relative">
                  <!-- Selected -->
                  <div class="selected" :class="selectedArrCountry === 0 ? '':'open'" @click="handleArrCountry" >
                    <h3 class="select" v-if="arrCountry !== ''">{{arrCountry}}</h3>
                    <h3 class="unselect" v-else>Select Arrived Country</h3>
                  </div>
                  <!-- Children -->
                  <div :class="selectedArrCountry === 1 ? 'upside':''" v-if="selectedArrCountry === 1" class="dropdown-custom position-absolute">
                    <input @keyup.enter="inputCountry($event.target.value)" type="text" class="input" placeholder="Search Country Here">
                    <div class="drop-all">
                      <div v-for="(data, i) in countries" :key="i">
                        <div @click="selectArrCountry(data)" class="child">
                          <h3>{{data.name}}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Children -->
                </div>
              </div>
              <!-- End Arrived Country -->
            </div>
          </div>
          <!-- End Select Country -->

          <hr class=" d-lg-none">

          <!-- City -->
          <div class="row">
            <div class="col-lg-6 mb-4">
              <!-- Departure City -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">City (Departure)</h3>
                <div class=" position-relative">
                  <!-- Selected -->
                  <div class="selected" :class="selectedDepCity === 0 ? '':'open'" @click="handleDepCity" >
                    <h3 class="select" v-if="depCity !== ''">{{depCity}}</h3>
                    <h3 class="unselect" v-else>Select Departure City</h3>
                  </div>
                  <!-- Children -->
                  <div :class="selectedDepCity === 1 ? 'upside':''" v-if="selectedDepCity === 1" class="dropdown-custom position-absolute">
                    <input @keyup.enter="inputCityDep($event.target.value)" type="text" class="input" placeholder="Search City Here">
                    <div class="drop-all">
                      <div v-for="(data, i) in cities_dep" :key="i">
                        <div @click="selectDepCity(data)" class="child">
                          <h3>{{data}}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Children -->
                </div>
              </div>
              <!-- End Departure Country -->
            </div>
            <!-- Split -->
            <div class="col-lg-6 mb-4">
              <!-- Arrived City -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">City (Arrived)</h3>
                <div class=" position-relative">
                  <!-- Selected -->
                  <div class="selected" :class="selectedArrCity === 0 ? '':'open'" @click="handleArrCity" >
                    <h3 class="select" v-if="arrCity !== ''">{{arrCity}}</h3>
                    <h3 class="unselect" v-else>Select Arrived Country</h3>
                  </div>
                  <!-- Children -->
                  <div :class="selectedArrCity === 1 ? 'upside':''" v-if="selectedArrCity === 1" class="dropdown-custom position-absolute">
                    <input @keyup.enter="inputCityArr($event.target.value)" type="text" class="input" placeholder="Search Country Here">
                    <div class="drop-all">
                      <div v-for="(data, i) in cities_arr" :key="i">
                        <div @click="selectArrCity(data)" class="child">
                          <h3>{{data}}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Children -->
                </div>
              </div>
              <!-- End Arrived Country -->
            </div>
          </div>
          <!-- End Select City -->

          <hr class=" d-lg-none">

          <!-- Date -->
          <div class="row">
            <div class="col-lg-6 mb-4">
              <!-- Departure Date -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">Date (Departure)</h3>
                <div class=" position-relative">
                  <!-- Selected -->
                  <div class="selected">
                    <input v-model="date_departure" class="input-date" :class="date_departure !== '' ? 'date-available':''" type="date">
                  </div>
                </div>
              </div>
              <!-- End Departure Date -->
            </div>
            <!-- Split -->
            <div class="col-lg-6 mb-4">
              <!-- Arrived Date -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">Date (Arrived)</h3>
                <div class=" position-relative">
                  <!-- Selected -->
                  <div class="selected">
                    <input v-model="date_arrived" class="input-date" :class="date_arrived !== '' ? 'date-available':''" type="date">
                  </div>
                </div>
              </div>
              <!-- End Arrived Date -->
            </div>
          </div>
          <!-- End Select Date -->

          <hr class=" d-lg-none">

          <!-- Time -->
          <div class="row">
            <div class="col-lg-6 mb-4">
              <!-- Departure Time -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">Time (Departure)</h3>
                <div class=" position-relative">
                  <!-- Selected -->
                  <div class="selected">
                    <input v-model="time_departure" class="input-date" :class="time_departure !== '' ? 'date-available':''" type="time" @change="timeDeparture">
                  </div>
                </div>
              </div>
              <!-- End Departure Time -->
            </div>
            <!-- Split -->
            <div class="col-lg-6 mb-4">
              <!-- Arrived Time -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">Time (Arrived)</h3>
                <div class=" position-relative">
                  <!-- Selected -->
                  <div class="selected">
                    <input v-model="time_arrived" class="input-date" :class="time_arrived !== '' ? 'date-available':''" type="time" @change="timeArrived">
                  </div>
                </div>
              </div>
              <!-- End Arrived Time -->
            </div>
          </div>
          <!-- End Select Time -->

          <hr class=" d-lg-none">

          <!-- Date Return -->
          <div class="row">
            <div class="col-lg-6 mb-4">
              <!-- Date Return -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">Date (Return)</h3>
                <div class=" position-relative">
                  <!-- Selected -->
                  <div class="selected" :style="ticket_type === 'one_way' ? 'border-bottom: 2px solid #dadada':'' ">
                    <input v-model="date_return" v-if="ticket_type === 'round_trip'" class="input-date" :class="date_return !== '' ? 'date-available':''" type="date">
                    <input v-model="date_return" v-else class="input-date disable-input" type="date" disabled>
                  </div>
                </div>
              </div>
              <!-- End Departure Date -->
            </div>
            <!-- Split -->
            <div class="col-lg-6 mb-4">
              <!-- Time Return -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">Time (Return)</h3>
                <div class=" position-relative">
                  <!-- Selected -->
                  <div class="selected" :style="ticket_type === 'one_way' ? 'border-bottom: 2px solid #dadada':'' ">
                    <input v-model="time_return" v-if="ticket_type === 'round_trip'" class="input-date" :class="time_return !== '' ? 'date-available':'' " type="time" @change="timeReturn">
                    <input v-model="time_return" v-else class="input-date disable-input" type="time" disabled>
                  </div>
                </div>
              </div>
              <!-- End Arrived Time -->
            </div>
          </div>
          <!-- End Select Date & Time Return -->

          <hr class=" d-lg-none">

          <!-- Ticket Type -->
          <div class="row">
            <div class="col-lg-6 mb-4">
              <!-- Round Trip -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">Ticket Type (Round Trip)</h3>
                <div class=" position-relative">
                  <!-- Selected -->
                  <label for="round_trip" :class="ticket_type === 'round_trip' ? 'ticket-select':'ticket-unselect'">Round Trip</label>
                  <input v-model="ticket_type" id="round_trip" value="round_trip" class="d-none" type="radio">
                </div>
              </div>
              <!-- End Round Trip -->
            </div>
            <!-- Split -->
            <div class="col-lg-6 mb-4 d-flex">
              <!-- One Way -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">Ticket Type (One Way)</h3>
                <div class="position-relative">
                  <!-- Selected -->
                  <label for="one_way" :class="ticket_type === 'one_way' ? 'ticket-select':'ticket-unselect'">One Way</label>
                  <input v-model="ticket_type" id="one_way" value="one_way" class="d-none" type="radio" @change="ticketOneway">
                </div>
              </div>
              <!-- End One Way -->
            </div>
          </div>
          <!-- End Select Ticket Type -->

          <hr class=" d-lg-none">

          <!-- Transit -->
          <div class="row">
            <div class="col-lg-6 mb-4">
              <!-- Transit -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">Transit (Transit)</h3>
                <div class=" position-relative">
                  <!-- Selected -->
                  <label for="transit" :class="transit === 'transit' ? 'ticket-select':'ticket-unselect'">Transit</label>
                  <input v-model="transit" id="transit" value="transit" class="d-none" type="radio">
                </div>
              </div>
              <!-- End Transit -->
            </div>
            <!-- Split -->
            <div class="col-lg-6 mb-4 d-flex">
              <!-- Direct -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">Transit (Direct)</h3>
                <div class="position-relative">
                  <!-- Selected -->
                  <label for="direct" :class="transit === 'direct' ? 'ticket-select':'ticket-unselect'">Direct</label>
                  <input v-model="transit" id="direct" value="direct" class="d-none" type="radio">
                </div>
              </div>
              <!-- End Direct -->
            </div>
          </div>
          <!-- End Select Transit -->

          <hr class=" d-lg-none">

          <!-- Class -->
          <div class="row">
            <div class="col-lg-4 mb-4">
              <!-- Economy -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">Class Economy</h3>
                <div class=" position-relative">
                  <!-- Selected -->
                  <label for="economy" :class="classes === 'economy' ? 'ticket-select':'ticket-unselect'">Economy</label>
                  <input v-model="classes" id="economy" value="economy" class="d-none" type="radio">
                </div>
              </div>
              <!-- End Economy -->
            </div>
            <!-- Split -->
            <div class="col-lg-4 mb-4">
              <!-- Business -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">Class Business</h3>
                <div class=" position-relative">
                  <!-- Selected -->
                  <label for="business" :class="classes === 'business' ? 'ticket-select':'ticket-unselect'">Business</label>
                  <input v-model="classes" id="business" value="business" class="d-none" type="radio">
                </div>
              </div>
              <!-- End Business -->
            </div>
            <!-- Split -->
            <div class="col-lg-4 mb-4 d-flex">
              <!-- First Class -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">Class First Class</h3>
                <div class="position-relative">
                  <!-- Selected -->
                  <label for="first_class" :class="classes === 'first_class' ? 'ticket-select':'ticket-unselect'">First Class</label>
                  <input v-model="classes" id="first_class" value="first_class" class="d-none" type="radio">
                </div>
              </div>
              <!-- End First Class -->
            </div>
          </div>
          <!-- End Select Class -->

          <hr class=" d-lg-none">

          <!-- Person -->
          <div class="row">
            <div class="col-lg-6 mb-4">
              <!-- Child Person -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">Child Person</h3>
                <div class=" position-relative">
                  <!-- Selected -->
                  <div class="selected">
                    <input v-model="child_person" class="input-date" :class="child_person > 0 ? 'date-available':''" type="number">
                  </div>
                </div>
              </div>
              <!-- End Child Person -->
            </div>
            <!-- Split -->
            <div class="col-lg-6 mb-4">
              <!-- Adult Person -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">Adult Person</h3>
                <div class=" position-relative">
                  <!-- Selected -->
                  <div class="selected">
                    <input v-model="adult_person" class="input-date" :class="adult_person > 0 ? 'date-available':''" type="number">
                  </div>
                </div>
              </div>
              <!-- End Adult Person -->
            </div>
          </div>
          <!-- End Select Person -->

          <hr class=" d-lg-none">

          <!-- Price -->
          <div class="row">
            <div class="col-lg-6 mb-4">
              <!-- Price -->
              <div class="col-12 col-md wrap-dropdown">
                <h3 class=" mb-3">Price</h3>
                <div class=" position-relative">
                  <!-- Selected -->
                  <div class="selected">
                    <input v-model="price" class="input-date" :class="price > 0 ? 'date-available':''" type="number">
                  </div>
                </div>
              </div>
              <!-- End Price -->
            </div>
          </div>
          <!-- End Select Person -->

          <br>

          <div class="row">
            <div class="col-12 d-flex justify-content-center">
              <div class="col-md-3 ticket-select" @click="addTicket">Add Ticket</div>
            </div>
          </div>

        </section>
      </div>
    </div>
  </div>
</template>

<script>
import admin from '../../mixins/main/admin'
import Swal from 'sweetalert2'
import axios from 'axios'

export default {
  name: 'AddTicket',
  mixins: [admin],
  data () {
    return {
      // Data
      id: '',
      images: null,
      upload: null,
      name_maskapai: '',
      country_departure: '',
      country_arrived: '',
      city_departure: '',
      city_arrived: '',
      date_departure: '',
      time_departure: '',
      date_arrived: '',
      time_arrived: '',
      date_return: '',
      time_return: '',
      ticket_type: 'round_trip',
      price: 0,
      child_person: 0,
      adult_person: 0,
      transit: 'transit',
      classes: 'economy',
      // Dropdown Airlines
      selectedAir: 0,
      // Dropdown Country
      selectedDepCountry: 0,
      selectedArrCountry: 0,
      depCountry: '',
      arrCountry: '',
      // Dropdown City
      selectedDepCity: 0,
      selectedArrCity: 0,
      depCity: '',
      arrCity: ''
    }
  },
  methods: {
    // Airlines
    changeAirlines (data) {
      this.name_maskapai = data
      this.selectedAir = 0
    },
    selectedAirlines () {
      this.selectedAir === 1 ? this.selectedAir = 0 : this.selectedAir = 1
    },
    // Departure Country
    handleDepCountry () {
      this.selectedDepCountry === 1 ? this.selectedDepCountry = 0 : this.selectedDepCountry = 1
    },
    selectDepCountry (data) {
      this.depCountry = data.name
      this.country_departure = data.alpha
      this.selectedDepCountry = 0
      this.countries = this.allcountries
      this.city_departure = ''
      this.depCity = ''
      let key
      for (key in this.allcities) {
        if (this.depCountry === key) {
          this.cities_dep = this.allcities[key]
          this.select_citydep = this.allcities[key]
        }
      }
    },
    // Departure City
    handleDepCity () {
      this.selectedDepCity === 1 ? this.selectedDepCity = 0 : this.selectedDepCity = 1
    },
    selectDepCity (data) {
      this.depCity = data
      this.city_departure = data.toLowerCase().split(' ').join('_')
      this.selectedDepCity = 0
      this.cities_dep = this.select_citydep
    },
    // Arrived Country
    handleArrCountry () {
      this.selectedArrCountry === 1 ? this.selectedArrCountry = 0 : this.selectedArrCountry = 1
    },
    selectArrCountry (data) {
      this.arrCountry = data.name
      this.country_arrived = data.alpha
      this.selectedArrCountry = 0
      this.countries = this.allcountries
      this.city_arrived = ''
      this.arrCity = ''
      let key
      for (key in this.allcities) {
        if (this.arrCountry === key) {
          this.cities_arr = this.allcities[key]
          this.select_cityarr = this.allcities[key]
        }
      }
    },
    // Arrived City
    handleArrCity () {
      this.selectedArrCity === 1 ? this.selectedArrCity = 0 : this.selectedArrCity = 1
    },
    selectArrCity (data) {
      this.arrCity = data
      this.city_arrived = data.toLowerCase().split(' ').join('_')
      this.selectedArrCity = 0
      this.cities_arr = this.select_cityarr
    },
    // Time Departure & Arrived
    timeDeparture (e) {
      this.time_departure += ':00'
    },
    timeArrived (e) {
      this.time_arrived += ':00'
    },
    // Date & Time Return
    timeReturn (e) {
      this.time_return += ':00'
    },
    // Ticket
    ticketOneway () {
      this.date_return = ''
      this.time_return = ''
    },
    // Apply ticket to Backend
    handleImage (e) {
      const data = new FormData()
      const type = e.target.files[0].type
      const size = e.target.files[0].size
      const byte = 1024 * 1024 * 2
      if (type !== 'image/jpeg' && type !== 'image/png' && type !== 'image/jpg') {
        return Swal.fire('Failed', 'You must upload a JPEG / JPG / PNG', 'error')
      } else if (size > byte) {
        return Swal.fire('Failed', 'You must upload less than 2 MB', 'error')
      } else {
        this.upload = e.target.files[0]
        data.append('images', e.target.files[0])
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = e => {
          this.images = e.target.result
        }
      }
    },
    addTicket () {
      const price = parseInt(this.price)
      const adultPerson = parseInt(this.adult_person)
      if (this.images === null) {
        return Swal.fire('Failed', 'You must upload an image', 'error')
      } else if (this.name_maskapai === '') {
        return Swal.fire('Failed', 'You must fill up the blank Airlines', 'error')
      } else if (this.country_departure === '') {
        return Swal.fire('Failed', 'You must fill up the blank Country Departure', 'error')
      } else if (this.country_arrived === '') {
        return Swal.fire('Failed', 'You must fill up the blank Country Arrived', 'error')
      } else if (this.city_departure === '') {
        return Swal.fire('Failed', 'You must fill up the blank City Departure', 'error')
      } else if (this.city_arrived === '') {
        return Swal.fire('Failed', 'You must fill up the blank City Arrived', 'error')
      } else if (this.date_departure === '') {
        return Swal.fire('Failed', 'You must fill up the blank Date Departure', 'error')
      } else if (this.time_departure === '') {
        return Swal.fire('Failed', 'You must fill up the blank Time Departure', 'error')
      } else if (this.date_arrived === '') {
        return Swal.fire('Failed', 'You must fill up the blank Date Arrived', 'error')
      } else if (this.time_arrived === '') {
        return Swal.fire('Failed', 'You must fill up the blank Time Arrived', 'error')
      } else if (this.date_return === '' && this.ticket_type === 'round_trip') {
        return Swal.fire('Failed', 'You must fill up the blank Date Return', 'error')
      } else if (this.time_return === '' && this.ticket_type === 'round_trip') {
        return Swal.fire('Failed', 'You must fill up the blank Time Return', 'error')
      } else if (price < 1) {
        return Swal.fire('Failed', 'Are you sure to give 0 price?', 'error')
      } else if (adultPerson < 1) {
        return Swal.fire('Failed', 'You must fill up the blank Adult Person (min 1)', 'error')
      }
      const data = new FormData()
      data.append('images', this.upload)
      data.append('name_maskapai', this.name_maskapai)
      data.append('country_departure', this.country_departure)
      data.append('country_arrived', this.country_arrived)
      data.append('city_departure', this.city_departure)
      data.append('city_arrived', this.city_arrived)
      data.append('date_departure', this.date_departure)
      data.append('date_arrived', this.date_arrived)
      data.append('time_departure', this.time_departure)
      data.append('time_arrived', this.time_arrived)
      data.append('date_return', this.date_return)
      data.append('time_return', this.time_return)
      data.append('ticket_type', this.ticket_type)
      data.append('price', this.price)
      data.append('child_person', this.child_person)
      data.append('adult_person', this.adult_person)
      data.append('transit', this.transit)
      data.append('class', this.classes)
      axios.post(`${process.env.VUE_APP_BASE_URL}/ticket/create`, data)
        .then((res) => {
          Swal.fire('Success', 'Success add ticket', 'success')
          this.$router.push('/admin/ticket')
        })
        .catch((err) => {
          console.log(err)
          return Swal.fire('Failed', 'Failed add ticket, you can try later', 'error')
        })
    }
  },
  mounted () {
    this.getDataCountry()
  }
}
</script>

<style lang="scss" scoped>

label {
  margin: 0;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.upside {
  z-index: 1000;
}

.container-fluid {
  padding: 60px 0 60px 0;
  background-color: #F5F6FA;
  min-height: 100vh;
}

h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #414141;
}

.add-box {
  background-color: white;
  box-shadow: 0px 10px 40px rgba(35, 149, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
}

.container-img {
  padding: 0;
  .wrap-img {
    overflow: hidden;
    border-radius: 10px;
    height: 200px;
    width: 100%;
    transition: .3s;
    label {
      cursor: pointer;
      width: 100%;
      height: 100%;
      margin: 0;
      img {
        width: 100%;
        // height: 100%;
        object-fit: cover;
      }
      .blank-img {
        background-color: #EEEEEE;
        border-radius: 10px;
        img {
          width: 42px;
          height: 42px;
        }
      }
    }
  }
  .wrap-img:hover {
    opacity: .8;
  }
}

.wrap-dropdown {
  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #414141;
  }
  .selected {
    width: 100%;
    height: 44px;
    border-left: 2px solid #ffffff00;
    border-right: 2px solid #ffffff00;
    border-top: 2px solid #ffffff00;
    border-bottom: 2px solid #2395FF;
    padding: 10px;
    cursor: pointer;
    .unselect {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #DADADA;
    }
    .select {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #414141;
    }
    .input-date {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #DADADA;
      border: 0;
      outline: 0;
      width: 100%;
      height: 100%;
    }
    .input-date:focus {
      border: 0;
      outline: 0;
    }
    .disable-input {
      background-color: rgba(255, 255, 255, 0)!important;
    }
    .date-available {
      color: #414141;
    }
    .date-unavailable {
      color: #414141;
      border-bottom: 2px solid #dadada!important;
    }
  }
  .open {
    // border-radius: 15px 15px 0 0;
    border-left: 2px solid #2395FF;
    border-right: 2px solid #2395FF;
    border-top: 2px solid #2395FF;
  }
  .dropdown-custom {
    top: 44px;
    width: 100%;
    border-left: 2px solid #2395FF;
    border-right: 2px solid #2395FF;
    border-bottom: 2px solid #2395FF;
    // border-radius: 0 0 15px 15px;
    background-color: white;
    height: 134px;
    overflow: hidden;
    .input {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #414141;
      // Font
      width: 100%;
      height: 44px;
      outline: 0;
      border: 0;
      border-bottom: 2px solid rgba(35, 149, 255, 0.5);
      padding: 10px;
      box-sizing: border-box;
    }
    .input:focus {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #414141;
      // Font
      width: 100%;
      height: 44px;
      outline: 0;
      border: 0;
      border-bottom: 2px solid rgba(35, 149, 255, 0.5);
      padding: 10px;
      box-sizing: border-box;
    }
    .drop-all {
    height: 100%;
    overflow: auto;
      .child {
        width: 100%;
        height: 44px;
        padding: 10px;
        cursor: pointer;
        transition: .3s;
        h3 {
          color: #414141;
        }
      }
      .child:hover {
        background-color: #2395FF;
        h3 {
          color: white;
        }
      }
    }
    .drop-all::-webkit-scrollbar {
      width: 5px;
    }
    .drop-all::-webkit-scrollbar-thumb {
      background-color: rgba(35, 149, 255, 0.5);
    }
  }
  .dropdown-custom::-webkit-scrollbar {
    width: 5px;
  }
  .dropdown-custom::-webkit-scrollbar-thumb {
    background-color: rgba(35, 149, 255, 0.5);
  }
}

.ticket-select {
  width: 100%;
  height: 44px;
  background: #2395FF;
  box-shadow: 0px 10px 40px rgba(35, 149, 255, 0.25);
  border-radius: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  // transition: .3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ticket-select:hover {
  opacity: .8;
}

.ticket-unselect {
  width: 100%;
  height: 44px;
  background: #DADADA;
  box-shadow: 0px 10px 40px rgba(185, 185, 185, 0.25);
  border-radius: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #414141;
  // transition: .3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ticket-unselect:hover {
  opacity: .8;
}

@media (max-width: 767px) {
  .container-img {
    margin: 0 0 24px 0;
  }
}

@media (max-width: 575px) {
  .container-img {
    .wrap-img {
      width: 100%!important;
      label {
        img {
          height: 100%;
        }
      }
    }
  }
}
</style>
