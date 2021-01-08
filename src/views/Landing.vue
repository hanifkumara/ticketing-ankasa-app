<template>
  <div class="container">
  <div class="text">
    <h1>Find Your Flight</h1>
    <p>and explore the world with us</p>
    </div>
    <div class="image">
      <img src="../assets/img1.png" alt="image">
    </div>
    <div class="section"> <!-- display flex, marginbottom, flex direction colom -->
      <h6>Hey,</h6>
      <h1>where you want to go?</h1>
      <div class="section-card"> <!-- display row-->
         <a>Recently Searched</a>
         <img src="../assets/btnback.png" alt="btnback">
      </div>

    <div class="section1"> <!--display flex-->
      <div class="section-text">
        <div class="text1"> <!-- display flex , flex-direction colom-->
          <h6>From</h6>
          <p>Medan</p>
        <i>Indonesia</i>
        </div>
        <img src="../assets/row.png" alt="row" class="ml-5 mr-5">
        <div class="text2"> <!-- display flex , flex-direction colom -->
          <h6>To</h6>
          <p>Tokyo</p>
          <i>Japan</i>
        </div>

        <div class="button">
          <div class="button-card">
          <img src="../assets/ankasa.png" alt="row">
          <button type="button" class="btn btn-primary">One way</button>
          </div>
          <div class="button-card1">
          <img src="../assets/vector1.png" alt="row">
          <button type="button" class="btn btn-light">Round trip</button>
          </div>
        </div>

        <!-- <div class="form-group">
          <h6>Departure</h6>
          <label for="exampleFormControlSelect1">Example select</label>
          <select class="form-control" id="exampleFormControlSelect1"></select>
        </div> -->

         <!-- <div class="form-group1">
          <h6>How many person?</h6>
          <select class="form-control" id="exampleFormControlSelect1"></select>
          <select class="form-control" id="exampleFormControlSelect1"></select>
        </div> -->

          <!-- <div class="form-group2">
          <h6>Which class do you want?</h6>
          <div class="image">
            <img src="../assets/radiobtn.png" alt="image">
            <img src="../assets/01.png" alt="image">
            <img src="../assets/01.png" alt="image">
          </div>
    </div> -->

     <!-- <div class="form-group3">
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="SEARCH FLIGHT">
  </div> -->
        </div>
      </div>
    </div>

  <div class="text-card">
    <h6>TRENDING</h6>
    <h5>Trending destinations</h5>
    <p>view all</p>
  </div>

  <div class="card">
    <div class="card1">
      <img src="../assets/image 3.png" alt="image">
      <h2>Tokyo,</h2>
      <p>Japan</p>
    </div>
    <div class="card1">
      <img src="../assets/img2.png" alt="image">
      <h2>Barcelona,</h2>
      <p>Spain</p>
    </div>
    <div class="card1">
      <img src="../assets/image 3.png" alt="image">
      <h2>Tokyo,</h2>
      <p>Japan</p>
    </div>
    <div class="card1">
      <img src="../assets/img2.png" alt="image">
      <h2>Barcelona,</h2>
      <p>Spain</p>
    </div>
    <div class="card1">
      <img src="../assets/image 3.png" alt="image">
      <h2>Tokyo,</h2>
      <p>Japan</p>
    </div>
  </div>

    <div class="content">
       <img src="../assets/group.png" alt="group">
    <div class="content-text">
      <h5>Top 10</h5>
      <p>Top 10 destinations</p>
    </div>
    <div class="content-img">
      <div class="img1">
        <img src="../assets/image1.png" alt="group">
        <p>PARIS</p>
      </div>
       <div class="img2">
        <img src="../assets/image2.png" alt="group">
        <p>BALI</p>
      </div>
       <div class="img1">
        <img src="../assets/image3.png" alt="group">
        <p>SINGAPORE</p>
      </div>
       <div class="img1">
        <img src="../assets/image4.png" alt="group">
        <p>AGRA</p>
      </div>
       <div class="img1">
        <img src="../assets/image5.png" alt="group">
        <p>SYDNEY</p>
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
  height: 6000px;
}

.text {
  margin-top: 100px;
}

.text h1 {
  margin-top: 90px;
  font-size: 30px;
  font-weight: bold;
}

.text p {
  color: grey;
}

.image{
  margin-top: 80px;
}

.section {
  background: rgb(252, 242, 240);
  border-radius: 20px;
  width:300px;
  height: 600px;
  position: absolute;
  top: -60px;
  right: 240px;
}

.section h6 {
  margin-top: 20px;
  margin-left: 20px;
  font-weight: bold;
}

.section h1 {
  margin-left: 20px;
  font-weight: bold;
  margin-top: 10px;
}

.section .section-card {
  display: flex;
  margin-top: 20px;
}

.section .section-card a {
  color: rgb(35, 149, 255);
  margin-top: 5px;
  margin-left: 20px;
  font-weight: bold;
}

.section .section-card img {
  width: 10px;
  height: 10px;
  margin-top: 5px;
  margin-left: 100px;
}

.section1 {
  background: white;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
  width: 300px;
  height: 20px;
  margin-top: 30px;
  padding: 50px;
}

.section-text {
  display: flex;
  margin-top: -40px;
}

.text1 {
  display: flex;
  flex-direction: column;
  background-color: hotpink;
  width: 50%;
}
.text2 {
  display: flex;
  flex-direction: column;
}

.section-text img {
  width: 20px;
  height: 20px;
}

.button {
  display: flex;
  flex-direction: row;
  margin-top:130px;
  margin-left: -100px;
  width: 30px;
  height: 50px;
}

.content {
  width: 600px;
  height: 200px;
}

.contet .content-img {
  display:flex;
  flex-direction:row;
}

.content .content-img .img1{
  margin-top: -250px;
  height: 100px;
  width: 70px;
  display: flex;
  flex-direction: row;
}
</style>
