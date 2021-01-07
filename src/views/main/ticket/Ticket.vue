<template>
  <div class="wrap-ticket_d">
    <div class="header-ticket_d">
      <div class="flight-line">
        <img src="../../../../public/img/icons/ticket_d/whiteflight.png" alt="img">
        <div class="det-flight">
          <span><p>From</p><p>To</p></span>
          <span>
            <h2>Medan (IDN)</h2>
            <img src="../../../../public/img/icons/ticket_d/chnge.png" alt="">
            <h2>Tokyo (JPN)</h2>
          </span>
          <span>
            <p>Monday, 20 July 20</p>
            <p>6 Passenger</p>
            <p>Economy</p>
          </span>
        </div>
      </div>
      <h3>Change search</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ticket'
}
</script>

<style scoped>
.wrap-ticket_d {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header-ticket_d {
  width: 100%;
  height: 176px;
  background: #2395FF;
  border-radius: 0px 0px 30px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-repeat: no-repeat;
  background-position-x: -0.59%;
  background-position-y: 90%;
  background-image: url('../../../../public/img/icons/ticket_d/bluefly.png');
}
.header-ticket_d h3 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  margin-right: 70px;
}
.flight-line {
  display: flex;
  justify-content: space-between;
  margin-left: 138px;
  /* width: 230px; */
  align-items: center;
}
.flight-line img {
  width: 50px;
  height: 35px;
}
.det-flight {
  /* width: 230px; */
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.det-flight span {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.det-flight span:nth-child(2) {
  margin: 7px 0 7px 0;
}
.det-flight span p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
}
.det-flight span img {
  width: 17px;
  height: 17px;
  margin: 0 15px 0 15px;
}
.det-flight span h2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
}

/* IPAD */
@media only screen and (max-width: 1024px) {
  .flight-line {
    margin-left: 50px;
  }
  .header-ticket_d h3 {
    margin-right: 50px;
  }
}

/* PHONE */
@media only screen and (max-width: 414px) {
  .header-ticket_d {
    height: 120px;
    background-size: 40%;
  }
  .flight-line {
    margin-left: 20px;
  }
  .header-ticket_d h3 {
    margin-right: 10px;
  }
  .flight-line img {
    width: 20px;
    height: 20px;
  }
  .flight-line span {
    align-items: center;
  }
  .det-flight span h2 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 24px;
    color: #FFFFFF;
}
.det-flight span:nth-child(2) {
  margin: 4px 0 4px 0;
}
.det-flight span p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  color: #FFFFFF;
}
.det-flight span img {
  width: 14px;
  height: 14px;
  margin: 0 10px 0 10px;
}
.header-ticket_d h3 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 24px;
  color: #FFFFFF;
  margin-right: 20px;
}
}
</style>
