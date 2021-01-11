<template>
  <div>
    <!-- Title Login -->
    <h1>Login</h1>
    <div class="space-32 w-100"></div>
    <!-- Form Login -->
    <form @submit.prevent="login">
      <!-- Email -->
      <input :class="this.errEmail === 'err' ? 'form-input-err':'form-input' " @input="handleEmail" v-model="email" type="email" placeholder="Email" required>
      <div class="space-32 w-100"><h4 v-if="this.errEmail === 'err'" class="mt-2">Format email is incorrect</h4></div>
      <!-- Password -->
      <input :class="this.errPass === 'err' ? 'form-input-err':'form-input' " @input="handlePass" v-model="password" type="password" placeholder="Password" minlength="5" required>
      <div class="space-32 w-100"><h4 v-if="this.errPass === 'err'" class="mt-2">Password must be 8 character</h4></div>
      <div class="space-32 w-100"></div>
      <!-- Button Register -->
      <button type="submit">Sign In</button>
    </form>
    <!-- Reset Password -->
    <div class=" space-96 d-flex flex-column justify-content-center align-items-center w-100" >
      <h6>Did you forgot your password?</h6>
      <p @click="goPageForgot">Tap here for reset</p>
    </div>
    <!-- Sign In -->
    <h5>Doesn't have an account?</h5>
    <button class="btn-go" type="button" @click="goPageSignup">Register</button>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'Login',
  data () {
    return {
      // Data
      email: '',
      password: '',
      // Form Validation
      errEmail: '',
      errPass: ''
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
    handlePass () {
      if (this.password.length < 5) {
        this.errPass = 'err'
      } else {
        this.errPass = ''
      }
    },
    login () {
      const email = this.email
      const password = this.password
      const data = {
        email,
        password
      }
      if (email === '') {
        return Swal.fire('Failed', 'Fill up your email', 'error')
      } else if (password === '') {
        return Swal.fire('Failed', 'Fill up your password', 'error')
      }
      axios.post(`${process.env.VUE_APP_BASE_URL}/auth/login`, data)
        .then((res) => {
          console.log(res.data.result.data)
          const id = res.data.result.data.id
          const token = res.data.result.data.token
          localStorage.setItem('id', id)
          localStorage.setItem('token', token)
          Swal.fire('Success', 'Lets Fly With Easy', 'success')
          this.$router.push('/main/search')
        })
        .catch((err) => {
          Swal.fire('Failed', err.response.data.message.message, 'error')
        })
    },
    goPageSignup () {
      this.$router.push('/auth/signup')
    },
    goPageForgot () {
      this.$router.push('/auth/forgot')
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
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1em;
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
