<template>
  <div class="assets-detail">
    <h3 class="user-head">資產明細</h3>
    <div class="detail-wrapper">
      <div class="menu-wrapper">
        <router-link class="menu-item" to="/assets/assetDetail/index" active-class="activeLink">资产</router-link>
        <router-link class="menu-item" to="/assets/assetDetail/withdraw" active-class="activeLink">提现</router-link>
        <router-link class="menu-item" to="/assets/assetDetail/cooperate" active-class="activeLink">合作</router-link>
        <router-link class="menu-item" to="/assets/assetDetail/point" active-class="activeLink">指向</router-link>
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
.detail-wrapper {
  .menu-wrapper {
    padding-bottom: 10px;
    border-bottom: 1px solid #e8e8e8;
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