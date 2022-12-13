<template>
  <div class="forget">
    <el-form ref="forgetForm" :model="forgetForm" :rules="forgetRules" class="forget-form">
      <h3 class="title">NBPOOL</h3>
      <h4 class="sub-title">重置密码</h4>
      <el-form-item prop="username">
        <el-input v-model="forgetForm.username" type="text" auto-complete="off" placeholder="请输入账号">
          <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />
        </el-input>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button size="medium" type="primary" style="width: 100%" @click.native.prevent="handleForget">
          <span>重置密码</span>
        </el-button>
        <div style="float: left">
          <router-link class="link-type" to="/login">返回登录</router-link>
        </div>
        <div style="float: right">
          <router-link class="link-type" to="/register">立即注册</router-link>
        </div>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-forget-footer">
      <span>Copyright © 2018-2022 NBPOOL All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
import { getCodeImg } from '@/api/login';
import Cookies from 'js-cookie';
import { encrypt, decrypt } from '@/utils/jsencrypt';

export default {
  name: 'forget',
  data() {
    return {
      codeUrl: '',
      forgetForm: {
        username: '',
      },
      forgetRules: {
        username: [{ required: true, trigger: 'blur', message: '请输入账号' }],
      },
      loading: false,
      // 验证码开关
      captchaEnabled: true,
      // 注册开关
      register: true,
      redirect: undefined,
    };
  },
  methods: {
    handleForget() {
      this.$refs.forgetForm.validate(valid => {
        if (valid) {
          this.loading = true;
          if (this.forgetForm.rememberMe) {
            Cookies.set('username', this.forgetForm.username, { expires: 30 });
            Cookies.set('password', encrypt(this.forgetForm.password), { expires: 30 });
            Cookies.set('rememberMe', this.forgetForm.rememberMe, { expires: 30 });
          } else {
            Cookies.remove('username');
            Cookies.remove('password');
            Cookies.remove('rememberMe');
          }
          this.$store
            .dispatch('forget', this.forgetForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/' }).catch(() => {});
            })
            .catch(() => {
              this.loading = false;
              if (this.captchaEnabled) {
                this.getCode();
              }
            });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.forget {
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
  }
}
.title {
  margin-bottom: 20px;
  text-align: center;
  color: #fff;
  font-size: 32px;
}
.sub-title {
  margin-bottom: 20px;
  text-align: center;
  color: #fff;
  font-size: 24px;
}

.forget-form {
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
.forget-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}
.el-forget-footer {
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
.forget-code-img {
  height: 38px;
}
</style>
