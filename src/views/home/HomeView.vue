<template>
  <div class="home">
    <swipper></swipper>
    <notice></notice>
    <div class="content-wrapper">
      <pool class="mt-40px"></pool>
      <div class="intro-wrapper">
        <h3>PoC 容量證明機制</h3>
        <h5>服務於區塊鏈，下一代更有意義的挂機方式</h5>
        <div class="intro-content">
          <div class="intro-item">
            <img src="https://www.hpool.in/static/media/intro1.5616076b.png" alt="" />
            <div class="right-item">
              <h4>更有意義的挂機</h4>
              <p>
                相比傳統的主機耗電大，噪音大，熱量大，PoC容量證明綠色節能，低功耗，低噪音，無熱量，並為其他區塊鏈提供底層服務
              </p>
            </div>
          </div>
          <div class="intro-item">
            <img src="https://www.hpool.in/static/media/intro2.1559cd76.png" alt="" />
            <div class="right-item">
              <h4>多硬盤挂機</h4>
              <p>可使用專業的多硬盤主機，收益更多</p>
            </div>
          </div>
          <div class="intro-item">
            <img src="https://www.hpool.in/static/media/intro3.bdf6abfc.png" alt="" />
            <div class="right-item">
              <h4>真正的人人能挂機</h4>
              <p>用戶使用家中的硬盤空間就能挂機，無需昂貴的顯卡和主機</p>
            </div>
          </div>
          <div class="intro-item">
            <img src="https://www.hpool.in/static/media/intro4.43b3c9cb.png" alt="" />
            <div class="right-item">
              <h4>天然就很省電</h4>
              <p>PoC 容量證明數分鐘掃描一次硬盤，平時硬盤處於待機狀態</p>
            </div>
          </div>
        </div>
      </div>
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

<style lang="scss" scoped>
.intro-wrapper {
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  h3 {
    text-align: center;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 25px;
  }

  h5 {
    margin-top: 12px;
    font-size: 15px;
    text-align: center;
    color: rgba(0, 0, 0, 0.65);
  }
  .intro-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 32px;
    .intro-item {
      width: 36%;
      display: flex;
      justify-content: flex-start;
      margin: 24px;
      img {
        margin-right: 20px;
      }
      h4 {
        margin-bottom: 12px;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 600;
        font-size: 20px;
      }
      p {
        font-size: 15px;
        color: rgba(0, 0, 0, 0.45);
      }
    }
  }
}
</style>
