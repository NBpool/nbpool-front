<template>
  <div class="login">
    <el-form ref="registerForm" :model="registerForm" :rules="loginRules" class="login-form">
      <h3 class="title">NBPOOL</h3>
      <el-form-item prop="username">
        <el-input v-model="registerForm.username" type="text" auto-complete="off" placeholder="账号">
          <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="registerForm.password"
          type="password"
          auto-complete="off"
          placeholder="密码"
          @keyup.enter.native="handleLogin"
        >
          <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>
      <el-form-item prop="code" v-if="captchaEnabled">
        <el-input
          v-model="registerForm.code"
          auto-complete="off"
          placeholder="验证码"
          style="width: 63%"
          @keyup.enter.native="handleLogin"
        >
          <svg-icon slot="prefix" icon-class="validCode" class="el-input__icon input-icon" />
        </el-input>
        <div class="login-code">
          <img :src="codeUrl" @click="getCode" class="login-code-img" />
        </div>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
          :loading="loading"
          size="medium"
          type="primary"
          style="width: 100%"
          @click.native.prevent="handleLogin"
        >
          <span v-if="!loading">注册</span>
          <span v-else>注册中...</span>
        </el-button>
        <div style="float: left">
          <router-link class="link-type" to="/login">返回登录</router-link>
        </div>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © 2018-2022 NBPOOL All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
import { getCodeImg, register } from '@/api/login';
import Cookies from 'js-cookie';
import { encrypt } from '@/utils/jsencrypt';

export default {
  name: 'Login',
  data() {
    return {
      codeUrl: '',
      registerForm: {
        username: '',
        password: '',
        code: '',
        uuid: '',
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '请输入您的账号' }],
        password: [{ required: true, trigger: 'blur', message: '请输入您的密码' }],
        code: [{ required: true, trigger: 'change', message: '请输入验证码' }],
      },
      loading: false,
      // 验证码开关
      captchaEnabled: true,
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  created() {
    this.getCode();
  },
  methods: {
    getCode() {
      getCodeImg().then(res => {
        this.captchaEnabled = res.captchaEnabled === undefined ? true : res.captchaEnabled;
        if (this.captchaEnabled) {
          this.codeUrl = 'data:image/gif;base64,' + res.img;
          this.registerForm.uuid = res.uuid;
        }
      });
    },
    handleLogin() {
      this.$refs.registerForm.validate(async valid => {
        if (valid) {
          this.loading = true;
          const res = await register(this.registerForm);
          if (res) {
            this.$message.success('注册成功');
            this.loading = false;
            this.$router.push('/login');
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 54px);
  background-color: #1f457d;
  background-size: cover;
  &::v-deep {
    .el-input__inner {
      border-radius: 6px;
    }
    .el-checkbox__label {
      color: #fff;
    }
  }
}
.title {
  margin: 0px auto 30px auto;
  text-align: center;
  color: #fff;
  font-size: 32px;
}

.login-form {
  border-radius: 6px;
  background: #294f86;
  width: 500px;
  padding: 25px 25px 5px 25px;
  color: #fff;
  .el-input {
    height: 38px;
    input {
      height: 38px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}
.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.login-code {
  width: 33%;
  height: 38px;
  float: right;
  img {
    cursor: pointer;
    vertical-align: middle;
  }
}
.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}
.login-code-img {
  height: 38px;
}
</style>
