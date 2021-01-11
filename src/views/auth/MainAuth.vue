<template>
  <div class=" container-fluid">

    <div class="row">

      <!-- Left Side -->
      <div class="left-side col-lg-7 col-sm-3 d-none d-sm-block">
        <div class="d-flex justify-content-center">
          <img src="../../assets/auth/illustration.svg" alt="plane">
        </div>
      </div>

      <!-- Right Side -->
      <div class="right-side col-lg-5 col-sm-9">
        <!-- Logo Ankasa -->
        <div class="title-auth d-flex">
          <img src="../../assets/auth/plane.svg" alt="plane">
          <h6>Ankasa</h6>
        </div>
        <div class="space"></div>
        <!-- Children -->
        <router-view/>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MainAuth'
}
</script>

<style lang="scss" scoped>

.left-side {
  padding: 0;
  min-height: 100vh;
  background-color: #2395FF;
  overflow: hidden;
  div  {
    padding: 100px 0;
  }
}

.right-side {
  padding: 50px 80px;
}

.space {
  height: 100px;
}

.title-auth {
  img {
    margin: 0 15px 0 0;
  }
  h6 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #414141;
  }
}

@media(max-width: 767px) {
  .right-side {
    padding: 50px;
  }
}

@media(max-width: 575px) {
  .right-side {
    padding: 50px 28px ;
  }

  .space {
    height: 70px;
  }
}

</style>
