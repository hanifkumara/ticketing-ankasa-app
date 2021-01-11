<template>
  <div class="wrap-ticket_d">
    <div class="header-ticket_d">
      <div class="flight-line">
        <img src="../../../../public/img/icons/ticket_d/whiteflight.png" alt="img">
        <div class="det-flight">
          <span><p>From</p><p>To</p></span>
          <span>
            <h2>{{ tiketDetail.city_departure.toUpperCase() }} ({{tiketDetail.country_departure}})</h2>
            <img src="../../../../public/img/icons/ticket_d/chnge.png" alt="">
            <h2>{{ tiketDetail.city_arrived.toUpperCase() }} ({{tiketDetail.country_arrived}})</h2>
          </span>
          <span>
            <p>Monday, 20 July 20</p>
            <p>&middot;</p>
            <p>{{ tiketDetail.adult_person + tiketDetail.child_person }} Passenger</p>
            <p>&middot;</p>
            <p>{{ tiketDetail.class }}</p>
          </span>
        </div>
      </div>
      <h3>Change search</h3>
    </div>
    <div class="main-content">
      <div class="filter-ticket">
        <span>
          <h1>Filter</h1>
          <h2 @click="resetCheck">Reset</h2>
        </span>

        <div class="box-filter">
          <span @click="collapse = !collapse">
            <h5>Transit</h5>
            <p>{{ collapse ? '-' : '+' }}</p>
          </span>
          <div class="list-filter" :class="{ 'collapse': !collapse }">
            <span>
              <p>Direct</p>
               <input type="radio" name="Transit" value="direct" v-model="query.transit" @click="uncheck('Transit','direct')">
            </span>
            <span>
              <p>Transit</p>
               <input type="radio" name="Transit" value="transit" v-model="query.transit" @click="uncheck('Transit','transit')">
            </span>
          </div>
        </div>

        <div class="box-filter">
          <span @click="collapseTwo = !collapseTwo">
            <h5>Departure Time</h5>
            <p>{{ collapseTwo ? '-' : '+' }}</p>
          </span>
          <div class="list-filter" :class="{ 'collapse': !collapseTwo }">
             <span>
              <p>00:00 - 06:00</p>
               <input type="radio" name="time_departure" value="00:00-06:00" v-model="query.time_departure" @click="uncheck('time_departure','00:00-06:00')">
            </span>
            <span>
              <p>06:00 - 12:00</p>
               <input type="radio" name="time_departure" value="06:00-12:00" v-model="query.time_departure" @click="uncheck('time_departure','06:00-12:00')">
            </span>
             <span>
              <p>12:00 - 18:00</p>
               <input type="radio" name="time_departure" value="12:00-18:00" v-model="query.time_departure" @click="uncheck('time_departure','12:00-18:00')">
            </span>
            <span>
              <p>18:00 - 24:00</p>
               <input type="radio" name="time_departure" value="18:00-24:00" v-model="query.time_departure" @click="uncheck('time_departure','18:00-24:00')">
            </span>
          </div>
        </div>

        <div class="box-filter">
          <span @click="collapseThree = !collapseThree">
            <h5>Time Arrived</h5>
            <p>{{ collapseThree ? '-' : '+' }}</p>
          </span>
          <div class="list-filter" :class="{ 'collapse': !collapseThree }">
             <span>
              <p>00:00 - 06:00</p>
               <input type="radio" name="time_arrived" value="00:00-06:00" v-model="query.time_arrived" @click="uncheck('time_arrived','00:00-06:00')">
            </span>
            <span>
              <p>06:00 - 12:00</p>
               <input type="radio" name="time_arrived" value="06:00-12:00" v-model="query.time_arrived" @click="uncheck('time_arrived','06:00-12:00')">
            </span>
             <span>
              <p>12:00 - 18:00</p>
               <input type="radio" name="time_arrived" value="12:00-18:00" v-model="query.time_arrived" @click="uncheck('time_arrived','12:00-18:00')">
            </span>
            <span>
              <p>18:00 - 24:00</p>
               <input type="radio" name="time_arrived" value="18:00-24:00" v-model="query.time_arrived" @click="uncheck('time_arrived','18:00-24:00')">
            </span>
          </div>
        </div>

        <div class="box-filter">
          <span @click="collapseFour = !collapseFour">
            <h5>Airlines</h5>
            <p>{{ collapseFour ? '-' : '+' }}</p>
          </span>
          <div class="list-filter" :class="{ 'collapse': !collapseFour }">
             <span>
              <p>Air Asia</p>
               <input type="radio" name="name_maskapai" value="air_asia" v-model="query.name_maskapai" @click="uncheck('name_maskapai','air_asia')">
            </span>
            <span>
              <p>Garuda Indonesia</p>
               <input type="radio" name="name_maskapai" value="garuda" v-model="query.name_maskapai" @click="uncheck('name_maskapai','garuda')">
            </span>
             <span>
              <p>Lion Air</p>
               <input type="radio" name="name_maskapai" value="lion_air" v-model="query.name_maskapai" @click="uncheck('name_maskapai','lion_air')">
            </span>
          </div>
        </div>

      </div>
      <div class="list-ticket">
        <div class="box-list-ticket" v-for="tkt in dataTickets.result" :key="tkt.id">
          <div class="ticket-title">
            <img :src="tkt.images" alt="logo">
            <p>{{ tkt.name_maskapai.toUpperCase().replace('_', ' ')  }}</p>
          </div>
          <div class="ticket-detail">
              <div class="info-detail">
                <div class="flight-route">
                  <span>
                    <h1>{{ tkt.country_departure }}</h1>
                    <p>{{ tkt.time_departure.slice(0,5) }}</p>
                  </span>
                    <img src="../../../../public/img/icons/ticket_d/flightgrey.png" alt="">
                  <span>
                    <h1>{{ tkt.country_arrived }}</h1>
                    <p>{{ tkt.time_arrived.slice(0,5) }}</p>
                  </span>
                </div>

                <div class="flight-time">
                  <p>3 hours 11 minutes</p>
                  <p>( 1 Transit )</p>
                </div>

                <div class="flight-facilities">
                  <img src="../../../../public/img/icons/ticket_d/bag.png" alt="bag">
                  <img src="../../../../public/img/icons/ticket_d/brgr.png" alt="burger">
                  <img src="../../../../public/img/icons/ticket_d/wifi.png" alt="Wifi">
                </div>

                <div class="flight-price">
                  <h5>Rp. {{ tkt.price.toLocaleString('id-ID') }}</h5>
                  <p>/pax</p>
                </div>
              </div>
              <button @click="toPage(tkt)">SELECT</button>
          </div>
          <span><p>View Details ></p></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Ticket',
  computed: {
    ...mapState(['dataTickets']),
    tiketDetail () {
      return this.dataTickets.result[0]
    }
  },
  data () {
    return {
      checkbox: '',
      collapse: false,
      collapseTwo: false,
      collapseThree: false,
      collapseFour: false,
      query: {
        transit: '',
        time_departure: '',
        time_arrived: '',
        name_maskapai: ''
      },
      search: {
        class: '',
        child_person: 0,
        adult_person: 0,
        date_departure: '',
        ticket_type: 'one_way',
        city_departure: 'City',
        city_arrived: 'City',
        country_departure: 'Country',
        country_arrived: 'Country'
      }
    }
  },
  methods: {
    ...mapActions(['getDataSearch']),
    toPage (tkt) {
      this.$router.push(`/main/ticket/${tkt.id}`)
    },
    resetCheck () {
      const data = this.filters
      data.map((e) => {
        e.li.check = false
      })
    },
    uncheck (filter, name) {
      if (filter === 'Transit') {
        if (name === this.transit) {
          this.transit = ''
        }
      } else if (filter === 'time_departure') {
        if (name === this.time_departure) {
          this.time_departure = ''
        }
      } else if (filter === 'time_arrived') {
        if (name === this.time_arrived) {
          this.time_arrived = ''
        }
      } else if (filter === 'name_maskapai') {
        if (name === this.name_maskapai) {
          this.name_maskapai = ''
        }
      }
      setTimeout(() => {
        const payload = {
          transit: this.transit,
          time_departure: this.time_departure,
          time_arrived: this.time_arrived,
          name_maskapai: this.name_maskapai
        }
        this.$store.commit('SET_FILTER', payload)
      }, 50)
      this.getDataSearch({ search: this.tiketDetail, query: this.query })
    }
  }
}
</script>

<style scoped>
.wrap-ticket_d {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header-ticket_d {
  width: 100%;
  height: 176px;
  background: #2395FF;
  border-radius: 0px 0px 30px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-repeat: no-repeat;
  background-position-x: -0.59%;
  background-position-y: 90%;
  background-image: url('../../../../public/img/icons/ticket_d/bluefly.png');
}
.header-ticket_d h3 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  margin-right: 70px;
}
.flight-line {
  display: flex;
  justify-content: space-between;
  margin-left: 138px;
  /* width: 230px; */
  align-items: center;
}
.flight-line img {
  width: 50px;
  height: 35px;
}
.det-flight {
  /* width: 230px; */
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.det-flight span {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.det-flight span:nth-child(2) {
  margin: 7px 0 7px 0;
}
.det-flight span p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
}
.det-flight span img {
  width: 17px;
  height: 17px;
  margin: 0 15px 0 15px;
}
.det-flight span h2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
}

/* MAIN CONTENT */

.main-content {
  width: 95%;
  margin-top: 13px;
  margin-bottom: 13px;
  display: flex;
  /* background-color: rgb(158, 107, 107); */
}
.filter-ticket {
  flex: .3;
  display: flex;
  /* background-color: #2395FF; */
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
}

.filter-ticket span{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.filter-ticket span h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
}
.filter-ticket span h2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2395FF;
}

.box-filter {
  width: 95%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  padding: 20px 10px 6px 10px;
  position: relative;
}
.box-filter:first-child {
  border-top-left-radius: 15px!important;
  border-top-right-radius: 15px!important;
  /* background-color: blue!important; */
}
.box-filter:last-child {
  border-bottom-left-radius: 15px!important;
  border-bottom-right-radius: 15px!important;
  /* background-color: blue!important; */
}
.box-filter::after {
  content: '';
  position: relative;
  bottom: 0;
  width: 96%;
  height: 1px;
  background-color: #e5e5e5e5;
  margin: 7px auto;
}
.box-filter span {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.box-filter span h5 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
}
.box-filter span p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  color: #2395FF;
  /* background-color: blue; */
  padding: 0 0 0 33px;
  cursor: pointer;
}
.list-filter {
  display: flex;
  flex-direction: column;
  margin-top: 4px;
}
.collapse{
  display: none!important;
  transition: 1s;
}
.list-filter span {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-filter span p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
  padding: 0;
}

.list-ticket {
  flex: 1;
  display: flex;
  /* background-color: #859baf; */
  flex-direction: column;
  padding: 10px;
}

.head-list-ticket {
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 10px 0 10px;
}
.head-list-ticket span {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.head-list-ticket span h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  margin-right: 9px;
}
.head-list-ticket span p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
  color: #909090;
}
.head-list-ticket span h3 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-right: 15px;
}
.head-list-ticket span img {
  width: 17px;
  height: 17px;
}

.box-list-ticket {
  width: 100%;
  padding: 35px;
  background: #FFFFFF;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.box-list-ticket:last-child {
  margin-bottom: 0;
}
.box-list-ticket span p{
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2395FF;
  cursor: pointer;
}
.ticket-title {
  display: flex;
  align-items: center;
}
.ticket-title img {
  width: 100px;
  height: 50px;
  margin-right: 25px;
  object-fit: cover;
}
.ticket-title p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #595959;
}

.ticket-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  margin: 34px 0 35px 0;
}
.ticket-detail button {
  width: 150px;
  height: 50px;
  background: #2395FF;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  border: none;
  outline: none;
}
.info-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
}
.flight-time {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flight-time p{
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #595959;
}
.flight-facilities {
  display: flex;
  align-items: center;
}
.flight-facilities img:nth-child(2){
  margin: 0 17px 0 17px;
}
.flight-route {
  display: flex;
  /* align-items: center; */
}
.flight-route span h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 22px;
  color: #000000;
}
.flight-price {
  display: flex;
  align-items: center;
}
.flight-price h5 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #2395FF;
}
.flight-price p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #8d8d8d;
}
.flight-route span p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  color: #6B6B6B;
}
.flight-route img {
  margin: 0 27px 0 27px;
  width: 19px;
  height: 19px;
}
/* IPAD PRO */
@media only screen and (max-width: 1024px) {
  .flight-line {
    margin-left: 50px;
  }
  .header-ticket_d h3 {
    margin-right: 50px;
  }
  .box-list-ticket {
  width: 100%;
  padding: 35px;
  background: #FFFFFF;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.box-list-ticket:last-child {
  margin-bottom: 0;
}
.box-list-ticket span p{
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2395FF;
  cursor: pointer;
}
.ticket-title {
  display: flex;
  align-items: center;
}
.ticket-title img {
  width: 100px;
  height: 50px;
  margin-right: 25px;
}
.ticket-title p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #595959;
}

.ticket-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  margin: 34px 0 35px 0;
}
.ticket-detail button {
  width: 110px;
  height: 40px;
  background: #2395FF;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  border: none;
  outline: none;
}
.info-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}
.flight-time {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flight-time p{
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 22px;
  color: #595959;
}
.flight-facilities {
  display: flex;
  align-items: center;
}
.flight-facilities img:nth-child(2){
  margin: 0 17px 0 17px;
}
.flight-route {
  display: flex;
  /* align-items: center; */
}
.flight-route span h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
}
.flight-price {
  display: flex;
  align-items: center;
}
.flight-price h5 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
  color: #2395FF;
}
.flight-price p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  color: #8d8d8d;
}
.flight-route span p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  color: #6B6B6B;
}
.flight-route img {
  margin: 0 27px 0 27px;
  width: 19px;
  height: 19px;
}
}

/* IPAD OLD */

@media only screen and (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }
  .box-filter {
    width: 95%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-self: center;
    padding: 20px 10px 6px 10px;
    position: relative;
  }
}
/* PHONE */
@media only screen and (max-width: 414px) {
  .header-ticket_d {
    height: 120px;
    background-size: 40%;
  }
  .flight-line {
    margin-left: 20px;
  }
  .header-ticket_d h3 {
    margin-right: 10px;
  }
  .flight-line img {
    width: 20px;
    height: 20px;
  }
  .flight-line span {
    align-items: center;
  }
  .det-flight span h2 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 24px;
    color: #FFFFFF;
}
.det-flight span:nth-child(2) {
  margin: 4px 0 4px 0;
}
.det-flight span p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  color: #FFFFFF;
}
.det-flight span img {
  width: 14px;
  height: 14px;
  margin: 0 10px 0 10px;
}
.header-ticket_d h3 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 24px;
  color: #FFFFFF;
  margin-right: 20px;
}
.flight-time {
  display: none;
}
.flight-facilities {
  display: none;
}
.box-list-ticket span p{
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2395FF;
  cursor: pointer;
}
.ticket-title {
  display: flex;
  align-items: center;
}
.ticket-title img {
  width: 100px;
  height: 50px;
  margin-right: 25px;
}
.ticket-title p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #595959;
}

.ticket-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  margin: 34px 0 35px 0;
}
.ticket-detail button {
  width: 70px;
  height: 30px;
  background: #2395FF;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 24px;
  color: #FFFFFF;
  border: none;
  outline: none;
}
.info-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}
.flight-route {
  display: flex;
  /* align-items: center; */
}
.flight-route span h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
}
.flight-price {
  display: flex;
  align-items: center;
  margin-right: 8px;
}
.flight-price h5 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
  color: #2395FF;
}
.flight-price p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 22px;
  color: #8d8d8d;
}
.flight-route span p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  color: #6B6B6B;
}
.flight-route img {
  margin: 0 18px 0 18px;
  width: 14px;
  height: 14px;
}
.head-list-ticket {
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 10px 0 10px;
}
.head-list-ticket span {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.head-list-ticket span h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 36px;
  color: #000000;
  margin-right: 9px;
}
.head-list-ticket span p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 36px;
  color: #909090;
}
.head-list-ticket span h3 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  color: #000000;
  margin-right: 15px;
}
.head-list-ticket span img {
  width: 15px;
  height: 15px;
}
}
</style>
