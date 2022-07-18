<template>
  <default-layout>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <transition
          appear
          name="fade"
        >
          <component :is="Component" />
        </transition>
      </keep-alive>
    </router-view>
  </default-layout>
</template>

<script>
import DefaultLayout from './components/DefaultLayout.vue';

export default {
  name: 'App',
  components: {
    DefaultLayout,
  },
};
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