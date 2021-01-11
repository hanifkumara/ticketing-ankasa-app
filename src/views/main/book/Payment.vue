<template>
  <div class="container-fluid">
    <div class="container big-box">
      <h1 class="title-page mb-5">Payment Booking</h1>
      <h2 class="sub-title mb-2">Order Name</h2>
      <h3 class="desc mb-4">{{name}}</h3>
      <h2 class="sub-title mb-2">Status</h2>
      <div class="status mb-4 d-flex justify-content-center align-items-center">Waiting For Payment</div>
      <h2 class="sub-title mb-2">Flight Detail</h2>
      <div class="row mb-4">
        <div class="col-lg-7">
          <div class=" w-100 d-flex align-items-center justify-content-between mb-2">
            <h4 class="small-desc col-4">Country :</h4>
            <div class="col">
              <span class="desc">{{country_departure}}</span>
              <img class=" mx-4" src="../../../assets/main/arrow.svg" alt="">
              <span class="desc">{{country_arrived}}</span>
            </div>
          </div>
          <div class=" w-100 d-flex align-items-center justify-content-between mb-2">
            <h4 class="small-desc col-4">City :</h4>
            <div class="col">
              <span class="desc">{{changeType(city_departure)}}</span>
              <img class=" mx-4" src="../../../assets/main/arrow.svg" alt="">
              <span class="desc">{{changeType(city_arrived)}}</span>
            </div>
          </div>
          <div class=" w-100 d-flex align-items-center justify-content-between mb-2">
            <h4 class="small-desc col-4">Date :</h4>
            <span class="desc col">{{date_departure}}</span>
          </div>
          <div class=" w-100 d-flex align-items-center justify-content-between mb-2">
            <h4 class="small-desc col-4">Time :</h4>
            <span class="desc col">{{time_departure}}</span>
          </div>
          <div class=" w-100 d-flex align-items-center justify-content-between mb-2">
            <h4 class="small-desc col-4">Ticket Type :</h4>
            <span class="desc col">{{changeType(ticket_type)}}</span>
          </div>
          <div class=" w-100 d-flex align-items-center justify-content-between mb-2">
            <h4 class="small-desc col-4">Transit :</h4>
            <span class="desc col">{{changeType(transit)}}</span>
          </div>
          <div class=" w-100 d-flex align-items-center justify-content-between mb-2">
            <h4 class="small-desc col-4">Class :</h4>
            <span class="desc col">{{changeType(classes)}}</span>
          </div>
          <div class=" w-100 d-flex align-items-center justify-content-between mb-2">
            <h4 class="small-desc col-4">Child Person :</h4>
            <span class="desc col">{{child_person}}</span>
          </div>
          <div class=" w-100 d-flex align-items-center justify-content-between mb-2">
            <h4 class="small-desc col-4">Adult Person :</h4>
            <span class="desc col">{{adult_person}}</span>
          </div>
          <div class=" w-100 d-flex align-items-center justify-content-between mb-2">
            <h4 class="small-desc col-4">Airlines :</h4>
            <span class="desc col">{{changeType(name_maskapai)}}</span>
          </div>
        </div>
      </div>
      <h2 class="sub-title mb-2">Price</h2>
      <h3 class="desc mb-4">{{price.toLocaleString('id-ID')}} IDR</h3>
      <div class=" d-flex justify-content-end">
        <div @click="payBooking" class="btn-pay col-md-3 d-flex justify-content-center align-items-center">Pay Now</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  name: 'Payment',
  data () {
    return {
      name: '.',
      id: '.',
      price: 0,
      transit: '.',
      child_person: '.',
      adult_person: '.',
      ticket_type: '.',
      classes: '.',
      date_departure: '.',
      time_departure: '.',
      country_departure: '.',
      country_arrived: '.',
      city_departure: '.',
      city_arrived: '.',
      name_maskapai: '.'
    }
  },
  methods: {
    changeType (data) {
      if (data.includes('_')) {
        const split = data.split('_')
        const one = split[0][0].toUpperCase() + split[0].slice(1)
        const two = split[1][0].toUpperCase() + split[1].slice(1)
        return `${one} ${two}`
      } else {
        const one = data[0].toUpperCase() + data.slice(1)
        return `${one}`
      }
    },
    getUrl () {
      const url = window.location.pathname
      const id = url.split('/')[3]
      console.log(id)
      axios.get(`${process.env.VUE_APP_BASE_URL}/booking/my-booking-detail/${id}`)
        .then((res) => {
          const data = res.data.result[0].ticket
          const id = res.data.result[0].id
          this.id = id
          this.price = parseInt(data.price)
          this.transit = data.transit
          this.child_person = data.child_person
          this.adult_person = data.adult_person
          this.ticket_type = data.ticket_type
          this.classes = data.class
          this.date_departure = data.date_departure
          this.time_departure = data.time_departure
          this.country_departure = data.country_departure
          this.country_arrived = data.country_arrived
          this.city_departure = data.city_departure
          this.city_arrived = data.city_arrived
          this.name_maskapai = data.name_maskapai
          axios.get(`${process.env.VUE_APP_BASE_URL}/users/my-profile`)
            .then((res) => {
              const name = res.data.result.fullname
              this.name = name
            })
            .catch((err) => {
              console.log(err)
            })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    payBooking () {
      axios.patch(`${process.env.VUE_APP_BASE_URL}/booking/update/${this.id}`)
        .then((res) => {
          console.log(res.data)
          Swal.fire('Success', 'You have paid your booking, lets fly with us', 'success')
          this.$router.push(`/main/mybook/${this.id}`)
        })
        .catch((err) => {
          console.log(err.response.data)
          return Swal.fire('Failed', 'Failed pay your booking, try again later', 'error')
        })
    }
  },
  mounted () {
    this.getUrl()
  }
}
</script>

<style lang="scss" scoped>

.btn-pay {
  margin: 0 10px 10px 0;
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
  cursor: pointer;
}

.btn-pay:hover {
  opacity: .8;
}

.container-fluid {
  padding: 50px 0;
  background-color: #F5F6FA;
}

.big-box {
  background: #FFFFFF;
  border-radius: 15px;
  padding: 30px;
}

.title-page {
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2em;
  color: #414141;
}

.sub-title {
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.2em;
  color: #c9c9c9;
}

.desc {
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2em;
  color: #414141;
}

.small-desc {
  padding: 0 15px 0 0;
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2em;
  color: #555;
}

.status {
  background: #FF7F23;
  border-radius: 6px;
  width: 184px;
  height: 36px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
}

</style>
