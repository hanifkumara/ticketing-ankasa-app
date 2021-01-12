<template>
  <div class="wrap-detail_t">
    <div class="header-detail_t">
    </div>
    <div class="section-detail">
      <div class="person-detail">
        <div class="heading-span">
          <h1>Personal Information</h1>
        </div>
        <div class="box-person-detail">
          <div class="group-input">
            <label for="name">Full Name</label>
            <div class="input-wrap">
              <input type="text" :value="dataUser.fullname" disabled>
            </div>
          </div>
          <div class="group-input">
            <label for="name">Email</label>
            <div class="input-wrap">
              <input type="text" :value="dataUser.email" disabled>
            </div>
          </div>
          <div class="group-input">
            <label for="name">Phone Number</label>
            <div class="input-wrap">
              <select name="phoneNumber" id="phone" >
                <option value="+62">+62</option>
                <option value="+11">+11</option>
                <option value="+53">+53</option>
                <option value="+10">+10</option>
              </select>
              <input type="text" value="" placeholder="...">
            </div>
          </div>
          <div class="warning-msg">
            <img src="../../../../public/img/icons/ticket_d/warning.png" alt="">
            <p>Make sure the customer data is correct.</p>
          </div>
        </div>
        <div class="heading-span">
          <h2>Passenger Detail</h2>
        </div>
        <div class="box-person-detail">
          <div class="passenger-add">
            <span><p>Passenger : Adult 1</p></span>
            <span>
              <p>Same as conatct person</p>
              <input type="checkbox" name="same" id="same">
            </span>
          </div>
          <div class="group-input">
            <label for="name">Title</label>
            <div class="input-wrap">
              <select name="phoneNumber" id="phone">
                <option value="Mr ">Mr</option>
                <option value="Mrs. ">Mrs</option>
              </select>
              <input type="text" value="" disabled>
            </div>
          </div>
          <div class="group-input">
            <label for="name">Full Name</label>
            <div class="input-wrap">
              <input type="text" value="Mitnick Roger" disabled>
            </div>
          </div>
          <div class="group-input">
            <label for="name">Nationality</label>
            <div class="input-wrap">
              <select name="phoneNumber" id="phone" disable="false">
                <option value="indonesia">Indonesia</option>
                <option value="malaysia">Malaysia</option>
              </select>
              <input type="text" value="" disabled>
            </div>
          </div>
        </div>
        <div class="heading-span">
          <h2>Passenger Detail</h2>
        </div>
        <div class="box-person-detail">
          <div class="checkbox-details">
            <span>
              <input type="checkbox" name="insurance" id="insurance">
              <p>Insurance</p>
            </span>
            <span>
              <h3>Rp. 23.000</h3>
              <p> /pax</p>
            </span>
          </div>
          <span>
            <p>Get travel compensation up to $ 10.000,00</p>
          </span>
        </div>
        <div class="btn-detail">
          <button @click="createBooking">Proceed to payment</button>
        </div>
      </div>
      <div class="flight-detail">
        <div class="heading-span">
          <h1>Flight Details</h1>
        </div>
        <div class="box-flight-detail">
            <div class="airlines-det">
              <img :src="tiket.images" alt="airlines">
              <p>{{ tiket.name_maskapai }}</p>
            </div>
            <div class="flight-route">
              <span>
                <h1>{{ tiket.city_departure.toUpperCase() }} ({{tiket.country_departure}})</h1>
              </span>
                <img src="../../../../public/img/icons/ticket_d/flightgrey.png" alt="">
              <span>
                <h1>{{ tiket.city_arrived.toUpperCase() }} ({{tiket.country_arrived}})</h1>
              </span>
            </div>
            <span>
              <p>Sunday, 15 August 2020 &middot; {{ tiket.time_departure.slice(0,5) }} - {{ tiket.time_arrived.slice(0,5) }}</p>
            </span>
            <div class="blue-text">
              <p>Refundable</p>
            </div>
            <div class="blue-text">
              <p>Can reschedule</p>
            </div>
            <div class="price-info">
              <h2>Total payment</h2>
              <h1>Rp. {{ tiket.price.toLocaleString('id-ID') }}</h1>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'DetailTicket',
  data () {
    return {
      user: ''
    }
  },
  computed: {
    ...mapState(['dataUser', 'dataTickets']),
    userData () {
      return this.dataUser.data.result
    },
    tiket () {
      return this.dataTickets.result[0]
    }
  },
  methods: {
    ...mapActions(['getMyProfile']),

    createBooking () {
      const data = {
        ticket_id: this.$route.params.id,
        status: 'pending'
      }
      this.$store.dispatch('createBooking', data).then((result) => {
        if (result.data.message === 'created successfully') {
          this.$router.push('/main/mybook')
        }
      })
        .catch((error) => console.log(error))
    }
  },
  async mounted () {
    this.user = await this.getMyProfile()
  }
}
</script>

<style scoped>
.wrap-detail_t {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header-detail_t {
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
.section-detail {
  display: flex;
  width: 90%;
  justify-content: space-between;
  /* background:#f00; */
  /* position: relative;
  top: -150px; */
  margin-top: -190px;
}
.person-detail {
  flex: .8;
  display: flex;
  flex-direction: column;
  /* background-color: blueviolet; */
  padding: 13px
}
.heading-span {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 50px;
}
.heading-span:nth-child(3) {
  margin-top: 50px;
  /* background: red; */
}
.heading-span:nth-child(4) {
  margin-top: 50px;
  /* background: red; */
}
.heading-span h1{
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #FFFFFF;
}
.heading-span h2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
}

.box-person-detail {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  border-radius: 15px;
}
.group-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 7px;
  border-bottom: 2px solid rgba(210, 194, 255, 0.68);
  margin-bottom: 23px;
}
.group-input label {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #9B96AB;
}
.input-wrap {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}

.input-wrap input {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  border: none;
  outline: none;
  width: 92%;
}
.input-wrap select {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  border: none;
  border-right: 2px solid rgba(210, 194, 255, 0.68);
  outline: none;
  background: none;
  width: 8%;
  padding-right: 10px;
  margin-right: 10px;
}

.warning-msg {
  height: 50px;
  width: 100%;
  display: flex;
  background: rgba(242, 69, 69, 0.1);
  border-radius: 10px;
  align-items: center;
  padding-left: 20px;
  margin-bottom: 14px;
}
.warning-msg p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  line-height: 17px;
  color: #595959;
}
.warning-msg img {
  width: 18px;
  height: 18px;
  margin-right: 13px;
}

.flight-detail {
  flex: .4;
  display: flex;
  flex-direction: column;
  /* background-color: rgb(120, 104, 136); */
  padding: 13px;
}
.box-flight-detail {
  width: 100%;
  padding: 18px;
  background: #FFFFFF;
  border-radius: 15px;
}
.box-flight-detail span p{
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  color: #6B6B6B;
}
.airlines-det {
  display: flex;
  align-items: center;
}
.airlines-det img {
  width: 100px;
  height: 50px;
  margin-right: 25px;
  object-fit: cover;
}
.airlines-det p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #595959;
}
.flight-route {
  display: flex;
  /* align-items: center; */
  margin: 20px 0;
}
.flight-route span h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
}
.flight-route img {
  margin: 0 27px 0 27px;
  width: 19px;
  height: 19px;
}
.blue-text {
  display: flex;
  width: 30%;
  margin-top: 13px;
}
.blue-text p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #2395FF;
  padding: 5px 8px;
  border-radius: 10px;
  border: 1px solid #2395ff;
}
.price-info {
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e6e6e6e6;
  margin-top: 20px;
}
.price-info h2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
}
.price-info h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #2395FF;
}

.passenger-add {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: rgba(35, 149, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 30px;
}
.passenger-add span {
  display: flex;
  align-items: center;
}
.passenger-add span input {
  display: flex;
  width: 50px;
  height: 23px;
  background: #e6e6e6e6;
  margin-left: 10px;
  border-radius: 30px;
  cursor: pointer;
  -webkit-appearance: none;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: .5s;
}
.passenger-add span input:checked {
  background: #2395ff;
  transition: .5s;
}
.passenger-add span input::before {
  content: '';
  width: 23px;
  height: 23px;
  background: #FFFFFF;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  transform: scale(1.3,1.3);
  transition: .5s;
}
.passenger-add span input:checked::before {
  position: absolute;
  right: 0;
  transition: 1.7s;
}

.passenger-add span p {
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #595959;
}
.checkbox-details {
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E6E6E6;;
}
.checkbox-details span {
  display: flex;
  align-items: center;
}
.checkbox-details span p {
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
}
.checkbox-details span h3 {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #2395FF;
}
.checkbox-details span input {
  border: 2px solid #2395FF;
  margin-right: 15px;
}
.box-person-detail span {
  display: flex;
  align-items: center;
  margin-top: 15px;
}
.box-person-detail span p{
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
}
.btn-detail {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
}
.btn-detail button {
  width: 319px;
  height: 57px;
  background: #2395FF;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #FFFFFF;
  border: none;
  outline: none;
}

/* IPAD PRO */

@media only screen and (max-width: 1024px) {
  .section-detail {
    flex-direction: column;
  }
  .person-detail {
    order: 2;
  }
  .box-flight-detail span p{
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  color: #6B6B6B;
}
.airlines-det {
  display: flex;
  align-items: center;
}
.airlines-det img {
  width: 100px;
  height: 50px;
  margin-right: 25px;
}
.airlines-det p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #595959;
}
.flight-route {
  display: flex;
  /* align-items: center; */
  margin: 20px 0;
}
.flight-route span h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
}
.flight-route img {
  margin: 0 27px 0 27px;
  width: 19px;
  height: 19px;
}
.blue-text {
  display: flex;
  width: 30%;
  margin-top: 13px;
}
.blue-text p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #2395FF;
  padding: 5px 8px;
  border-radius: 10px;
  border: 1px solid #2395ff;
}
.price-info {
  width: 100%;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e6e6e6e6;
  margin-top: 20px;
}
.price-info h2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
}
.price-info h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #2395FF;
}
}
</style>
