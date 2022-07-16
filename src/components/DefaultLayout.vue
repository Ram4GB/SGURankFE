<template>
  <div class="container">
    <div class="header">
      <router-link to="/">
        <img
          class="logo"
          :src="logo"
          alt=""
        >
      </router-link>
    </div>
    <el-main>
      <slot />
    </el-main>
  </div>
</template>

<script>
import logo from '../assets/images/logo.png';

export default {
  setup() {
    return {
      logo
    };
  }
};
</script>

<style lang='scss' scoped>
.logo {
  width: 50px;
}

.header {
  padding: 10px;
}
</style>