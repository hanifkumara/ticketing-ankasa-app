<template>
  <div>
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../../components/main/base/Navbar'
import Footer from '../../components/main/base/Footer'

export default {
  name: 'Main',
  components: {
    Navbar,
    Footer
  }
}

</script>

<style lang="scss" scoped>

</style>
