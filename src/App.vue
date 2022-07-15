<template>
  <div>App</div>
  <img :src="logo" alt="">
  <el-button plain type="primary" v-text="123" />
</template>

<script>
import logo from './assets/images/logo.svg';

export default {
  name: 'App',
  data: function() {
    return {
      logo
    }
  }
}
</script>

<style lang='scss'>

</style>