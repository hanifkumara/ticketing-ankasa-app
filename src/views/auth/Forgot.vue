<template>
  <div>
    <!-- Title Login -->
    <h1>Forgot Password</h1>
    <div class="space-32 w-100"></div>
    <!-- Form Login -->
    <form @submit.prevent="login">
      <!-- Email -->
      <input :class="this.errEmail === 'err' ? 'form-input-err':'form-input' " @input="handleEmail" v-model="email" type="email" placeholder="Email" required>
      <div class="space-32 w-100"><h4 v-if="this.errEmail === 'err'" class="mt-2">Format email is incorrect</h4></div>
      <div class="space-32 w-100"></div>
      <!-- Button Register -->
      <button type="submit">Send</button>
    </form>
    <!-- Message -->
    <div class=" space-55 d-flex flex-column justify-content-center align-items-center w-100" >
      <h6>You’ll get message soon on your email</h6>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'Forgot',
  data () {
    return {
      // Data
      email: '',
      // Form Validation
      errEmail: ''
    }
  },
  methods: {

    handleEmail () {
      if (!this.email.includes('@')) {
        this.errEmail = 'err'
      } else {
        this.errEmail = ''
      }
    },
    login () {
      const email = this.email
      const data = {
        email
      }
      if (email === '') {
        return Swal.fire('Failed', 'Fill up your email', 'error')
      }
      console.log(data)
      Swal.fire('Success', 'Check your email now', 'success')
      this.$router.push('/main/search')
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

.space-55 {
  height: 55px;
  h6 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #595959;
  }
}

</style>
