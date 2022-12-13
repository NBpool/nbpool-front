<template>
  <div id="app">
    <customHeader></customHeader>
    <div class="main-content">
      <router-view />
    </div>
    <customFooter v-if="!excludeFootArray.includes(this.$route.path)"></customFooter>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      excludeFootArray: ['/login','/register','/forget']
    }
  },
  components: {
    customHeader: () => import('@/components/layout/customHeader.vue'),
    customFooter: () => import('@/components/layout/customFooter.vue'),
  },
};
</script>

<style lang="scss" scoped>
#app {
  .main-content {
    padding-top: 54px;
  }
}
</style>
