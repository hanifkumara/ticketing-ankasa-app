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
            <p>&middot;</p>
            <p>6 Passenger</p>
            <p>&middot;</p>
            <p>Economy</p>
          </span>
        </div>
      </div>
      <h3>Change search</h3>
    </div>
    <div class="main-content">
      <div class="filter-ticket">
        <span>
          <h1>Filter</h1>
          <h2 @click="resetCheck">Reset</h2>
        </span>

        <div class="box-filter" v-for="(filter) in filters" :key="filter.name">
          <span @click="filter.collapse = !filter.collapse">
            <h5>{{filter.name}}</h5>
            <p>{{ filter.collapse ? '-' : '+' }}</p>
          </span>
          <div class="list-filter" :class="{ 'collapse': !filter.collapse }">
            <span v-for="li in filter.li" :key="li.name">
              <p>{{ li.name }}</p>
              <input type="checkbox" name="chek" id="direct" v-bind="checkbox" :checked="li.check">
            </span>
          </div>
        </div>

      </div>
      <div class="list-ticket">
        <div class="head-list-ticket">
          <span>
            <h1>Select Ticket</h1>
            <p>( 6 flight found )</p>
          </span>
          <span>
            <h3>Sort by</h3>
            <img src="../../../../public/img/icons/ticket_d/sortAscDsc.png" alt="sort">
          </span>
        </div>
        <div class="box-list-ticket">
          <div class="ticket-title">
            <img src="../../../../public/img/icons/ticket_d/garuda-indonesia-logo-BD82882F07-seeklogo 1.png" alt="logo">
            <p>Garuda Indonesia</p>
          </div>
          <div class="ticket-detail">
              <div class="info-detail">
                <div class="flight-route">
                  <span>
                    <h1>IDN</h1>
                    <p>12:23</p>
                  </span>
                <img src="../../../../public/img/icons/ticket_d/flightgrey.png" alt="">
                  <span>
                    <h1>JPN</h1>
                    <p>15:21</p>
                  </span>
                </div>

                <div class="flight-time">
                  <p>3 hours 11 minutes</p>
                  <p>( 1 Transit )</p>
                </div>

                <div class="flight-facilities">
                  <img src="../../../../public/img/icons/ticket_d/bag.png" alt="bag">
                  <img src="../../../../public/img/icons/ticket_d/brgr.png" alt="burger">
                  <img src="../../../../public/img/icons/ticket_d/wifi.png" alt="Wifi">
                </div>

                <div class="flight-price">
                  <h5>IDR 250.000</h5>
                  <p>/pax</p>
                </div>
              </div>
              <button>SELECT</button>
          </div>
          <span><p>View Details ></p></span>
        </div>

        <div class="box-list-ticket">
          <div class="ticket-title">
            <img src="../../../../public/img/icons/ticket_d/garuda-indonesia-logo-BD82882F07-seeklogo 1.png" alt="logo">
            <p>Garuda Indonesia</p>
          </div>
          <div class="ticket-detail">
              <div class="info-detail">
                <div class="flight-route">
                  <span>
                    <h1>IDN</h1>
                    <p>12:23</p>
                  </span>
                <img src="../../../../public/img/icons/ticket_d/flightgrey.png" alt="">
                  <span>
                    <h1>JPN</h1>
                    <p>15:21</p>
                  </span>
                </div>

                <div class="flight-time">
                  <p>3 hours 11 minutes</p>
                  <p>( 1 Transit )</p>
                </div>

                <div class="flight-facilities">
                  <img src="../../../../public/img/icons/ticket_d/bag.png" alt="bag">
                  <img src="../../../../public/img/icons/ticket_d/brgr.png" alt="burger">
                  <img src="../../../../public/img/icons/ticket_d/wifi.png" alt="Wifi">
                </div>

                <div class="flight-price">
                  <h5>IDR 250.000</h5>
                  <p>/pax</p>
                </div>
              </div>
              <button>SELECT</button>
          </div>
          <span><p>View Details ></p></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ticket',
  data () {
    return {
      checkbox: '',
      filters: [
        {
          name: 'Transit',
          li: [
            {
              name: 'Direct',
              check: false
            },
            {
              name: 'Transit',
              check: false
            }
          ],
          collapse: false
        },
        {
          name: 'Facilities',
          li: [
            {
              name: 'Luggage',
              check: false
            },
            {
              name: 'in-FLight Meal',
              check: false
            },
            {
              name: 'Wifi',
              check: false
            }
          ],
          collapse: false
        },
        {
          name: 'Departure Time',
          li: [
            {
              name: '00:00 - 06:00',
              check: false
            },
            {
              name: '07:30 - 10:00',
              check: false
            },
            {
              name: '20:00 - 00:30',
              check: false
            },
            {
              name: '10:00 - 12:30',
              check: false
            }
          ],
          collapse: false
        },
        {
          name: 'Time Arrived',
          li: [
            {
              name: '00:00 - 06:00',
              check: false
            },
            {
              name: '07:30 - 10:00',
              check: false
            },
            {
              name: '20:00 - 00:30',
              check: false
            },
            {
              name: '10:00 - 12:30',
              check: false
            }
          ],
          collapse: false
        },
        {
          name: 'Airlines',
          li: [
            {
              name: 'Garuda Indonesia',
              check: false
            },
            {
              name: 'Air Asia',
              check: false
            },
            {
              name: 'City Link',
              check: false
            }
          ],
          collapse: false
        }
      ]
    }
  },
  methods: {
    resetCheck () {
      const data = this.filters
      data.map((e) => {
        e.li.check = false
      })
    }
  }
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

/* MAIN CONTENT */

.main-content {
  width: 95%;
  margin-top: 13px;
  margin-bottom: 15px;
  display: flex;
  /* background-color: rgb(158, 107, 107); */
}
.filter-ticket {
  flex: .3;
  display: flex;
  /* background-color: #2395FF; */
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
}

.filter-ticket span{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.filter-ticket span h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
}
.filter-ticket span h2 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2395FF;
}

.box-filter {
  width: 95%;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  padding: 20px 10px 6px 10px;
  position: relative;
}
.box-filter:first-child {
  border-top-left-radius: 15px!important;
  border-top-right-radius: 15px!important;
  /* background-color: blue!important; */
}
.box-filter:last-child {
  border-bottom-left-radius: 15px!important;
  border-bottom-right-radius: 15px!important;
  /* background-color: blue!important; */
}
.box-filter::after {
  content: '';
  position: relative;
  bottom: 0;
  width: 96%;
  height: 1px;
  background-color: #e5e5e5e5;
  margin: 7px auto;
}
.box-filter span {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.box-filter span h5 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
}
.box-filter span p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  color: #2395FF;
  /* background-color: blue; */
  padding: 0 0 0 33px;
  cursor: pointer;
}
.list-filter {
  display: flex;
  flex-direction: column;
  margin-top: 4px;
}
.collapse{
  display: none!important;
  transition: 1s;
}
.list-filter span {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-filter span p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
  padding: 0;
}

.list-ticket {
  flex: 1;
  display: flex;
  height: 500px;
  /* background-color: #859baf; */
  flex-direction: column;
  padding: 10px;
}

.head-list-ticket {
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 10px 0 10px;
}
.head-list-ticket span {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.head-list-ticket span h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  margin-right: 9px;
}
.head-list-ticket span p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
  color: #909090;
}
.head-list-ticket span h3 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-right: 15px;
}
.head-list-ticket span img {
  width: 17px;
  height: 17px;
}

.box-list-ticket {
  width: 100%;
  padding: 35px;
  background: #FFFFFF;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.box-list-ticket:last-child {
  margin-bottom: 0;
}
.box-list-ticket span p{
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2395FF;
  cursor: pointer;
}
.ticket-title {
  display: flex;
  align-items: center;
}
.ticket-title img {
  width: 100px;
  height: 50px;
  margin-right: 25px;
}
.ticket-title p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #595959;
}

.ticket-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  margin: 34px 0 35px 0;
}
.ticket-detail button {
  width: 150px;
  height: 50px;
  background: #2395FF;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  border: none;
  outline: none;
}
.info-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
}
.flight-time {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flight-time p{
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #595959;
}
.flight-facilities {
  display: flex;
  align-items: center;
}
.flight-facilities img:nth-child(2){
  margin: 0 17px 0 17px;
}
.flight-route {
  display: flex;
  /* align-items: center; */
}
.flight-route span h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 22px;
  color: #000000;
}
.flight-price {
  display: flex;
  align-items: center;
}
.flight-price h5 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #2395FF;
}
.flight-price p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #8d8d8d;
}
.flight-route span p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  color: #6B6B6B;
}
.flight-route img {
  margin: 0 27px 0 27px;
  width: 19px;
  height: 19px;
}
/* IPAD PRO */
@media only screen and (max-width: 1024px) {
  .flight-line {
    margin-left: 50px;
  }
  .header-ticket_d h3 {
    margin-right: 50px;
  }
  .box-list-ticket {
  width: 100%;
  padding: 35px;
  background: #FFFFFF;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.box-list-ticket:last-child {
  margin-bottom: 0;
}
.box-list-ticket span p{
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2395FF;
  cursor: pointer;
}
.ticket-title {
  display: flex;
  align-items: center;
}
.ticket-title img {
  width: 100px;
  height: 50px;
  margin-right: 25px;
}
.ticket-title p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #595959;
}

.ticket-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  margin: 34px 0 35px 0;
}
.ticket-detail button {
  width: 110px;
  height: 40px;
  background: #2395FF;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  border: none;
  outline: none;
}
.info-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}
.flight-time {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flight-time p{
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 22px;
  color: #595959;
}
.flight-facilities {
  display: flex;
  align-items: center;
}
.flight-facilities img:nth-child(2){
  margin: 0 17px 0 17px;
}
.flight-route {
  display: flex;
  /* align-items: center; */
}
.flight-route span h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
}
.flight-price {
  display: flex;
  align-items: center;
}
.flight-price h5 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
  color: #2395FF;
}
.flight-price p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  color: #8d8d8d;
}
.flight-route span p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  color: #6B6B6B;
}
.flight-route img {
  margin: 0 27px 0 27px;
  width: 19px;
  height: 19px;
}
}

/* IPAD OLD */

@media only screen and (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }
  .box-filter {
    width: 95%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-self: center;
    padding: 20px 10px 6px 10px;
    position: relative;
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
.flight-time {
  display: none;
}
.flight-facilities {
  display: none;
}
.box-list-ticket span p{
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2395FF;
  cursor: pointer;
}
.ticket-title {
  display: flex;
  align-items: center;
}
.ticket-title img {
  width: 100px;
  height: 50px;
  margin-right: 25px;
}
.ticket-title p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #595959;
}

.ticket-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  margin: 34px 0 35px 0;
}
.ticket-detail button {
  width: 70px;
  height: 30px;
  background: #2395FF;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 24px;
  color: #FFFFFF;
  border: none;
  outline: none;
}
.info-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}
.flight-route {
  display: flex;
  /* align-items: center; */
}
.flight-route span h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
}
.flight-price {
  display: flex;
  align-items: center;
  margin-right: 8px;
}
.flight-price h5 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
  color: #2395FF;
}
.flight-price p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 22px;
  color: #8d8d8d;
}
.flight-route span p {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  color: #6B6B6B;
}
.flight-route img {
  margin: 0 18px 0 18px;
  width: 14px;
  height: 14px;
}
.head-list-ticket {
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 10px 0 10px;
}
.head-list-ticket span {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.head-list-ticket span h1 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 36px;
  color: #000000;
  margin-right: 9px;
}
.head-list-ticket span p {
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 36px;
  color: #909090;
}
.head-list-ticket span h3 {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 24px;
  color: #000000;
  margin-right: 15px;
}
.head-list-ticket span img {
  width: 15px;
  height: 15px;
}
}
</style>
