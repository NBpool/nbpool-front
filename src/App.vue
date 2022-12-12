<template>
  <div id="app">
    <customHeader></customHeader>
    <div class="main-content">
      <router-view />
    </div>
    <customFooter></customFooter>
  </div>
</template>

<script>
export default {
  name: 'App',
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
    padding-bottom: 54px;
  }
}
</style>
