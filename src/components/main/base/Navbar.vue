<template>
  <nav class="navbar navbar-expand-lg">

    <div class="container">

      <!-- Logo -->
      <div class="wrap-title-navbar d-flex align-items-center">
        <img src="../../../assets/auth/plane.svg" alt="plane">
        <h3>Ankasa</h3>
      </div>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
          <img src="../../../assets/main/menu-navbar.svg" alt="hamburger" width="30px" height="30px">
        </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">

        <div class="wrap-tab d-flex flex-column flex-sm-row w-100 justify-content-between">
          <!-- Search -->
          <div class="search my-auto d-flex">
            <img src="../../../assets/main/search.svg" alt="search">
            <input type="text" placeholder="Where you want to go?">
          </div>
          <!-- Find Ticket -->
          <div @click="goPageFind" class="tab-navbar my-auto d-flex flex-column justify-content-center align-items-center">
            <h4 :class="this.currentUrl === '/main/search' || this.currentUrl === '/main/ticket' || this.currentUrl === `/main/ticket/${this.$route.params.id}` ? 'active-tab-name':'inactive-tab-name' ">Find Ticket</h4>
            <div :class="this.currentUrl === '/main/search' || this.currentUrl === '/main/ticket' || this.currentUrl === `/main/ticket/${this.$route.params.id}` ? 'active-tab':'inactive-tab' "></div>
          </div>
          <!-- My Booking -->
          <div @click="goPageBook" class="tab-navbar my-auto d-flex flex-column justify-content-center align-items-center">
            <h4 :class="this.currentUrl === `/main/payment/${this.$route.params.id}` || this.currentUrl === '/main/mybook' || this.currentUrl === `/main/mybook/${this.$route.params.id}` ? 'active-tab-name':'inactive-tab-name' ">My Booking</h4>
            <div :class="this.currentUrl === `/main/payment/${this.$route.params.id}` || this.currentUrl === '/main/mybook' || this.currentUrl === `/main/mybook/${this.$route.params.id}` ? 'active-tab':'inactive-tab' "></div>
          </div>
        </div>

        <!-- Icon and Profile -->
        <div>
          <div class="icon-profile d-flex justify-content-between align-items-center ml-auto">
            <img src="../../../assets/main/email.svg" alt="email">
            <img src="../../../assets/main/bell.svg" alt="bell">

            <div @click="goProfile" class="container-profile">
              <div class="outline-profile d-flex justify-content-center align-items-center">
                <div class="wrap-profile">
                  <img :src="this.photo" alt="profile">
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>

  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      currentUrl: '',
      photo: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg'
    }
  },
  methods: {
    goPageFind () {
      this.$router.push('/main/search')
      this.currentUrl = '/main/search'
    },
    goPageBook () {
      this.$router.push('/main/mybook')
      this.currentUrl = '/main/mybook'
    },
    getUrl () {
      const url = window.location.pathname
      this.currentUrl = url
    },
    goProfile () {
      this.$router.push('/main/profile')
      this.currentUrl = ''
    }
  },
  mounted () {
    this.getUrl()
  }
}
</script>

<style lang="scss" scoped>

.navbar {
  padding: 50px 70px;
  background: #ffffff;
}

.navbar-toggler {
  border: 3px solid #2395FF;
  padding: 5px;
  border-radius: 10px;
}

.wrap-title-navbar {
  cursor: pointer;
  img {
    margin: 0 15px 0 0;
  }
  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #414141;
  }
}

.wrap-tab {
  margin: 0 50px 0 100px;
}

.search {
  width: 250px;
  height: 50px;
  background: #F5F5F5;
  border-radius: 10px;
  padding: 0 20px;
  img {
    margin: 0 12px 0 0;
  }
  input {
      font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #252525;
    background-color: rgba(255, 255, 255, 0);
    width: 100%;
    border: 0;
  }
  input:focus {
    background-color: rgba(255, 255, 255, 0);
    width: 100%;
    border: 0;
  }
  input::placeholder {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #6B6B6B;
  }
}

.tab-navbar {
  height: 50px;
  box-sizing: border-box;
  cursor: pointer;
}

.active-tab-name {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150.8%;
  text-align: center;
  color: #414141;
  margin: 0 0 5px 0;
}

.inactive-tab-name {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150.8%;
  text-align: center;
  color: #414141;
  margin: 0 0 5px 0;
}

.active-tab {
  height: 5px;
  width: 40px;
  border-radius: 10px;
  background-color: #2395FF;
}

.inactive-tab {
  height: 5px;
  width: 40px;
  border-radius: 10px;
  background-color: #2395ff00;
}

.icon-profile {
  width: 200px;
  height: fit-content;
}

.container-profile {
  cursor: pointer;
  .outline-profile {
    width: 50px;
    height: 50px;
    border: 2px solid #2395FF;
    border-radius: 50%;
    .wrap-profile {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      background-color: #ffffff;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

@media (max-width: 1199px) {
  .wrap-tab {
    margin: 0 25px 0 50px;
  }
}

@media (max-width: 991px) {
  .navbar {
    padding: 25px 50px;
  }

  .wrap-tab {
    margin: 25px 0;
  }
}

@media (max-width: 575px) {
  .search {
    width: 100%;
    margin: 0 0 25px 0!important;
  }

}

</style>
