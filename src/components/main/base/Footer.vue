<template>
  <div class=" container-fluid">

    <div class="container">
      <div class="row">
        <!-- Title Footer -->
        <div class="title-footer col-12 col-sm-6 col-lg-3">
          <!-- Logo -->
          <div class="wrap-title-footer d-flex align-items-center">
            <img src="../../../assets/auth/plane.svg" alt="plane">
            <h3>Ankasa</h3>
          </div>
          <!-- Slogan -->
          <h5>Find your Flight and explore the world with us. We will take care of the rest</h5>
        </div>
        <div class="col-lg-1 d-none d-lg-block"></div>
        <!-- Feature -->
        <div class="feature col-12 col-sm-6 col-lg-2">
          <h3>Feature</h3>
          <ul>
            <li>Find Tiket</li>
            <li>My Booking</li>
            <li>Chat</li>
            <li>Notification</li>
          </ul>
        </div>
        <div class="col-lg-1 d-none d-lg-block"></div>
        <!-- Download Ankasa App -->
        <div class="download col-12 col-sm-6 col-lg">
          <h3>Download Ankasa App</h3>
          <div class="d-flex flex-column img-download">
            <img class="appstore" src="../../../assets/main/appstore.png" alt="app-store">
            <img src="../../../assets/main/gplay.png" alt="google-play">
          </div>
        </div>
        <!-- Follow Us -->
        <div class="follow col-12 col-sm-6 col-lg-2">
          <h3>Follow Us</h3>
          <div class="wrap-follow d-flex justify-content-between">
            <img src="../../../assets/main/fb.svg" alt="fb">
            <img src="../../../assets/main/twt.svg" alt="twt">
            <img src="../../../assets/main/ig.svg" alt="ig">
            <img src="../../../assets/main/yt.svg" alt="yt">
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Copyright -->
        <div class="copyright-address col-12 d-flex flex-column flex-sm-row justify-content-between">
          <h3>© Ankasa.  All Rights Reserved.</h3>
          <div class="address d-flex align-items-center">
            <img src="../../../assets/main/map-pin.svg" alt="map">
            <h3>Jakarta Indonesia</h3>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>

.container-fluid {
  padding: 100px 0;
}

.title-footer {
  margin: 0 0 30px 0px;
  .wrap-title-footer {
    margin: 0 0 30px 0px;
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
  h5 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 221.43%;
    color: #6B6B6B;
  }
}

.feature {
  margin: 0 0 30px 0px;
  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin: 0 0 30px 0;
  }
  ul {
    li {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      color: #6B6B6B;
      margin: 0 0 20px 0;
    }
  }
}

.download {
  margin: 0 0 30px 0px;
  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin: 0 0 30px 0;
  }
  .img-download {
    width: 200px;
    .appstore {
      margin: 0 0 20px 0;
    }
  }
}

.follow {
  margin: 0 0 30px 0;
  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin: 0 0 30px 0;
  }
  .wrap-follow {
    width: 156px;
  }
}

.copyright-address {
  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #6B6B6B;
  }
  .address {
    img {
      margin: 0 10px 0 0;
    }
    h3 {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      color: #6B6B6B;
      margin: 0;
    }
  }
}

@media (max-width: 575px) {
  .copyright-address {
    h3 {
      margin: 0 0 30px 0;
    }
  }
}

@media (min-width: 992px) {
  .follow {
    .wrap-follow {
      width: 100%;
    }
  }
}

</style>
