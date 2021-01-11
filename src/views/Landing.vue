<template>
  <div class="container">
    <!-- Big Title -->
    <div class="d-flex justify-content-between justify-content-center">
      <div class="text">
        <h1>Find Your Flight</h1>
        <p>and explore the world with us</p>
      </div>
      <div>
        <img src="../assets/image 3.png" alt="image" width="310px" height="300px">
      </div>
    </div>
    <div class="image">
      <img src="../assets/img1.png" alt="image">
    </div>

    <!-- Functional -->
    <div class="card-box-new">
      <div class="title-card-box-new mb-4">Hey, Where you want to go?</div>
      <!-- Select Departure and Arrived -->
      <div class="little-card-box-new">
        <div class="from-to mb-2 w-100 d-flex justify-content-between">
          <div>From</div>
          <div>To</div>
        </div>

        <!-- Select City -->
        <div class="new-city d-flex align-items-center justify-content-between">
          <!-- Select City Departure -->
          <div class="selected-dep position-relative">
            <div @click="openCityDep">{{search.city_departure}}</div>
            <div v-if="openCityDe === 1" class="select-city">
              <div class="city-dep" v-for="(data, index) in this.search.allcity" :key="index">
                <div @click="handleCityDep(data.city)" v-if="data.country === search.country_departure" >{{data.city}}</div>
              </div>
            </div>
          </div>
          <!-- End Select City Departure -->
          <!-- Image -->
          <img src="../assets/main/arrow.svg" alt="arrow">
          <!-- Select City Arrived -->
          <div class="selected-arr position-relative">
            <div @click="openCityArr">{{search.city_arrived}}</div>
            <div v-if="openCityAr === 1" class="select-city">
              <div class="city-dep" v-for="(data, index) in this.search.allcity" :key="index">
                <div @click="handleCityArr(data.city)" v-if="data.country === search.country_arrived" >{{data.city}}</div>
              </div>
            </div>
          </div>
          <!-- End Select City Arrived -->
        </div>
        <!-- End Select City -->
        <br>
        <!-- Select Country -->
        <div class="new-city d-flex align-items-center justify-content-between">
          <!-- Select Country Departure -->
          <div class="selected-dep position-relative">
            <div @click="openCountryDep">{{search.country_departure}}</div>
            <div v-if="openCountryDe === 1" class="select-city">
              <div class="city-dep" v-for="(data, index) in this.search.allcity" :key="index">
                <div @click="handleCountryDep(data.country)">{{data.country}}</div>
              </div>
            </div>
          </div>
          <!-- End Select Country Departure -->
          <!-- Image -->
          <img src="../assets/main/arrow.svg" alt="arrow">
          <!-- Select Country Arrived -->
          <div class="selected-arr position-relative">
            <div @click="openCountryArr">{{search.country_arrived}}</div>
            <div v-if="openCountryAr === 1" class="select-city">
              <div class="city-dep" v-for="(data, index) in this.search.allcity" :key="index">
                <div @click="handleCountryArr(data.country)">{{data.country}}</div>
              </div>
            </div>
          </div>
          <!-- End Select Country Arrived -->
        </div>
        <!-- End Select Country -->

      </div>
      <!-- End Select Departure and Arrived -->

      <br>

      <!-- Select Ticket Type -->
      <div class="w-100 d-flex justify-content-between align-items-center">
        <label for="oneway" class=" d-flex justify-content-center align-items-center hover" :class="search.ticket_type == 'one_way' ? 'act-ticket':'inact-ticket' ">One Way</label>
        <input v-model="search.ticket_type" id="oneway" class="d-none" type="radio" value="one_way">
        <label for="round" class=" d-flex justify-content-center align-items-center hover" :class="search.ticket_type == 'round_trip' ? 'act-ticket':'inact-ticket' ">Round Trip</label>
        <input v-model="search.ticket_type" id="round" class="d-none" type="radio" value="round_trip">
      </div>
      <!-- End Select Ticket Type -->

      <br>

      <!-- Departure -->
      <div class=" w-100 sub-title-new">Departure</div>
      <input v-model="search.date_departure" type="date" class="input-date w-100">
      <!-- End Departure -->

      <!-- Person -->
      <div class=" w-100 sub-title-new">How many person?</div>
      <div class=" w-100 d-flex">
        <div class=" w-50">
          <label for="child" class="sub-title-new">Child</label>
          <input v-model="search.child_person" class="input-person" id="child" type="number">
        </div>
        <div class=" w-50">
          <label for="adult" class="sub-title-new">Adult</label>
          <input v-model="search.adult_person" class="input-person" id="adult" type="number">
        </div>
      </div>
      <!-- End Person -->

      <!-- Class -->
      <div class=" w-100 sub-title-new">Which class do you want?</div>
      <div class=" w-100 d-flex">
        <div class="col d-flex align-items-center del-padd">
          <label class="del-marg d-flex align-items-center label-class" for="economy">
            <div :class="search.class == 'economy' ? 'act-class':'inact-class' "></div>
            <div>
              Economy
            </div>
          </label>
          <input class="d-none" id="economy" value="economy" type="radio" v-model="search.class">
        </div>
        <div class="col d-flex align-items-center del-padd">
          <label class="del-marg d-flex align-items-center label-class" for="business">
            <div :class="search.class == 'business' ? 'act-class':'inact-class' "></div>
            <div>
              Business
            </div>
          </label>
          <input class="d-none" id="business" value="business" type="radio" v-model="search.class">
        </div>
        <div class="col d-flex align-items-center del-padd">
          <label class="del-marg d-flex align-items-center label-class" for="first_class">
            <div :class="search.class == 'first_class' ? 'act-class':'inact-class' "></div>
            <div>
              First Class
            </div>
          </label>
          <input class="d-none" id="first_class" value="first_class" type="radio" v-model="search.class">
        </div>
      </div>
      <!-- End Class -->
      <br>
      <button @click="searchFlight" class="hover search-flight w-100 d-flex justify-content-center align-items-center">SEARCH FLIGHT</button>

    </div>
    <!-- End Functional -->

  <div class="text-card">
    <h6>TRENDING</h6>
    <h5>Trending destinations</h5>
    <p>View all</p>
  </div>

  <div class="row">
    <div class="col-lg-2">
      <div class="card-box">
        <div class="card1 text-center">
          <img src="../assets/image 3.png" alt="image">
          <h6 class="text-left">Tokyo,</h6>
          <div class="japan">
            <p>Japan</p>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-2 card-content">
      <div class="card-box">
        <div class="card1 text-center">
          <img src="../assets/img2.png" alt="image">
          <h6 class="text-left">Barcelona,</h6>
          <div class="japan">
            <p>Spain</p>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-2 card-content">
      <div class="card-box">
        <div class="card1 text-center">
          <img src="../assets/image 3.png" alt="image">
          <h6 class="text-left">Tokyo,</h6>
          <div class="japan">
            <p>Japan</p>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-2 card-content">
      <div class="card-box">
        <div class="card1 text-center">
          <img src="../assets/img2.png" alt="image">
          <h6 class="text-left">Barcelona,</h6>
          <div class="japan">
            <p>Spain</p>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-2 card-content">
      <div class="card-box">
        <div class="card1 text-center">
          <img src="../assets/image 3.png" alt="image">
          <h6 class="text-left">Tokyo,</h6>
          <div class="japan">
            <p>Japan</p>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="content">
    <div class="content-text">
      <h5 class="pt-5">Top 10</h5>
      <p class="mt-3 mb-5">Top 10 destinations</p>
    </div>
    <div class="content-img row">
      <div class="img2">
        <div class="card-image">
          <img src="../assets/image1.png" alt="group">
        </div>
        <p>PARIS</p>
      </div>
      <div class="img2">
        <div class="card-image">
        <img src="../assets/image2.png" alt="group">
        </div>
        <p>BALI</p>
      </div>
      <div class="img2">
        <div class="card-image">
        <img src="../assets/image3.png" alt="group">
        </div>
        <p>SINGAPORE</p>
      </div>
      <div class="img2">
        <div class="card-image">
        <img src="../assets/image4.png" alt="group">
        </div>
        <p>AGRA</p>
      </div>
      <div class="img2">
        <div class="card-image">
        <img src="../assets/image5.png" alt="group">
        </div>
        <p>SYDNEY</p>
      </div>
      </div>
      <div class="row button-top mt-5 justify-content-center align-items-center">
        <div class="prev">
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div class="next">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Landing',
  data () {
    return {
      search: {
        class: 'economy',
        child_person: 0,
        adult_person: 0,
        date_departure: '',
        ticket_type: 'one_way',
        city_departure: 'City',
        city_arrived: 'City',
        country_departure: 'Country',
        country_arrived: 'Country',
        allcity: [
          {
            id: 1,
            city: 'jakarta',
            country: 'IDN'
          },
          {
            id: 2,
            city: 'bogor',
            country: 'IDN'
          },
          {
            id: 3,
            city: 'bandung',
            country: 'IDN'
          },
          {
            id: 4,
            city: 'tokyo',
            country: 'JPN'
          },
          {
            id: 4,
            city: 'nagasaki',
            country: 'JPN'
          }
        ]
      },
      openCityDe: 0,
      openCityAr: 0,
      openCountryDe: 0,
      openCountryAr: 0
    }
  },
  methods: {
    searchFlight () {
      axios.get(`${process.env.VUE_APP_BASE_URL}/ticket/ticketing?city_departure=${this.search.city_departure}&country_departure=${this.search.country_departure}&city_arrived=${this.search.city_arrived}&country_arrived=${this.search.country_arrived}&ticket_type=${this.search.ticket_type}&date_departure=${this.search.date_departure}&child_person=${this.search.child_person}&adult_person=${this.search.adult_person}&class=${this.search.class}&transit=&time_departure=&time_arrived=&name_maskapai=`)
        .then((res) => {
          console.log(res.data.result)
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    },
    openCityDep () {
      if (this.openCityDe === 0) {
        this.openCityDe = 1
        this.openCityAr = 0
      } else {
        this.openCityDe = 0
      }
    },
    openCityArr () {
      if (this.openCityAr === 0) {
        this.openCityAr = 1
        this.openCityDe = 0
      } else {
        this.openCityAr = 0
      }
    },
    handleCityDep (data) {
      this.search.city_departure = data
      this.openCityDe = 0
    },
    handleCityArr (data) {
      this.search.city_arrived = data
      this.openCityAr = 0
    },
    openCountryDep () {
      if (this.openCountryDe === 0) {
        this.openCountryDe = 1
        this.openCountryAr = 0
      } else {
        this.openCountryDe = 0
      }
    },
    openCountryArr () {
      if (this.openCountryAr === 0) {
        this.openCountryAr = 1
        this.openCountryDe = 0
      } else {
        this.openCountryAr = 0
      }
    },
    handleCountryDep (data) {
      this.search.country_departure = data
      this.openCountryDe = 0
    },
    handleCountryArr (data) {
      this.search.country_arrived = data
      this.openCountryAr = 0
    }
  }
}
</script>

<style lang="scss" scoped>

.card-box-new {
  position: absolute;
  width: 400px;
  /* height: 750px; */
  right: 100px;
  top: 150px;
  background: #FFFFFF;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
  padding: 30px 40px;
  .title-card-box-new {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 185%;
    color: #000000;
  }
  .little-card-box-new {
    width: 100%;
    padding: 15px 20px;
    box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
    border-radius: 12px;
    .from-to {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #979797;
    }
    .new-city {
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 30px;
      color: #000000;
      .selected-dep {
        cursor: pointer;
        .select-city {
          overflow: auto;
          padding: 10px 0;
          position: absolute;
          top: 30px;
          left: -180px;
          width: 160px;
          max-height: 160px;
          box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
          border-radius: 12px;
          background-color: #FFFFFF;
          .city-dep {
            line-height: 1.5em;
            padding: 0 15px;
            z-index: 1000;
          }
          .city-dep:hover {
            background-color: #dadada;
          }
        }
      }
      .selected-arr {
        cursor: pointer;
        .select-city {
          overflow: auto;
          padding: 10px 0;
          position: absolute;
          top: 30px;
          right: -180px;
          width: 160px;
          max-height: 160px;
          box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
          border-radius: 12px;
          background-color: #FFFFFF;
          .city-dep {
            line-height: 1.5em;
            padding: 0 15px;
            z-index: 1000;
          }
          .city-dep:hover {
            background-color: #dadada;
          }
        }
      }
    }
  }
}

.select-city::-webkit-scrollbar {
  width: 5px;
}

.select-city::-webkit-scrollbar-thumb {
  background-color: rgba(35, 149, 255, 0.5);
}

.act-ticket {
  width: 140px;
  height: 44px;
  background: #2395FF;
  border-radius: 6px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #FFFFFF;
  cursor: pointer;
}
.inact-ticket {
  width: 140px;
  height: 44px;
  background: #F0F0F0;
  border-radius: 6px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #595959;
  cursor: pointer;
}

.hover:hover {
  opacity: .8
}

.sub-title-new {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #6B6B6B;
  margin: 0 0 12px 0;
}

.input-date {
  border: 1px solid #DDDDDD;
  box-sizing: border-box;
  border-radius: 6px;
  height: 55px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
  padding: 0 20px;
  margin: 0 0 20px 0;
}

.input-person {
  width: 150px;
  height: 55px;
  border: 1px solid #DDDDDD;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 0 20px;
  margin: 0 0 20px 0;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.act-class {
  width: 20px;
  height: 20px;
  background-color: #2395FF;
  border-radius: 50%;
  margin: 0 5px 0 0;
}

.inact-class {
  width: 20px;
  height: 20px;
  background-color: #dadada;
  border-radius: 50%;
  margin: 0 5px 0 0;
}

.del-padd {
  padding: 0;
}

.del-marg {
  margin: 0;
}

.label-class {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
}

.search-flight {
  height: 55px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #FFFFFF;
  background: #2395FF;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
}

button:focus {
  outline: 0
}

// End

.container {
  background: white;
  position: relative;
  width: 2000px;
  height: auto;
}

.text {
  margin-top: 120px;
}

.text h1 {
  font-size: 40px;
  font-weight: bold;
}

.text p {
  color: grey;
  margin-top: 5px;
}

.button-card button {
  width: 130px;
  font-size: 14px;
}
.button-search button {
  width: 290px;
  margin-top: 20px;
  font-size: 14px;
}

.ico {
  background: url('../assets/vector1.png');
  background-repeat: no-repeat;
  width: 5px;
  height: 5px;
  padding: 10px;
  display: inline-block;
  vertical-align: middle;
}

.ico2 {
  background: url('../assets/ankasa.png');
  background-repeat: no-repeat;
  width: 5px;
  height: 5px;
  padding: 10px;
  display: inline-block;
  vertical-align: middle;
}

.search {
  background: url('../assets/btnback.png');
  background-repeat: no-repeat;
  width: 5px;
  height: 5px;
  padding: 10px;
  margin-left: 100px;
  margin-top: 3px;
  display: inline-block;
  vertical-align: middle;
}

.section {
  background: #fff;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 20px;
  width:340px;
  height: 620px;
  position: absolute;
  top: 150px;
  right: 100px;
}

.title h6 {
  margin-top: 20px;
  margin-left: 20px;
  font-weight: bold;
  font-size: 15px;
}

.title h1 {
  margin-left: 20px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
}

.section .section-card {
  display: flex;
  margin-top: 20px;
}

.section .section-card a {
  color: rgb(35, 149, 255);
  margin-top: 5px;
  font-weight: bold;
  font-size: 14px;
}

.section .section-card img {
  width: 8px;
  height: 12px;
  margin-top: 5px;
}

.section-text {
  background: white;
  box-shadow: 0px 8px 17px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
  width: 270px;
  height: 80px;
  margin-top: -40px;
}

.text1 {
  display: flex;
  flex-direction: column;
}

.text1 p {
  font-size: 13px;
  color: gray;
  padding-top: 10px;
}

.text1 h6 {
  font-size: 17px;
  margin-top: 10px;
  font-weight: bold;
}

.text1 i {
  font-size: 12px;
  margin-top: 3px;
  color: gray;
}

.section-text img {
  width: 20px;
  height: 20px;
}

.content {
  width: 600px;
  height: 200px;
}

.content-img {
  justify-content: center;
  align-items: center;
}

.form-group h6 {
  font-size: 13px;
}

.form-select .form-control {
  width: 45%;
}

.form-check label {
  font-size: 13px;
  margin-top: 5px;
}

.text-card h6 {
  color:  rgb(35, 149, 255);
  font-weight:500px;
  margin-top: 30px;
}

.text-card h5 {
  color: black;
  font-weight: bold;
  margin-top: 5px;
}

.text-card p {
  color: rgb(35, 149, 255);
  margin-left: 1000px;
  margin-top: -20px;
}

.card-box {
  margin-top: 30px;
}

.card-box .card1 {
  width: 216.07px;
  height: 275px;
  background: #FFFFFF;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.15);
  border-radius: 20px;
}

.card-content {
  margin-left: 40px;
}

.card-box .card1 img {
  width: 160px;
  height: 160px;
  object-fit: contain;
  border-radius: 30px;
  margin: 10px 0;
}

.card-box .card1 h6 {
  margin-left: 20px;
  margin-top: 10px;
}

.card-box .card1 .japan {
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 10px;
}

.card-box .card1 .japan i {
  font-size: 50px;
  color: rgb(35, 149, 255);
  margin-top: -30px;
  margin-left: 90px;
}

.content {
  position: relative;
  background: url('../assets/group.png');
  background-repeat: no-repeat;
  width: 100%;
  height: 850px;
  margin-top: 550px;
}

.content-text h5 {
  color: white;
  margin-top: -500px;
  text-align: center;
}

.content-text p {
  font-size: 22px;
  color: white;
  font-weight: bold;
  text-align: center;
}

.card-image {
  width: 140px;
  height: 140px;
  padding: 5px;
  border-radius: 70px;
  border: 3px solid #fff ;
}

.img2 {
  margin: 20px;
}

.img2 p{
  margin-top: 25px;
  text-align: center;
  font-size: large;
  color: #fff;
}

.card-image img {
  width: 100%;
  height: 100%;
  border-radius: 70px;
}

.button-top {
  text-align: center;
}

.prev {
  width: 70px;
  height: 40px;
  border-radius: 10px;
  margin-right: 40px;
  background-color: transparent;
  border: 2px solid white;
}

.next {
  width: 70px;
  height: 40px;
  border-radius: 10px;
  background-color: white;
}

.prev .fa {
  color: white;
  margin-top: 5px;
  font-size: 28px;
}

.next .fa {
  color:  rgb(35, 149, 255);
  margin-top: 5px;
  font-size: 28px;
}
</style>
