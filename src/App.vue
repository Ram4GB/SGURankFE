<template>
  <default>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <transition appear name="fade">
            <component :is="Component" />
        </transition>
      </keep-alive>
    </router-view>
  </default>
</template>

<script>
import Default from './components/Default.vue';

export default {
  name: 'App',
  components: {
    Default,
  },
}
</script>

<style lang='scss'>
.fade-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.fade-enter-active {
  transition: all 0.3s ease-in;
}

.fade-enter-to {
  opacity: 1;
  transform: translateX(5px);
}
</style>