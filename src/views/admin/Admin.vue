<template>
  <div class=" container-fluid">

    <div class="container">
      <h1 class=" text-center mb-4">Admin Ankasa</h1>
      <!-- Add Box -->
      <div class="row">
        <section class="add-box mb-5 w-100 d-flex flex-column justify-content-between align-items-center">
          <img src="../../assets/main/cross.svg" alt="cross">
          <h6>Click for add schedule</h6>
        </section>
      </div>
      <!-- All Ticket -->
      <div v-for="(data, index) in tickets" :key="index" >
        <div class="row">
          <div class="ticket-box w-100 mb-5" @click="handleTicket(data)">
            <!-- Image and Name -->
            <div class="ticket-maskapai mb-5 d-flex align-items-center flex-wrap">
              <!-- Image -->
              <div class="container-img col-12 col-md-4">
                <div class="wrap-img d-block d-sm-flex justify-content-sm-center align-items-sm-center">
                  <img :src="data.images" alt="img">
                </div>
              </div>
              <!-- Name Maskapai -->
              <h2 class="col-12 col-md" v-if="data.name_maskapai === 'lion_air'">Lion Air</h2>
              <h2 class="col-12 col-md" v-if="data.name_maskapai === 'garuda'">Garuda</h2>
              <h2 class="col-12 col-md" v-if="data.name_maskapai === 'air_asia'">Air Asia</h2>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <!-- City Country -->
                <div class="mb-5">
                  <h3 class="title-ex">City & Country</h3>
                  <div class="d-flex justify-content-between w-100 flex-wrap">
                    <!-- Departure City and Country -->
                    <div>
                      <div class="title-dep-arr mb-2">{{firstUppercase(data.city_departure)}}</div>
                      <div class="p-dep-arr">{{data.country_departure}}</div>
                    </div>
                    <!-- Icon -->
                    <div class=" d-flex align-items-center"><img src="../../assets/main/arrow.svg" alt=""></div>
                    <!-- Arrived City and Country-->
                    <div>
                      <div class="title-dep-arr mb-2">{{firstUppercase(data.city_arrived)}}</div>
                      <div class="p-dep-arr">{{data.country_arrived}}</div>
                    </div>
                  </div>
                </div>
                <!-- Date & Time -->
                <div class="mb-5">
                  <h3 class="title-ex">Date & Time</h3>
                  <div class="d-flex justify-content-between w-100 flex-wrap">
                    <!-- Departure Date -->
                    <div>
                      <div class="title-dep-arr mb-2">Departure</div>
                      <div class="p-dep-arr">{{data.date_departure}}</div>
                      <div class="p-dep-arr">{{data.time_departure}}</div>
                    </div>
                    <!-- Icon -->
                    <div class=" d-flex align-items-center"><img src="../../assets/main/arrow.svg" alt=""></div>
                    <!-- Arrived Date-->
                    <div>
                      <div class="title-dep-arr mb-2">Arrived</div>
                      <div class="p-dep-arr">{{data.date_arrived}}</div>
                      <div class="p-dep-arr">{{data.time_arrived}}</div>
                    </div>
                  </div>
                </div>
                <!-- Return -->
                <div v-if="data.ticket_type === 'round_trip'" class="mb-5">
                  <h3 class="title-ex">Return</h3>
                  <div class="d-flex justify-content-between w-100 flex-wrap">
                    <!-- Departure Date -->
                    <div>
                      <div class="title-dep-arr mb-2">Departure</div>
                      <div class="p-dep-arr">{{data.date_return}}</div>
                      <div class="p-dep-arr">{{data.time_return}}</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Explain 2 -->
              <div class=" mb-4 col-lg-4 d-flex d-lg-block">
                <div class="col-4 col-lg-12 explain">
                  <h3>Price</h3>
                  <h5>{{changeCurrency(data.price)}} IDR</h5>
                </div>
                <br>
                <div class="col-4 col-lg-12 explain">
                  <h3>Child Person</h3>
                  <h5>{{data.child_person}} Person</h5>
                </div>
                <br>
                <div class="col-4 col-lg-12 explain">
                  <h3>Class</h3>
                  <h5>{{firstUppercase(data.class)}} Class</h5>
                </div>
                <br>
              </div>
              <br>
              <!-- Explain 3 -->
              <div class=" mb-4 col-lg-4 d-flex d-lg-block">
                <div class="col-4 col-lg-12 explain">
                  <h3>Ticket Type</h3>
                  <h5>{{changeType(data.ticket_type)}}</h5>
                </div>
                <br>
                <div class="col-4 col-lg-12 explain">
                  <h3>Adult Person</h3>
                  <h5>{{data.adult_person}} Person</h5>
                </div>
                <br>
                <div class="col-4 col-lg-12 explain">
                  <h3>Transit</h3>
                  <h5>{{firstUppercase(data.transit)}}</h5>
                </div>
                <br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data () {
    return {
      tickets: [
        {
          id: 1,
          images: 'https://logos-download.com/wp-content/uploads/2016/05/Lion_Air_logo.png',
          name_maskapai: 'lion_air',
          city_departure: 'jakarta',
          country_departure: 'IDN',
          city_arrived: 'seol',
          country_arrived: 'KOR',
          date_departure: '2021-01-29',
          time_departure: '19:28:55',
          date_arrived: '2021-02-22',
          time_arrived: '22:28:55',
          date_return: '2021-04-22',
          time_return: '02:35:25',
          ticket_type: 'one_way',
          price: 1500000,
          child_person: 2,
          adult_person: 4,
          transit: 'direct',
          class: 'economy'
        },
        {
          id: 2,
          images: 'https://i.pinimg.com/originals/2e/f6/e2/2ef6e2cc6b19f94dfd22c9b61e1d16de.png',
          name_maskapai: 'garuda',
          city_departure: 'jakarta',
          country_departure: 'IDN',
          city_arrived: 'seol',
          country_arrived: 'KOR',
          date_departure: '2021-01-29',
          time_departure: '19:28:55',
          date_arrived: '2021-02-22',
          time_arrived: '22:28:55',
          date_return: '2021-04-22',
          time_return: '02:35:25',
          ticket_type: 'round_trip',
          price: 2550000,
          child_person: 2,
          adult_person: 4,
          transit: 'transit',
          class: 'first_class'
        }
      ]
    }
  },
  methods: {
    handleTicket (data) {
      console.log(data.id)
    },
    firstUppercase (data) {
      if (data === 'first_class') {
        const split = data.split('_')
        const one = split[0][0].toUpperCase() + split[0].slice(1)
        return one
      } else {
        const letter = data[0].toUpperCase() + data.slice(1)
        return letter
      }
    },
    changeCurrency (data) {
      const currency = data.toLocaleString('id-ID')
      return currency
    },
    changeType (data) {
      const split = data.split('_')
      const one = split[0][0].toUpperCase() + split[0].slice(1)
      const two = split[1][0].toUpperCase() + split[1].slice(1)
      return `${one} ${two}`
    }
  }
}
</script>

<style lang="scss" scoped>

.container-fluid {
  padding: 60px 0 60px 0;
  background-color: #F5F6FA;
  min-height: 100vh;
}

h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #414141;
}

.ticket-box {
  height: fit-content;
  background-color: white;
  box-shadow: 0px 10px 40px rgba(35, 149, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  cursor: pointer;
}

.ticket-maskapai {
  .container-img {
    // margin: 0 60px 0 0;
    .wrap-img {
      height: 200px;
      width: 200px;
      img {
        width: 100%;
        // height: 100%;
        object-fit: cover;
      }
    }
  }
  h2 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 72px;
    color: #414141;
  }
}

.title-ex {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 24px;
  color: #D9D9D9;
  margin: 0 0 32px 0;
}

.title-dep-arr {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: #414141;
  margin: 0 0 12px 0!important;
}

.p-dep-arr {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #A9A9A9;
  margin: 0 0 8px 0!important;
}

.explain {
  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    color: #414141;
  }
  h5 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #A9A9A9;
  }
}

.add-box {
  height: 200px;
  background-color: white;
  box-shadow: 0px 10px 40px rgba(35, 149, 255, 0.1);
  border-radius: 15px;
  padding: 42px 0;
  cursor: pointer;
  h6 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #414141;
  }
}

@media (max-width: 991px) {
  .col-4.explain {
    padding: 0;
  }
}

@media (max-width: 767px) {
  .explain {
    h3 {
      font-size: 20px;
      line-height: 1em;
    }
    h5 {
      font-size: 14px;
      line-height: 1em;
    }
  }
}

@media (max-width: 575px) {
  .title-ex {
    line-height: 1em;
  }
  .container-img {
    margin: 0 0 24px 0;
    .wrap-img {
      width: 100%!important;
      img {
        height: 100%;
      }
    }
  }
  .explain {
    h3 {
      font-size: 16px;
    }
    h5 {
      font-size: 12px;
    }
  }
}

</style>
