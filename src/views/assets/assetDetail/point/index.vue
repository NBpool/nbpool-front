<template>
  <div class="point-wrapper">
    <div class="operation space-between">
      <div class="left-item flex-start">
        <span class="mr-5px">哈希池：</span>
        <el-select size="small" v-model="pool" placeholder="请选择" class="selector">
          <el-option v-for="item in poolList" :key="item.value" :label="item.name" :value="item.value"> </el-option>
        </el-select>
      </div>
      <div class="right-item flex-start">
        <i class="el-icon-refresh"></i>
        <span>刷新</span>
      </div>
    </div>

    <div class="point-list mt-12px">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="指向源地址">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column label="指向金額">
          <template slot-scope="scope">
            <span>{{scope.row.date}}</span>
          </template>
        </el-table-column>
        <el-table-column label="指向保證金">
          <template slot-scope="scope">
            <span>{{scope.row.date}}</span>
          </template>
        </el-table-column>
        <el-table-column label="狀態">
          <template slot-scope="scope">
            <span>{{scope.row.date}}</span>
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
      pool: '',
      poolList: [
        {
          name: 'BHD 哈希池',
          value: 'BHD',
        },
        {
          name: 'ALEO 哈希池',
          value: 'ALEO',
        },
      ],
      tableData: []
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
.point-wrapper {
  color: rgba(0, 0, 0, 0.45);
  font-weight: 500;
  .selector {
    &::v-deep {
      .el-input__inner {
        border-radius: 4px;
        border-color: #d9d9d9;
        font-size: 13px;
      }
    }
  }
  .operation {
    font-size: 14px;
    .right-item {
      color: rgb(82, 196, 26);
      cursor: pointer;
    }
  }
}
</style>