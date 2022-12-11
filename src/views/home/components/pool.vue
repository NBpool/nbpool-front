<template>
  <div class="pool-wrapper">
    <div class="pool-head space-between">
      <div class="head-item">幣種</div>
      <div class="head-item">哈希池總容量</div>
      <div class="head-item">24H總爆塊</div>
      <div class="head-item">共識算法</div>
      <div class="head-item">全網難度</div>
      <div class="head-item">價格</div>
    </div>
    <div class="pool-content">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item name="1">
          <div class="pool-title space-between" slot="title">
            <div class="pool-item">ALEO</div>
            <div class="pool-item">3.23 MC/s</div>
            <div class="pool-item">1916</div>
            <div class="pool-item">PoW (zkSNARK)</div>
            <div class="pool-item">122.67 MC/s</div>
            <div class="pool-item">$0.0863</div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.pool-wrapper {
  width: 100%;
  .pool-head {
    background: #5697f6;
    color: #fff;
    border-radius: 4px 4px 0 0;
    .head-item {
      min-width: 200px;
      text-align: left;
      padding: 10px 4px;
      text-indent: 10px;
      &:last-child{
        margin-right: 21px;
      }
    }
  }
  .pool-content {
    width: 100%;
    .pool-title {
      width: 100%;
      .pool-item {
        min-width: 200px;
        text-align: left;
        padding: 0px 4px;
        text-indent: 10px;
      }
    }
  }
}
</style>