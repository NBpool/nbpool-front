<template>
  <div class="withdraw-wrapper">
    <div class="coin-head flex-start">
      <span class="mr-5px">幣種：</span>
      <el-select size="small" v-model="currency" placeholder="请选择" class="coin-seletct withdraw-select">
        <el-option v-for="item in coinList" :key="item.value" :label="item.name" :value="item.value"> </el-option>
      </el-select>
    </div>

    <div class="coin-item">
      <div class="item flex-start">
        <img
          class="mr-12px"
          src="https://hpool-upload.oss-ap-northeast-1.aliyuncs.com/static-upload/app/aleo.png"
          alt=""
        />
        <span>ALEO</span>
      </div>
      <div class="item">
        <p class="num">0.00000000/0.00000000</p>
        <p class="title">可用餘額/總資產</p>
      </div>
      <div class="item">
        <p class="num">0.00000000</p>
        <div class="flex-start">
          <el-tooltip effect="dark" content="凍結資產 = 餘額轉合作 + 指向保證金" placement="top">
            <span class="title">凍結資產</span>
          </el-tooltip>
          <i class="el-icon-warning-outline"></i>
        </div>
      </div>
    </div>

    <div class="address flex-start">
      <span class="title mr-5px">提現地址：</span>
      <el-select
        size="small"
        v-model="address"
        placeholder="請選擇提現地址"
        class="withdraw-select"
        style="width: 100%"
      >
        <el-option disabled>
          <div class="no-data">暂无数据</div>
        </el-option>
        <el-option disabled>
          <div class="add-btn">
            <el-button @click="addAddress" type="primary" style="width: 100%" size="mini">添加提现地址</el-button>
          </div>
        </el-option>
      </el-select>
    </div>

    <div class="withdraw-input">
      <div class="input-head flex-start mb-5px">
        <span class="mr-12px">可提現數量</span>
        <span class="num text-danger">{{ withdrawNum }} {{ currency }}</span>
      </div>
      <el-input v-model="inputNum" disabled size="small"></el-input>
      <p class="text-danger mt-5px">單次提現數量最小為 0.01 {{ currency }}</p>
      <div class="space-between">
        <span>手續費：0 %</span>
        <span>實際到賬：0.00000000 {{ currency }}</span>
      </div>
      <el-button class="mt-12px" type="primary" style="width: 100%">申请提现</el-button>
    </div>

    <div class="notice">
      <i class="el-icon-info"></i>
      <div class="right-item">
        <span class="title">注意事項：</span>
        <p>1. 提現申請T+1日處理，每日17:00 (UTC+8)集中審核；</p>
        <p>2. 若想撤銷提現申請，可在審核前在提現記錄中進行撤銷；</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currency: 'ALEO',
      address: null,
      withdrawNum: '0.00000000',
      inputNum: 0,
      coinList: [
        {
          name: 'BHD',
          value: 'BHD',
        },
        {
          name: 'ALEO',
          value: 'ALEO',
        },
      ],
    };
  },
  methods: {
    addAddress() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.withdraw-wrapper {
  color: rgba(0, 0, 0, 0.45);
  font-weight: 500;
  .withdraw-select {
    &::v-deep {
      .el-input {
      }
      .el-input__inner {
        border-radius: 4px;
        border-color: #d9d9d9;
        font-size: 13px;
      }
    }
  }
  .coin-head {
    span {
      font-size: 15px;
    }
    .coin-seletct {
      width: 120px;
    }
  }

  .coin-item {
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0px;
    border-top: 1px solid #ecf0f6;
    border-bottom: 1px solid #ecf0f6;
    .item {
      min-width: 300px;
      img {
        max-width: 54px;
      }
    }
  }

  .address {
    width: 450px;
    margin: 12px 0px;
    .title {
      display: inline-block;
      white-space: nowrap;
    }
  }

  .withdraw-input {
    width: 450px;
    font-size: 13px;
    padding: 10px 0px;
  }
  .notice {
    padding: 10px;
    background-color: #fffbe6;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    i {
      margin-top: 4px;
      margin-right: 5px;
      color: #efb041;
    }
    .title {
      color: rgba(0, 0, 0, 0.85);
      font-size: 15px;
      font-weight: 600;
    }
    p{
      font-size: 13px;
    }
  }
}
.no-data {
  text-align: center;
}
.add-btn {
  width: 100%;
}
</style>