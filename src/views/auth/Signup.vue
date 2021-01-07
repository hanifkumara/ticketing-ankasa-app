<template>
  <div>
    <!-- Title Register -->
    <h1>Register</h1>
    <div class="space-32 w-100"></div>
    <!-- Form Register -->
    <form @submit.prevent="">
      <!-- Full Name -->
      <input v-model="fullName" class="form-input" type="text" placeholder="Full Name" required>
      <div class="space-32 w-100"></div>
      <!-- Email -->
      <input v-model="email" class="form-input" type="email" placeholder="Email" required>
      <div class="space-32 w-100"></div>
      <!-- Password -->
      <input v-model="password" class="form-input" type="password" placeholder="Password" required>
      <div class="space-32 w-100"></div>
      <!-- Button Register -->
      <button type="submit">Sign Up</button>
    </form>
    <!-- Accept Terms and Condition -->
    <div class="space-32 w-100"></div>
    <input class="d-none" type="checkbox" id="check" v-model="check" true-value="yes" false-value="no">
    <label for="check" class="w-100">
      <div class="d-flex align-items-center">
        <div :class="this.check === 'yes' ? 'checked' : 'unchecked' "></div>
        <div>Accept terms and condition</div>
      </div>
    </label>
    <!-- Not Accept -->
    <div class="d-flex justify-content-center align-items-center w-100" :class="this.check === 'no' ? 'space-56 space-56-err': 'space-56' ">
      <h6 v-if="this.check === 'no'">You Must Accept terms and condition</h6>
    </div>
    <!-- Sign In -->
    <h5>Already have an account?</h5>
    <button class="btn-go" type="submit">Sign In</button>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      fullName: '',
      email: '',
      password: '',
      check: ''
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
  border-bottom: 2px solid rgba(210, 194, 255, 0.68);;
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
  border-bottom: 2px solid rgba(210, 194, 255, 0.68);;
}

.form-input::placeholder {
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

.unchecked {
  width: 17px;
  height: 17px;
  border: 2px solid #2395FF;
  box-sizing: border-box;
  border-radius: 3px;
  margin: 0 15px 0 0;
}

.checked {
  width: 17px;
  height: 17px;
  border: 2px solid #2395FF;
  background-color: #2395FF;
  box-sizing: border-box;
  border-radius: 3px;
  margin: 0 15px 0 0;
}

label {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #595959;
}

.space-56 {
  height: 56px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #FF5B37;
  border-bottom: 1px solid #D8D8D8;
  margin: 0 0 24px 0;
}

.space-56-err {
  border-bottom: 1px solid #FF5B37;
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
