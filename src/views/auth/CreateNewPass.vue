<template>
  <div>
    <!-- Title Login -->
    <h1>Create New Password</h1>
    <div class="space-32 w-100"></div>
    <!-- Form Login -->
    <form @submit.prevent="createNewPass">
      <!-- Password -->
      <input :class="this.errPass === 'err' ? 'form-input-err':'form-input' " @input="handlePass" v-model="password" type="password" placeholder="Password" minlength="8" required>
      <div class="space-32 w-100"><h4 v-if="this.errPass === 'err'" class="mt-2">Password must be 8 character</h4></div>
      <!-- Same Password -->
      <input :class="this.errPass === 'err' ? 'form-input-err':'form-input' " @input="handlePass" v-model="newpass" type="password" placeholder="Same Password" minlength="8" required>
      <div class="space-32 w-100"><h4 v-if="this.errPass === 'err'" class="mt-2">Password must be 8 character</h4></div>
      <div class="space-32 w-100"></div>
      <!-- Button Register -->
      <button type="submit">Change Password</button>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'CreateNewPass',
  data () {
    return {
      // Data
      password: '',
      newpass: '',
      // Form Validation
      errPass: ''
    }
  },
  methods: {
    handlePass () {
      if (this.password.length < 8) {
        this.errPass = 'err'
      } else {
        this.errPass = ''
      }
    },
    createNewPass () {
      const password = this.password
      const newpass = this.newpass
      const data = {
        password
      }
      if (password === '') {
        return Swal.fire('Failed', 'Fill up your password', 'error')
      } else if (newpass === '') {
        return Swal.fire('Failed', 'Fill up your password twice', 'error')
      } else if (newpass !== password) {
        return Swal.fire('Failed', 'Your password are not same', 'error')
      }
      console.log(data)
      Swal.fire('Success', 'Lets go login now', 'success')
      this.$router.push('/auth/login')
    }
  }
}
</script>

<style lang="scss" scoped>

h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
  color: #000000;
}

h4 {
  color: #FF5B37;
}

.space-32 {
  height: 32px;
}

.form-input {
  width: 100%;
  padding: 18px 12px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #222125;
  border: 0;
  border-bottom: 2px solid rgba(210, 194, 255, 0.68);
}

.form-input:focus {
  width: 100%;
  padding: 18px 12px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #222125;
  border: 0;
  border-bottom: 2px solid rgba(210, 194, 255, 0.68);
}

.form-input::placeholder {
  color: #9B96AB;
}

.form-input-err {
  width: 100%;
  padding: 18px 12px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #222125;
  border: 0;
  border-bottom: 2px solid #FF5B37
}

.form-input-err:focus {
  width: 100%;
  padding: 18px 12px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #222125;
  border: 0;
  border-bottom: 2px solid #FF5B37
}

.form-input-err::placeholder {
  color: #9B96AB;
}

button {
  // Font
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #FFFFFF;
  // Size
  width: 100%;
  height: 57px;
  background: #2395FF;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  transition: .3s;
}

button:hover {
  opacity: .8;
}

.btn-go {
  // Font
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #2395FF;
  // Size
  width: 100%;
  height: 57px;
  background: #ffffff;
  border: 1px solid #2395FF;
  border-radius: 10px;
  transition: .3s;
}

.space-96 {
  height: 96px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #595959;
  border-bottom: 1px solid #D8D8D8;
  margin: 0 0 24px 0;
  h6 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #595959;
    margin: 0 0 7px 0;
  }
  p {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: underline;
    color: #2395FF;
    cursor: pointer;
  }
}

h5 {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #4D4D4D;
  margin: 0 0 24px 0;
}

</style>
