<template>
  <!-- Slider main container -->
  <div ref="swiper" class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <img src="@/assets/swiper/banner12.jpg" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="@/assets/swiper/banner15.png" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="@/assets/swiper/banner4.jpg" alt="" />
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper, { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/autoplay';

export default {
  mounted() {
    new Swiper(this.$refs.swiper, {
      modules: [Pagination, Autoplay, Navigation],
      autoplay: true,
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      on: {
        click: function (swiper, event) {
          console.log(swiper.clickedIndex);
        },
      },
    });
  },
};
</script>
<style lang="scss" scoped>
.swiper {
  width: 100%;
  &::v-deep {
    .swiper-pagination-bullet {
      width: 20px;
      height: 8px;
      border-radius: 2px;
      background-color: rgba(255, 255, 255, 0.6);
    }
    .swiper-pagination-bullet-active {
      background-color: #fff;
    }
  }
}
.swiper-slide {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
