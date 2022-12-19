<template>
  <div class="center-index">
    <h3 class="user-head">Admin</h3>
    <div class="account-info flex flex-row justify-between mb-25px">
      <div class="account-item flex flex-col justify-start">
        <div class="flex-start">
          <span class="title mr-5px">手机号：</span>
          <span class="value">---</span>
          <el-divider direction="vertical"></el-divider>
          <router-link to="/" class="text-primary hover:text-primary">去绑定</router-link>
        </div>
        <div class="flex-start">
          <span class="title mr-5px">邮箱：</span>
          <span class="value">takeorangeforyou@gmail.com</span>
        </div>
      </div>

      <div class="account-item flex flex-col justify-start">
        <div class="flex-start">
          <span class="title mr-5px">谷歌验证：</span>
          <router-link to="/" class="text-primary hover:text-primary">去开启</router-link>
        </div>
        <div class="flex-start">
          <span class="title mr-5px">上次登录：</span>
          <span class="value">takeorangeforyou@gmail.com</span>
          <el-divider direction="vertical"></el-divider>
          <span class="mr-5px">时间</span>
          <span>2022/12/15 22:30:56</span>
        </div>
      </div>

      <div class="account-item">
        <router-link to="/" class="text-primary hover:text-primary">登录密码修改</router-link>
      </div>
    </div>

    <div class="asset-wrapper">
      <div class="asset-head flex flex-row justify-between mb-12px">
        <div class="left-item">
          <h3 class="user-content-title mb-5px">資產總覽</h3>
          <p class="text-size-13px mt-5px">總資產 ≈ $0.0000</p>
        </div>
        <div class="right-item">
          <router-link to="/" class="text-size-13px text-primary hover:text-primary">更多</router-link>
        </div>
      </div>

      <div class="asset-content mt-20px">
        <div class="asset-item space-between">
          <div class="left-item flex-start">
            <img src="https://hpool-upload.oss-ap-northeast-1.aliyuncs.com/static-upload/app/aleo.png" />
            <span class="ml-12px">ALEO</span>
          </div>

          <div class="center-item space-between">
            <div class="item">
              <p class="num">0.00000000</p>
              <p class="title">總資產</p>
            </div>
            <div class="item">
              <p class="num">0.00000000</p>
              <p class="title">可用餘額</p>
            </div>
            <div class="item">
              <p class="num">0.00000000</p>
              <p class="title">合作金額</p>
            </div>
          </div>

          <div class="right-item">
            <router-link to="/" class="text-primary hover:text-primary">提现</router-link>
          </div>
        </div>
        <div class="asset-item space-between">
          <div class="left-item flex-start">
            <img src="https://hpool-upload.oss-ap-northeast-1.aliyuncs.com/static-upload/app/aleo.png" />
            <span class="ml-12px">ALEO</span>
          </div>

          <div class="center-item space-between">
            <div class="item">
              <p class="num">0.00000000</p>
              <p class="title">總資產</p>
            </div>
            <div class="item">
              <p class="num">0.00000000</p>
              <p class="title">可用餘額</p>
            </div>
            <div class="item">
              <p class="num">0.00000000</p>
              <p class="title">合作金額</p>
            </div>
          </div>

          <div class="right-item">
            <router-link to="/" class="text-primary hover:text-primary">提现</router-link>
          </div>
        </div>
        <div class="asset-item space-between">
          <div class="left-item flex-start">
            <img src="https://hpool-upload.oss-ap-northeast-1.aliyuncs.com/static-upload/app/aleo.png" />
            <span class="ml-12px">ALEO</span>
          </div>

          <div class="center-item space-between">
            <div class="item">
              <p class="num">0.00000000</p>
              <p class="title">總資產</p>
            </div>
            <div class="item">
              <p class="num">0.00000000</p>
              <p class="title">可用餘額</p>
            </div>
            <div class="item">
              <p class="num">0.00000000</p>
              <p class="title">合作金額</p>
            </div>
          </div>

          <div class="right-item">
            <router-link to="/" class="text-primary hover:text-primary">提现</router-link>
          </div>
        </div>
        <div class="asset-item space-between">
          <div class="left-item flex-start">
            <img src="https://hpool-upload.oss-ap-northeast-1.aliyuncs.com/static-upload/app/aleo.png" />
            <span class="ml-12px">ALEO</span>
          </div>

          <div class="center-item space-between">
            <div class="item">
              <p class="num">0.00000000</p>
              <p class="title">總資產</p>
            </div>
            <div class="item">
              <p class="num">0.00000000</p>
              <p class="title">可用餘額</p>
            </div>
            <div class="item">
              <p class="num">0.00000000</p>
              <p class="title">合作金額</p>
            </div>
          </div>

          <div class="right-item">
            <router-link to="/" class="text-primary hover:text-primary">提现</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="hangUp-wrapper">
      <div class="hangUp-title space-between">
        <h3 class="user-head">挂機收益</h3>
        <router-link to="/" class="text-primary hover:text-primary">更多</router-link>
      </div>
      <div class="hangUp-content flex justify-center">
        <div class="flex justify-start items-center">
          <span>暫無收益，</span>
          <router-link to="/" class="text-primary hover:text-primary">去绑定</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.center-index {
  padding: 0 20px;
  .account-info {
    color: rgba(0, 0, 0, 0.45);
  }
  .asset-content {
    box-sizing: border-box;
    width: 100%;
    .asset-item {
      width: 100%;
      height: 64px;
      padding: 5px 20px;
      margin-bottom: 30px;
      box-shadow: 0px 0px 1px 0px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 2px 6px 0 rgb(0 0 0 / 0%);
      .left-item {
        img {
          max-width: 35px;
        }
        span {
          font-weight: bolder;
          color: rgba(0, 0, 0, 0.45);
          font-size: 15px;
        }
      }

      .center-item {
        .item {
          max-width: 200px;
          margin-right: 75px;
          color: rgba(0, 0, 0, 0.45);
          .num {
            font-size: 15px;
          }
          .title {
            font-size: 12px;
          }
        }
      }
      .right-item {
        font-size: 14px;
      }
    }
  }
  
  .hangUp-wrapper{
    padding-bottom: 50px;
  }
}
</style>