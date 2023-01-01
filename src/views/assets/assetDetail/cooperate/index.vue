<template>
  <div class="cooperate-wrapper">
    <div class="coin-head flex-start">
      <span class="mr-5px">哈希池：</span>
      <el-select size="small" v-model="currency" placeholder="请选择" class="coin-seletct cooperate-select">
        <el-option v-for="item in poolList" :key="item.value" :label="item.name" :value="item.value"> </el-option>
      </el-select>
    </div>

    <div class="coin-item">
      <div class="item flex-start">
        <img
          class="mr-12px"
          src="https://hpool-upload.oss-ap-northeast-1.aliyuncs.com/static-upload/app/bhd.png"
          alt=""
        />
        <span>BHD</span>
      </div>
      <div class="item">
        <p class="num">0.00000000</p>
        <p class="title">總資產</p>
      </div>
      <div class="item">
        <p class="num">0.00000000</p>
        <div class="flex-start">
          <span class="title">可用餘額</span>
          <el-divider direction="vertical"></el-divider>
          <span class="link">去充值</span>
        </div>
      </div>
      <div class="item">
        <p class="num">0.00000000</p>
        <p class="title">合作額</p>
      </div>
    </div>

    <div class="operation mt-12px">
      <el-radio-group v-model="type" size="small">
        <el-radio-button :label="1">餘額轉合作</el-radio-button>
        <el-radio-button :label="2">合作轉餘額</el-radio-button>
      </el-radio-group>

      <div class="input-head flex-start mb-5px mt-16px">
        <span class="mr-12px" v-if="type == 1">餘額可劃轉數量</span>
        <span class="mr-12px" v-if="type == 2">合作可劃轉數量</span>
        <span class="num text-danger">≤ {{ num }} BHD</span>
      </div>
      <el-input v-model="inputNum" disabled size="small"></el-input>
      <p class="mt-5px text-danger">單次劃轉數量最小為 0.1 BHD</p>
      <div class="arrow">
        <i class="el-icon-bottom"></i>
      </div>
      <p v-if="type == 1">個人合作金額：0.00000000 BHD</p>
      <p v-if="type == 2">可用餘額：0.00000000 BHD</p>
      <el-button class="mt-12px" type="primary" style="width: 100%">立即劃轉</el-button>
    </div>

    <div class="notice">
      <i class="el-icon-info"></i>
      <div class="right-item">
        <span class="title">注意事項：</span>
        <p>1. 可用餘額及個人合作可相互劃轉；</p>
        <p>2. 餘額作為合作時，不可進行其他操作；</p>
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
      cooperateNum: '0.00000000',
      inputNum: 0,
      num: '0.00000000',
      type: 1,
      poolList: [
        {
          name: 'BHD 合作池',
          value: 'BHD',
        },
        {
          name: 'ALEO 合作池',
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
.cooperate-wrapper {
  color: rgba(0, 0, 0, 0.45);
  font-weight: 500;
  .cooperate-select {
    &::v-deep {
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
      width: 140px;
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
      font-size: 13px;
      min-width: 250px;
      img {
        max-width: 54px;
      }
    }
  }

  .operation {
    width: 450px;
    font-size: 13px;
    padding: 10px 0px;
    .arrow {
      text-align: center;
      i {
        font-size: 32px;
        color: #6695ef;
      }
    }
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
    p {
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