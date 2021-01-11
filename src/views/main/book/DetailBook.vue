<template>
  <div class="bg">
      <div class="card-booking">
        <div class="top-card d-flex justify-content-between align-items-center">
          <h2 class="title">Booking Pass</h2>
          <div class="icon-option">
            <img src="@/assets/image/iconOption.png" alt="Icon Option">
          </div>
        </div>
        <div class="card-content d-flex">
          <div class="content-left">
            <div class="left-top d-flex align-items-center justify-content-between">
              <div class="logo-airlines">
                <img :src="setDetailMyTicket.images" alt="Logo Airlanes">
              </div>
              <h2 class="from">{{setDetailMyTicket.country_departure}}</h2>
              <div class="icon-airlines">
                <img src="@/assets/image/Vector (3).png" alt="Icon">
              </div>
              <h2 class="to">{{setDetailMyTicket.country_arrived}}</h2>
            </div>
            <div class="desc-booking-pass d-flex">
              <div class="desc-left">
                <p class="title-desc">Code</p>
                <h5>{{setDetailMyBooking.id}}</h5>
                <p class="title-desc" style="margin-top: 20px;">Type Ticket</p>
                <h5>{{setDetailMyTicket.ticket_type}}</h5>
              </div>
              <div class="desc-rigth">
                <p class="title-desc">Class</p>
                <h5>{{setDetailMyTicket.class}}</h5>
              </div>
            </div>
            <p class="title-desc" style="margin-top: 20px;">Departure</p>
            <h5>{{setDetailMyTicket.date_departure | moment("dddd, MMMM Do YYYY")}} - {{setDetailMyTicket.time_departure}}</h5>
          </div>
          <div class="content-right">
            <div class="qrcode">
              <img :src="setDetailMyBooking.qrcode" alt="QRCode">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'DetailBook',
  methods: {
    ...mapActions(['getDetailMyBooking'])
  },
  mounted () {
    this.getDetailMyBooking(this.$route.params.id)
  },
  computed: {
    ...mapGetters(['setDetailMyBooking', 'setDetailMyTicket'])
  }
}
</script>

<style scoped>
.bg{
  background: #2395FF;
  padding: 70px 10%;
}
h2.title{
  font-size: 28px;
  font-weight: 700;
  width: fit-content;
}
.card-booking{
  background: #FFFFFF;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 20px;
  padding: 40px 60px;
}
.card-content{
  background: #FFFFFF;
  margin-top: 30px;
}
.content-left{
  border: 1px solid #E5E5E5;
  border-radius: 7.5px;
  width: 60%;
  padding: 20px;
  padding-right: 40px;
}
.content-right{
  width: 40%;
  border: 1px solid #E5E5E5;
  border-radius: 7.5px;
  padding: 20px;
}
.logo-airlines{
  width: 110px;
  height: 110px;
}
.logo-airlines > img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.icon-airlines{
  width: 23px;
  height: 23px;
}
.icon-airlines > img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
.desc-left,.desc-right{
  width: 43%;
}
p.title-desc{
  color: #A5A5A5;
  font-size: 14px;
  margin: 0;
}
.content-right{
  display: flex;
  justify-content: center;
  align-items: center;
}
.qrcode{
  width: 190px;
  height: 190px;
}
.qrcode > img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 767px) {
  .card-content{
    flex-wrap: wrap;
  }
  .content-left{
    width: 100%;
  }
  .content-right{
    width: 100%;
  }
}
@media screen and (max-width: 470px) {
  .logo-airlines{
    width: 80px;
    height: 80px;
  }
  .icon-airlines{
    margin-top: -12px;
    width: 19px;
    height: 19px;
  }
  h2.from, h2.to {
    font-size: 17px;
  }
  .card-booking{
    padding: 20px 25px;
  }
  .desc-left,.desc-right{
    width: 50%;
  }
  p.title-desc{
    font-size: 12px;
  }
  h5{
    font-size: 14px;
  }
  .qrcode{
    width: 120px;
    height: 120px;
  }
}

</style>
