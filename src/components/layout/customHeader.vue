<template>
  <div class="header-wrapper">
    <div class="content-wrapper space-between">
      <div class="left-item flex-start">
        <img class="mr-20px" src="https://www.hpool.in/static/media/logo.a4b65d1e.png" alt="" />
        <router-link to="/" class="mr-20px text-white">下载中心</router-link>
        <router-link to="/" class="text-white">帮助中心</router-link>
      </div>
      <div class="right-item flex-start">
        <div class="no-login mr-20px" v-if="!token">
          <el-button size="small" @click="toPage('/login')">登录</el-button>
          <el-button size="small" @click="toPage('/register')">注册</el-button>
        </div>
        <div class="has-login mr-50px" v-else>
          <i class="el-icon-bell mr-15px text-white cursor-pointer"></i>
          <el-dropdown @command="handleCommand" placement="top">
            <span class="el-dropdown-link text-white cursor-pointer">
              takeorangeforyou@gmail.com<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="center">个人中心</el-dropdown-item>
              <el-dropdown-item command="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

        <el-dropdown @command="handleCommand" placement="top">
          <span class="el-dropdown-link text-white cursor-pointer">
            {{ languages[currentLanguage] }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh">繁体中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Head',
  data() {
    return {
      languages: {
        zh: '繁体中文',
        en: 'English',
      },
      currentLanguage: 'zh',
    };
  },
  computed: {
    ...mapGetters(['token']),
  },
  methods: {
    handleCommand(val) {
      console.log(val);
      switch (val) {
        case 'zh':
          this.currentLanguage = val;
          break;

        case 'en':
          this.currentLanguage = val;
          break;
        case 'center':
          this.$router.push('/center');
          break;
        case 'logout':
          this.logout();
          break;

        default:
          break;
      }
    },
    async logout() {
      this.$confirm('确定退出登录吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$store.dispatch('LogOut').then(() => {
            this.$router.push('/login');
          });
        })
        .catch(() => {});
    },
    toPage(page) {
      this.$router.push(page);
    },
  },
};
</script>


<style lang="scss" scoped>
.header-wrapper {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 54px;
  line-height: 54px;
  background-color: #1f457d;
}
</style>