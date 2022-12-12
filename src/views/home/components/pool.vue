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
      <el-collapse v-model="activeName" accordion @change="openChart">
        <el-collapse-item name="1">
          <div class="pool-title space-between" slot="title">
            <div class="pool-item">ALEO</div>
            <div class="pool-item">3.23 MC/s</div>
            <div class="pool-item">1916</div>
            <div class="pool-item">PoW (zkSNARK)</div>
            <div class="pool-item">122.67 MC/s</div>
            <div class="pool-item">$0.0863</div>
          </div>
          <div class="chart-content">
            <el-button type="primary" size="mini">生態池</el-button>
            <div class="flex-start mt-12px">
              <el-radio-group v-model="date" size="mini">
                <el-radio-button label="周"></el-radio-button>
                <el-radio-button label="月"></el-radio-button>
              </el-radio-group>
              <el-divider direction="vertical" class="mx-20px"></el-divider>
              <el-link class="mr-4px">更多统计</el-link>
              <i class="el-icon-arrow-right"></i>
            </div>
            <div class="chart-wrapper" v-if="showChart">
              <lineCharts></lineCharts>
            </div>
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
      date: '周',
      showChart: false,
    };
  },
  components: {
    lineCharts: () => import('@/components/charts/line.vue'),
  },
  methods: {
    openChart() {
      console.log('aaa');
      this.showChart = !this.showChart;
    },
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
      &:last-child {
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
    .chart-content {
      width: 100%;
      height: 500px;
      .chart-wrapper {
        width: 100%;
        height: 100%;
        padding-bottom: 50px;
      }
    }
  }
}
</style>