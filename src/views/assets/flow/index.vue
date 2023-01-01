<template>
  <div class="flow-detail">
    <h3 class="user-head">充提記錄</h3>
    <div class="detail-wrapper">
      <div class="menu-wrapper">
        <router-link class="menu-item" to="/assets/flow/withdraw" active-class="activeLink">提現記錄</router-link>
        <router-link class="menu-item" to="/assets/flow/charge" active-class="activeLink">充值記錄</router-link>
      </div>

      <div class="menu-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.flow-detail {
  .menu-wrapper {
    text-align: center;
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 10px;
    .menu-item {
      padding: 0px 28px 10px 28px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.45);
      font-size: 15px;
    }
  }
  .menu-content {
    // margin-top: 12px;
    padding: 10px;
  }
  .activeLink {
    color: #1890ff !important;
    border-bottom: 2px solid #1890ff !important;
  }
}
</style>