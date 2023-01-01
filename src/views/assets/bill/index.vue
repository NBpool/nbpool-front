<template>
  <div class="bill-wrapper">
    <h3 class="user-head">資產明細</h3>
    <div class="operation-head space-between">
      <div class="left-item flex-start">
        <div class="item flex-start mr-12px">
          <span class="mr-5px">幣種：</span>
          <el-select size="small" v-model="coin" placeholder="请选择" class="selector">
            <el-option v-for="item in coinList" :key="item.value" :label="item.name" :value="item.value"> </el-option>
          </el-select>
        </div>
        <div class="item flex-start">
          <span class="mr-5px">類型：</span>
          <el-select size="small" v-model="type" placeholder="请选择" class="selector">
            <el-option label="全部" value=""></el-option>
            <el-option v-for="item in typeList" :key="item.value" :label="item.name" :value="item.value"> </el-option>
          </el-select>
        </div>
      </div>

      <div class="right-item flex-start">
        <i class="el-icon-refresh"></i>
        <span>刷新</span>
      </div>
    </div>

    <div class="bill-list mt-12px">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="變動金額">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="可用餘額">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="時間">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="事件">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coin: 'BHD',
      type: '',
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
      typeList: [
        {
          name: '收入',
          value: 'income',
        },
        {
          name: '支出',
          value: 'pay',
        },
      ],
    };
  },
  methods: {
    handleEdit() {
      
    },
    handleDelete() {

    }
  },
};
</script>

<style lang="scss" scoped>
.bill-wrapper {
  color: rgba(0, 0, 0, 0.45);
  font-weight: 500;
  .user-head{
    color: #000;
  }
  .operation-head {
    .selector {
      &::v-deep {
        .el-input__inner {
          border-radius: 4px;
          border-color: #d9d9d9;
          font-size: 13px;
        }
      }
    }
    .right-item {
      color: rgb(82, 196, 26);
      cursor: pointer;
    }
  }
}
</style>