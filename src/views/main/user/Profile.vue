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
            <h6 class="text-center mt-2" v-if="setMyProfile.city && setMyProfile.country">{{setMyProfile.city}}, {{setMyProfile.country}}</h6>
            <h6 class="text-center mt-2" v-else>You hanve't set City and Country</h6>
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
              <div @click="logout" class="profile">
                <div class="icon">
                  <img src="@/assets/image/Vector (2).png" alt="Icon Logout">
                </div>
                <p>Logout</p>
              </div>
              <b-modal hide-footer id="modal-1" title="Update my Profile" class="modal-update">
                <h4>Contact :</h4>
                <label for="">Email</label>
                <input type="text" class="form-control" :placeholder="setMyProfile.email">
                <label for="">Phone</label>
                <input type="text" class="form-control" :placeholder="setMyProfile.phone">
                <h4 style="margin-top: 30px">Biodata :</h4>
                <label for="">Fullname</label>
                <input type="text" class="form-control" :placeholder="setMyProfile.fullname">
                <label for="">City</label>
                <input type="text" class="form-control" v-if="setMyProfile.city" :placeholder="setMyProfile.city">
                <input type="text" class="form-control" v-else placeholder="Please set your city">
                <label for="">Country</label>
                <input type="text" class="form-control" v-if="setMyProfile.country" :placeholder="setMyProfile.country">
                <input type="text" class="form-control" v-else placeholder="Please set your country">
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
          <div class="right-content">
            <p style="font-size: 14px; margin-bottom: 15px;">PROFILE</p>
            <h3 style="margin-bottom: 30px;">Profile</h3>
            <form @submit.prevent="handleSubmit">
              <div class="form-profile d-flex justify-content-between">
                <div class="left-form">
                  <h4>Contact</h4>
                    <label for="email">Email</label>
                    <input class="form-control" id="email" type="text" @input="handleEmail" v-model="setMyProfile.email" autocomplete="off">
                    <p class="text-danger validation" v-if="errEmail">Format email invalid</p>
                    <label for="phone">Phone</label>
                    <input class="form-control" id="phone" type="text" v-if="setMyProfile.phone" v-model="setMyProfile.phone" :placeholder="setMyProfile.phone"  autocomplete="off">
                    <input class="form-control" id="phone" type="text" v-else v-model="setMyProfile.phone" placeholder="Please set your phone number" autocomplete="off">
                </div>
                <div class="right-form">
                  <h4>Biodata</h4>
                    <label for="fullname">Fullname</label>
                    <input class="form-control" id="fullname" type="text" @input="handleFullname" v-model="setMyProfile.fullname" :placeholder="setMyProfile.fullname" autocomplete="off">
                    <p class="text-danger validation" v-if="errFullname">Fullname must than 7 char</p>
                    <label for="city">City</label>
                    <input type="text" class="form-control" v-if="setMyProfile.city" v-model="setMyProfile.city" autocomplete="off">
                    <input type="text" class="form-control" v-else v-model="setMyProfile.city" placeholder="Please set your city" autocomplete="off">
                    <label for="country">Country</label>
                    <input type="text" class="form-control" v-if="setMyProfile.country" v-model="setMyProfile.country" autocomplete="off">
                    <input type="text" class="form-control" v-else v-model="setMyProfile.country" placeholder="Please set your country" autocomplete="off">
                </div>
              </div>
              <div class="button-save">
                <button class="save">
                  Save
                </button>
              </div>
            </form>
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
  name: 'Profile',
  data () {
    return {
      email: '',
      phone: '',
      fullname: '',
      city: '',
      country: '',
      errEmail: '',
      errFullname: '',
      image: null
    }
  },
  methods: {
    ...mapActions(['updateProfile', 'getMyProfile', 'logout']),
    handlePhoto (e) {
      const result = e.target.files[0]
      const data = new FormData()
      data.append('photo', result)
      this.updateProfile(data)
        .then(res => {
          console.log(res)
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
    },
    handleSubmit () {
      if (!this.setMyProfile.email) {
        Swal.fire(
          'Fill email required',
          '',
          'error'
        )
        return
      }
      if (!this.setMyProfile.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        Swal.fire(
          'Format email invalid',
          '',
          'error'
        )
        return
      }
      if (!this.setMyProfile.phone) {
        Swal.fire(
          'Fill phone required',
          '',
          'error'
        )
        return
      }
      if (!this.setMyProfile.fullname) {
        Swal.fire(
          'Fill fullname required',
          '',
          'error'
        )
        return
      }
      if (this.setMyProfile.fullname.length <= 7) {
        Swal.fire(
          'Fullname must than 7 char',
          '',
          'error'
        )
        return
      }
      if (!this.setMyProfile.city) {
        Swal.fire(
          'Fill city required',
          '',
          'error'
        )
        return
      }
      if (!this.setMyProfile.country) {
        Swal.fire(
          'Fill country required',
          '',
          'error'
        )
      } else {
        const payload = {
          email: this.setMyProfile.email,
          phone: this.setMyProfile.phone,
          fullname: this.setMyProfile.fullname,
          city: this.setMyProfile.city,
          country: this.setMyProfile.country
        }
        this.updateProfile(payload)
          .then((result) => {
            this.getMyProfile()
            const { message } = result.data.result
            console.log(message)
            Swal.fire(
              message,
              '',
              'success'
            )
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    handleEmail () {
      if (!this.setMyProfile.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        this.errEmail = 'err'
      } else {
        this.errEmail = ''
      }
    },
    handleFullname () {
      if (this.setMyProfile.fullname.length <= 7) {
        this.errFullname = 'err'
      } else {
        this.errFullname = ''
      }
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
.right-content > p {
  color: #2395FF;
}
.left-form, .right-form{
  width: 48%;
}
label{
  margin-top: 30px;
}
.form-control{
  margin-top: 5px;
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(210, 194, 255, 0.68);;
  border-radius: 0;
}
.button-save{
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
button.save {
  padding: 12px 45px;
  background: #2395FF;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  border:none;
  color: white;
}
button.save:focus{
  outline: none;
}
.profile{
  margin-top: 30px;
  display: flex;
  padding: 5px 0;
}
.profile > p{
  margin: 0;
}
.profile:focus{
  outline: none;
}
input[type="file"] {
  display: none;
}
.modal-update > input{
  width: 100%;
}
.validation{
  font-size: 12px;
}
@media screen and (max-width: 767px) {
  .col-md-8{
    display: none;
  }
}
</style>
