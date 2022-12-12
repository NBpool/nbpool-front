<template>
  <div class="line-chart" style="width: 100%; height: 100%" ref="line"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              // backgroundColor: '#6a7985',
            },
          },
        },
        // legend: {
        //   data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
        // },
        grid: {
          top: 50,
          bottom: 50,
          left: 10,
          right: 10,
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: ['12.1', '12.2', '12.3', '12.4', '12.5', '12.6', '12.7', '12.8', '12.9', '12.10'],
          boundaryGap: false,
        },
        yAxis: [
          {
            name: '全网哈希频率',
            type: 'value',
            position: 'left',
            splitLine: {
              //去除网格线
              show: false,
            },
            min: 10000,
            max: 90000,
            splitNumber: 6,
          },
          {
            type: 'value',
            position: 'right',
            name: '哈希池哈希频率',
            splitLine: {
              //去除网格线
              show: false,
            },
            min: 1000,
            max: 9000,
            splitNumber: 6,
          },
        ],
        series: [
          {
            name: '全网哈希频率',
            type: 'line',
            // stack: 'Total',
            yAxisIndex: 0,
            smooth: true,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(65, 137, 239,1)',
                },
                {
                  offset: 0.5,
                  color: 'rgba(65, 137, 239,0.5)',
                },
                {
                  offset: 1,
                  color: 'rgba(65, 137, 239,0.1)',
                },
              ]),
            },
            // emphasis: {
            //   focus: 'series',
            // },
            data: [20000, 34325, 22345, 13412, 64455, 52344, 42993, 34325, 22345, 13412],
          },
          {
            name: '哈希池哈希频率',
            type: 'line',
            // stack: 'Total',
            smooth: true,
            yAxisIndex: 1,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(94, 186, 99,1)',
                },
                {
                  offset: 0.5,
                  color: 'rgba(94, 186, 99,0.5)',
                },
                {
                  offset: 1,
                  color: 'rgba(94, 186, 99,0.2)',
                },
              ]),
            },
            // emphasis: {
            //   focus: 'series',
            // },
            data: [2200, 1820, 1910, 4349, 5234, 6330, 7310, 1910, 4349, 5234],
          },
        ],
      },
      lineChart: null,
    };
  },
  methods: {
    drawChart() {
      // 引用chart并初始化
      this.lineChart = echarts.init(this.$refs.line);
      // 使用刚指定的配置项和数据显示图表。
      this.lineChart.setOption(this.option);
    },
  },
  mounted() {
    this.drawChart();
    window.addEventListener('resize', () => {
      this.lineChart.resize();
    });
  },
};
</script>

<style lang="scss" scoped>
</style>