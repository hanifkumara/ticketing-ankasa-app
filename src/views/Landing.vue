<template>
  <div class="container">
    <div class="d-flex justify-content-between justify-content-center">
      <div class="text">
        <h1>Find Your Flight</h1>
        <p>and explore the world with us</p>
      </div>
      <div>
        <img src="../assets/image 3.png" alt="image" width="310px" height="300px">
      </div>
    </div>
    <div class="image">
      <img src="../assets/img1.png" alt="image">
    </div>
    <div class="section p-2">
      <div class="title">
        <h6>Hey,</h6>
        <h1>Where you want to go?</h1>
      </div>
      <div class="section-card d-flex justify-content-between pl-4 pr-5">
        <a>Recently Searched</a>
        <img src="../assets/btnback.png" alt="btnback">
      </div>
      <div class="section-text ml-4 mt-3 d-flex justify-content-between pl-3 pr-3">
        <div class="text1"> <!-- display flex , flex-direction colom-->
          <p>From</p>
          <h6>Medan</h6>
          <i>Indonesia</i>
        </div>
        <img src="../assets/row.png" alt="row" class="ml-5 mr-5 mt-4">
        <div class="text1"> <!-- display flex , flex-direction colom -->
          <p>To</p>
          <h6>Tokyo</h6>
          <i>Japan</i>
        </div>
      </div>
      <div class="button row mt-4 ml-3">
        <div class="button-card mr-4">
          <span></span>
          <button type="button" class="btn btn-primary">
            <span class="ico2 mr-2"></span>
            One way
          </button>
        </div>
        <div class="button-card">
          <button type="button" class="btn btn-light">
            <span class="ico mr-2"></span>
            Round trip
          </button>
        </div>
      </div>
      <div class="form mt-2 p-3">
        <div class="form-group">
          <h6>Departure</h6>
          <select class="form-control mt-2" id="exampleFormControlSelect1"></select>
        </div>

         <div class="form-group">
          <h6>How many person?</h6>
          <div class="row form-select mt-2 ml-1">
            <select class="form-control mr-3" id="exampleFormControlSelect1"></select>
            <select class="form-control" id="exampleFormControlSelect1"></select>
          </div>
        </div>
      </div>
      <div class="form-group">
        <h6 class="ml-3">Which class do you want?</h6>
        <div class="row ml-4 mt-2">
          <div class="form-check mr-2">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
            <label class="form-check-label" for="exampleRadios1">
              Economy
            </label>
          </div>
          <div class="form-check mr-2">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
            <label class="form-check-label" for="exampleRadios2">
              Business
            </label>
          </div>
          <div class="form-check mr-2">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
            <label class="form-check-label" for="exampleRadios2">
              First Class
            </label>
          </div>
        </div>
      </div>
      <div class="button-search mr-4 ml-3">
          <button type="button" class="btn btn-primary">
            SEARCH FLIGHT
            <span class="ml-5"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></span>
          </button>
        </div>
    </div>

  <div class="text-card">
    <h6>TRENDING</h6>
    <h5>Trending destinations</h5>
    <p>View all</p>
  </div>

  <div class="row">
    <div class="col-lg-2">
      <div class="card-box">
        <div class="card1 text-center">
          <img src="../assets/image 3.png" alt="image">
          <h6 class="text-left">Tokyo,</h6>
          <div class="japan">
            <p>Japan</p>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-2 card-content">
      <div class="card-box">
        <div class="card1 text-center">
          <img src="../assets/img2.png" alt="image">
          <h6 class="text-left">Barcelona,</h6>
          <div class="japan">
            <p>Spain</p>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-2 card-content">
      <div class="card-box">
        <div class="card1 text-center">
          <img src="../assets/image 3.png" alt="image">
          <h6 class="text-left">Tokyo,</h6>
          <div class="japan">
            <p>Japan</p>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-2 card-content">
      <div class="card-box">
        <div class="card1 text-center">
          <img src="../assets/img2.png" alt="image">
          <h6 class="text-left">Barcelona,</h6>
          <div class="japan">
            <p>Spain</p>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-2 card-content">
      <div class="card-box">
        <div class="card1 text-center">
          <img src="../assets/image 3.png" alt="image">
          <h6 class="text-left">Tokyo,</h6>
          <div class="japan">
            <p>Japan</p>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="content">
    <div class="content-text">
      <h5 class="pt-5">Top 10</h5>
      <p class="mt-3 mb-5">Top 10 destinations</p>
    </div>
    <div class="content-img row">
      <div class="img2">
        <div class="card-image">
          <img src="../assets/image1.png" alt="group">
        </div>
        <p>PARIS</p>
      </div>
      <div class="img2">
        <div class="card-image">
        <img src="../assets/image2.png" alt="group">
        </div>
        <p>BALI</p>
      </div>
      <div class="img2">
        <div class="card-image">
        <img src="../assets/image3.png" alt="group">
        </div>
        <p>SINGAPORE</p>
      </div>
      <div class="img2">
        <div class="card-image">
        <img src="../assets/image4.png" alt="group">
        </div>
        <p>AGRA</p>
      </div>
      <div class="img2">
        <div class="card-image">
        <img src="../assets/image5.png" alt="group">
        </div>
        <p>SYDNEY</p>
      </div>
      </div>
      <div class="row button-top mt-5 justify-content-center align-items-center">
        <div class="prev">
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div class="next">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Landing'
}
</script>

<style scoped>
.container {
  background: white;
  position: relative;
  width: 2000px;
  height: auto;
}

.text {
  margin-top: 120px;
}

.text h1 {
  font-size: 40px;
  font-weight: bold;
}

.text p {
  color: grey;
  margin-top: 5px;
}

.button-card button {
  width: 130px;
  font-size: 14px;
}
.button-search button {
  width: 290px;
  margin-top: 20px;
  font-size: 14px;
}

.ico {
  background: url('../assets/vector1.png');
  background-repeat: no-repeat;
  width: 5px;
  height: 5px;
  padding: 10px;
  display: inline-block;
  vertical-align: middle;
}

.ico2 {
  background: url('../assets/ankasa.png');
  background-repeat: no-repeat;
  width: 5px;
  height: 5px;
  padding: 10px;
  display: inline-block;
  vertical-align: middle;
}

.search {
  background: url('../assets/btnback.png');
  background-repeat: no-repeat;
  width: 5px;
  height: 5px;
  padding: 10px;
  margin-left: 100px;
  margin-top: 3px;
  display: inline-block;
  vertical-align: middle;
}

.section {
  background: #fff;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 20px;
  width:340px;
  height: 620px;
  position: absolute;
  top: 150px;
  right: 100px;
}

.title h6 {
  margin-top: 20px;
  margin-left: 20px;
  font-weight: bold;
  font-size: 15px;
}

.title h1 {
  margin-left: 20px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
}

.section .section-card {
  display: flex;
  margin-top: 20px;
}

.section .section-card a {
  color: rgb(35, 149, 255);
  margin-top: 5px;
  font-weight: bold;
  font-size: 14px;
}

.section .section-card img {
  width: 8px;
  height: 12px;
  margin-top: 5px;
}

.section-text {
  background: white;
  box-shadow: 0px 8px 17px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
  width: 270px;
  height: 80px;
  margin-top: -40px;
}

.text1 {
  display: flex;
  flex-direction: column;
}

.text1 p {
  font-size: 13px;
  color: gray;
  padding-top: 10px;
}

.text1 h6 {
  font-size: 17px;
  margin-top: 10px;
  font-weight: bold;
}

.text1 i {
  font-size: 12px;
  margin-top: 3px;
  color: gray;
}

.section-text img {
  width: 20px;
  height: 20px;
}

.content {
  width: 600px;
  height: 200px;
}

.content-img {
  justify-content: center;
  align-items: center;
}

.form-group h6 {
  font-size: 13px;
}

.form-select .form-control {
  width: 45%;
}

.form-check label {
  font-size: 13px;
  margin-top: 5px;
}

.text-card h6 {
  color:  rgb(35, 149, 255);
  font-weight:500px;
  margin-top: 30px;
}

.text-card h5 {
  color: black;
  font-weight: bold;
  margin-top: 5px;
}

.text-card p {
  color: rgb(35, 149, 255);
  margin-left: 1000px;
  margin-top: -20px;
}

.card-box {
  margin-top: 30px;
}

.card-box .card1 {
  width: 216.07px;
  height: 275px;
  background: #FFFFFF;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.15);
  border-radius: 20px;
}

.card-content {
  margin-left: 40px;
}

.card-box .card1 img {
  width: 160px;
  height: 160px;
  object-fit: contain;
  border-radius: 30px;
  margin: 10px 0;
}

.card-box .card1 h6 {
  margin-left: 20px;
  margin-top: 10px;
}

.card-box .card1 .japan {
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 10px;
}

.card-box .card1 .japan i {
  font-size: 50px;
  color: rgb(35, 149, 255);
  margin-top: -30px;
  margin-left: 90px;
}

.content {
  position: relative;
  background: url('../assets/group.png');
  background-repeat: no-repeat;
  width: 100%;
  height: 850px;
  margin-top: 550px;
}

.content-text h5 {
  color: white;
  margin-top: -500px;
  text-align: center;
}

.content-text p {
  font-size: 22px;
  color: white;
  font-weight: bold;
  text-align: center;
}

.card-image {
  width: 140px;
  height: 140px;
  padding: 5px;
  border-radius: 70px;
  border: 3px solid #fff ;
}

.img2 {
  margin: 20px;
}

.img2 p{
  margin-top: 25px;
  text-align: center;
  font-size: large;
  color: #fff;
}

.card-image img {
  width: 100%;
  height: 100%;
  border-radius: 70px;
}

.button-top {
  text-align: center;
}

.prev {
  width: 70px;
  height: 40px;
  border-radius: 10px;
  margin-right: 40px;
  background-color: transparent;
  border: 2px solid white;
}

.next {
  width: 70px;
  height: 40px;
  border-radius: 10px;
  background-color: white;
}

.prev .fa {
  color: white;
  margin-top: 5px;
  font-size: 28px;
}

.next .fa {
  color:  rgb(35, 149, 255);
  margin-top: 5px;
  font-size: 28px;
}
</style>
