<template>
  <div
    :class="{ 'has-logo': showLogo }"
  >
    <!-- <logo v-if="showLogo" :collapse="isCollapse" /> -->
    <el-scrollbar :class="settings.sideTheme" wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :unique-opened="true"
        :collapse-transition="false"
        mode="vertical"
        class="my-menu"
      >
        <div class="fixedItem flex-start">
          <svg-icon icon-class="user" />
          <span>个人中心</span>
        </div>
        <sidebar-item
          v-for="(route, index) in sidebarRouters"
          :key="route.path + index"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Logo from './Logo';
import SidebarItem from './SidebarItem';
// import variables from '@/assets/styles/variables.scss';

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapState(['settings']),
    ...mapGetters(['sidebarRouters', 'sidebar']),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    // variables() {
    //   return variables;
    // },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
};
</script>

<style lang="scss" scoped>
.my-menu {
  &::v-deep {
    .el-menu-item{
        height: 45px;
        line-height: 45px;
    }
    .el-submenu__title {
      height: 45px;
      line-height: 45px;
    }
  }
}
.fixedItem {
  height: 45px;
  padding: 0 20px;
  background-color: #ecf0f6;
  font-size: 16px;
  margin-bottom: 12px;
  &::v-deep {
    .svg-icon {
      margin-right: 10px;
    }
  }
  span {
    font-weight: 600;
  }
}
</style>
