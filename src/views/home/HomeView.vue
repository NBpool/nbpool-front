<template>
  <div class="home">
    <swipper></swipper>
    <notice></notice>
    <div class="content-wrapper">
      <pool class="mt-40px"></pool>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
    swipper: () => import('./components/swiper.vue'),
    notice: () => import('./components/notice.vue'),
    pool: () => import('./components/pool.vue'),
  },
};
</script>
