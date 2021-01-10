<template>
  <div>

    <Dropdown :options="array" @input="array" />
  </div>
</template>

<script>
import Dropdown from './Dropdown'

export default {
  name: 'TryDropdown',
  components: {
    Dropdown
  },
  data () {
    return {
      array: ['hello', 'world', 'flat', 'earth']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
