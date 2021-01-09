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
              <div v-b-modal.modal-1 class="profile">
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
              <div v-b-modal.modal-1 class="profile">
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
              <b-modal hide-footer id="modal-1" title="Update my Profile" class="modal-update">
                <h4>Contact :</h4>
                <label for="">Email</label>
                <input type="text" class="form-control" placeholder="flightbooking@ankasa.com">
                <label for="">Phone</label>
                <input type="text" class="form-control" placeholder="+628739729371">
                <h4 style="margin-top: 30px">Biodata :</h4>
                <label for="">Fullname</label>
                <input type="text" class="form-control" placeholder="Hanif Kumara">
                <label for="">City</label>
                <input type="text" class="form-control" placeholder="Solo">
                <label for="">Country</label>
                <input type="text" class="form-control" placeholder="Indonesia">
                <div class="button-save">
                  <button class="save">
                    Save
                  </button>
                </div>
              </b-modal>
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
            <div class="card-booking">
              <p class="date-time">Monday, 20 July ‘20 - 12:33</p>
              <div class="from-to d-flex">
                <h4 class="from">IDN</h4>
                <div class="icon-airlines">
                  <img src="@/assets/image/Vector (3).png" alt="Icon Airlines">
                </div>
                <h4 class="to">JPN</h4>
              </div>
              <p class="desc-booking">Garuda Indonesia, AB-221</p>
              <hr style="color: #E6E6E6;">
              <div class="footer-card d-flex align-items-center">
                <h6>Status</h6>
                <!-- <div class="waiting-payment">Waiting for payment</div> -->
                <div class="eticket-issues">Eticket Issues</div>
              </div>
            </div>
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
  methods: {
    ...mapActions(['getMyProfile', 'updateProfile']),
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
          const error = err.response.data.message.message
          console.log(error)
          let message = ''
          if (error === 'Only image are allowed') {
            message = 'Only image are allowed'
          } else {
            message = 'File too large, max length 1MB'
          }
          Swal.fire(
            `${message}`,
            '',
            'error'
          )
        })
    }
  },
  mounted () {
    this.getMyProfile()
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
  margin-top: 30px;
}
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
}
.eticket-issues{
  width: fit-content;
  padding: 7px 15px;
  color: white;
  background: #4FCF4D;
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
</style>
