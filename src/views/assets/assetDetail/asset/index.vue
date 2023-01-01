<template>
  <div class="assets-list">
    <div class="head-operation space-between">
      <span>總資產≈ $0.0000</span>
      <div class="right-item flex-start">
        <span class="mr-5px">關閉小額資產</span>
        <el-switch v-model="closeSmall"></el-switch>
      </div>
    </div>

    <div class="list-wrapper flex flex-col justify-start items-center">
      <div class="list-item">
        <div class="item flex-start">
          <img src="https://hpool-upload.oss-ap-northeast-1.aliyuncs.com/static-upload/app/bhd.png" alt="" />
          <span>BHD</span>
        </div>
        <div class="item">
          <p class="num">0.00000000</p>
          <div class="flex-start">
            <el-tooltip effect="dark" content="總資產 = 可用餘額 + 餘額轉合作 + 保證金 + 理財資產" placement="top">
              <span class="title">总资产</span>
            </el-tooltip>
            <i class="el-icon-warning-outline"></i>
          </div>
        </div>
        <div class="item">
          <p class="num">0.00000000</p>
          <p class="title">可用餘額</p>
          <span class="link" @click="withdraw('BHD')">提現</span>
        </div>
        <div class="item">
          <p class="num">0.00000000</p>
          <p class="title">合作金額</p>
          <span class="link" @click="cooperate('BHD')">合作</span>
        </div>
        <div class="item">
          <p class="num">0.00000000</p>
          <p class="title">提現中</p>
          <span class="link" @click="undo">撤銷</span>
        </div>
      </div>

      <div class="list-item">
        <div class="item flex-start">
          <img src="https://hpool-upload.oss-ap-northeast-1.aliyuncs.com/static-upload/app/aleo.png" alt="" />
          <span>ALEO</span>
        </div>
        <div class="item">
          <p class="num">0.00000000</p>
          <div class="flex-start">
            <el-tooltip effect="dark" content="總資產 = 可用餘額 + 餘額轉合作 + 保證金 + 理財資產" placement="top">
              <span class="title">总资产</span>
            </el-tooltip>
            <i class="el-icon-warning-outline"></i>
          </div>
        </div>
        <div class="item">
          <p class="num">0.00000000</p>
          <p class="title">可用餘額</p>
          <span class="link" @click="withdraw('ALEO')">提現</span>
        </div>
        <div class="item">
          <p class="num">0.00000000</p>
          <p class="title">合作金額</p>
          <span class="link" @click="cooperate('ALEO')">合作</span>
        </div>
        <div class="item">
          <p class="num">0.00000000</p>
          <p class="title">提現中</p>
          <span class="link" @click="undo">撤銷</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      closeSmall: false,
    };
  },
  methods: {
    withdraw(data) {
      this.$router.push({
        path: '/assets/assetDetail/withdraw',
        query: {
          currency: data,
        },
      });
    },
    cooperate(data) {
      this.$router.push({
        path: '/assets/assetDetail/cooperate',
        query: {
          currency: data,
        },
      });
    },
    undo() {
      this.$router.push('/assets/flow')
    }
  },
};
</script>

<style lang="scss" scoped>
.assets-list {
  color: rgba(0, 0, 0, 0.45);
  font-weight: 500;
  .head-operation {
    font-size: 13px;
  }

  .list-wrapper {
    .list-item {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid #ecf0f6;
      padding: 10px 0px;
      .item {
        min-width: 200px;
        font-size: 13px;
        font-weight: 600;
        img {
          max-width: 54px;
          margin-right: 10px;
        }
        .num {
          font-size: 15px;
        }
        .title {
          margin-top: 2px;
          margin-bottom: 2px;
        }
      }
    }
  }
}
</style>