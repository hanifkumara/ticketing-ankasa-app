/* eslint-disable no-trailing-spaces */
<template>
  <div class="bg">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="left-content">
            <div class="photo d-flex flex-column align-items-center">
              <div class="ava-profile">
                <img :src="setMyProfile.photo" alt="Ava Profile">
              </div>
                <label for="upload-photo" class="upload-photo my-4">
                  <input type="file" id="upload-photo" @change="handlePhoto" multiple>
                  Select Photo
                </label>
            </div>
            <h3 class="text-center">{{setMyProfile.fullname}}</h3>
            <h6 class="text-center mt-2">{{setMyProfile.city}}, {{setMyProfile.country}}</h6>
            <div class="container-card">
              <div class="title-card d-flex justify-content-between">
                <h6 style="font-weight: 700">Card</h6>
                <h6 style="color: #2395FF;">+ Add</h6>
              </div>
              <div class="card">
                <p class="nomor-card">12345 123456 345678</p>
                <div class="amount-card">
                  <p class="total-card">x card</p>
                  <p class="money">$1400</p>
                </div>
              </div>
            </div>
            <div class="list-butttom ml-1">
              <div @click="toProfile" class="profile">
                <div class="icon">
                  <img src="@/assets/image/user.png" alt="Icon User">
                </div>
                <p>Profile</p>
              </div>
              <div class="profile">
                <div class="icon">
                  <img src="@/assets/image/Vector.png" alt="Icon Review">
                </div>
                <p>My Review</p>
              </div>
              <div @click="toProfile" class="profile">
                <div class="icon">
                  <img src="@/assets/image/Vector (1).png" alt="Icon Settings">
                </div>
                <p>Settings</p>
              </div>
              <div class="profile">
                <div class="icon">
                  <img src="@/assets/image/Vector (2).png" alt="Icon Logout">
                </div>
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="container-my-booking">
            <p style="color: #2395FF; font-size: 14px">MY BOOKING</p>
            <div class="d-flex justify-content-between align-items-center">
              <h3>My Booking</h3>
              <p style="color: #2395FF; font-size: 14px; font-weight: 700">Order History</p>
            </div>
          </div>
          <div class="container-card-booking">
            <div class="card-booking" v-for="data in myBooking" :key="data.id">
              <p class="date-time">{{data.ticket.date_departure}} - {{data.ticket.time_departure}}</p>
              <div class="from-to d-flex">
                <h4 class="from">{{data.ticket.country_departure}}</h4>
                <div class="icon-airlines">
                  <img src="@/assets/image/Vector (3).png" alt="Icon Airlines">
                </div>
                <h4 class="to">{{data.ticket.country_arrived}}</h4>
              </div>
              <p class="desc-booking">{{data.ticket.name_maskapai}}, {{data.id}}</p>
              <hr style="color: #E6E6E6;">
              <div class="footer-card d-flex align-items-center justify-content-between">
                <div class="footer-card-left d-flex align-items-center">
                  <h6 style="margin-right: 20px;">Status</h6>
                  <div v-if="data.status === 'pending'" @click="toPayment(data.id)" class="waiting-payment">Waiting for payment</div>
                  <div v-else class="eticket-issues" @click="detailBooking(data.id)">Eticket Issues</div>
                </div>
                <div v-if="data.status === 'success'" ref="deleteBooking" @click="handleDelete(data.id)" class="footer-card-right">
                  <div class="badge badge-danger">Delete</div>
                </div>
              </div>
            </div>
            <div v-if="myBooking.length" v-observe-visibility="handleScrolledToBotom"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'

export default {
  name: 'MyBook',
  data () {
    return {
      page: 1,
      myBooking: [],
      lastPage: null
    }
  },
  methods: {
    ...mapActions(['getMyProfile', 'getMyBooking', 'updateProfile', 'deleteMyBooking']),
    handleMyBooking () {
      this.getMyBooking(this.page)
        .then(res => {
          const { rows } = res.data
          const result = Math.ceil(rows / 4)
          this.lastPage = result
          this.myBooking.push(...res.data.result)
        })
    },
    handleDelete (idBooking) {
      this.deleteMyBooking(idBooking)
        .then(() => {
          Swal.fire('Delete Success', '', 'success')
          this.$refs.deleteBooking[0].parentNode.parentNode.remove()
        })
    },
    handlePhoto (e) {
      const result = e.target.files[0]
      const data = new FormData()
      data.append('photo', result)
      this.updateProfile(data)
        .then(res => {
          Swal.fire(
            'Edit Photo success',
            '',
            'success'
          )
          this.getMyProfile()
        })
        .catch(err => {
          const error = err.response.data.message
          console.log(error)
          let message = ''
          if (error === 'Only .png, .jpg and .jpeg format allowed!') {
            message = 'Only .png, .jpg and .jpeg format allowed!'
          } else {
            message = 'Image size is too large, it must be under 2MB'
          }
          Swal.fire(
            `${message}`,
            '',
            'error'
          )
        })
    },
    detailBooking (idBooking) {
      this.$router.push({ name: 'DetailBook', params: { id: idBooking } })
    },
    toProfile () {
      this.$router.push({ name: 'Profile' })
    },
    toPayment (idBooking) {
      this.$router.push({ path: `/main/payment/${idBooking}`, params: { id: idBooking } })
    },
    handleScrolledToBotom (isVisible) {
      if (!isVisible) { return }
      if (this.page >= this.lastPage) { return }
      this.page++
      this.handleMyBooking()
    }
  },
  mounted () {
    this.getMyProfile()
    this.handleMyBooking()
    this.getMyBooking(this.page)
  },
  computed: {
    ...mapGetters(['setMyProfile'])
  }
}
</script>

<style scoped>
.bg{
  background-color: #F5F6FA;
  padding: 30px 0;
}
.left-content{
  width: 100%;
  padding: 25px 25px;
  border-radius: 15px;
  background-color: #fff;
}
.right-content{
  width: 100%;
  padding: 25px 25px;
  border-radius: 15px;
  background-color: #fff;
}
.ava-profile{
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid #2395FF;
}
.ava-profile > img {
  padding: 5px;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.upload-photo{
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #2395FF;
  color: #2395FF;
}
h3{
/* profile */
  font-size: 25px;
  font-weight: 700;
}
h4{
  font-size: 18px;
  font-weight: 700;
}
h6{
  font-size: 13px;
}
.card{
  background: #2395FF;
  box-shadow: 0px 8px 25px rgba(35, 149, 255, 0.49);
  border-radius: 10px;
  width: 100%;
  padding: 10px 20px;
}
.nomor-card{
  font-size: 14px;
  color: white;
}
.amount-card{
  font-size: 13px;
  color: #AEFAFF;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.icon{
  margin-right: 10px;
  width: 20px;
  height: 20px;
}
.icon>img{
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.container-card{
  margin-top: 30px;
}
.title-card{
  margin-bottom: 10px;
}
.list-butttom{
  margin-left: 10px;
}
.upload-photo{
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #2395FF;
  color: #2395FF;
}
input[type="file"] {
  display: none;
}
.profile{
  display: flex;
  margin-top: 30px;
  padding: 5px 0;
  cursor: pointer;
}
.profile > p{
  margin: 0;
}
.profile:focus{
  outline: none;
}
.container-my-booking{
  padding: 15px 15px;
  background: #FFFFFF;
  border-radius: 15px;
}
.container-card-booking{
  height: 610px;
  overflow: auto;
  margin-top: 30px;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px white;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: grey;
  border-radius: 10px;
}

/* Handle on hover */
.card-booking{
  margin-top: 10px;
  padding: 15px 15px;
  background: #FFFFFF;
  border-radius: 15px;
}
.waiting-payment{
  width: fit-content;
  padding: 7px 15px;
  border-radius: 7px;
  background: #FF7F23;
  color: white;
  cursor: pointer;
}
.eticket-issues{
  width: fit-content;
  padding: 7px 15px;
  color: white;
  background: #4FCF4D;
  cursor: pointer;
  border-radius: 6px;
}
.footer-card > h6{
  margin-right: 7%;
}
.icon-airlines{
  margin: 0 4%;
}
.desc-booking{
  font-size: 14px;
  color: #979797;
}
/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: grey;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000;
}

@media screen and (max-width: 767px) {
  .bg{
    background-color: white;
  }
  .col-md-4{
    display: none;
  }
  .card-booking{
    background: #FFFFFF;
    border-radius: 15px;
    box-shadow: 0 2px 2px 1px rgb(223, 216, 216);
  }
}
</style>
