<template>
  <div class="footer-wrapper">
    <div class="content-wrapper foot-content">
      <div class="left-item">
        <img class="mb-18px" width="100" src="https://www.hpool.in/static/media/mining.d6161178.png" alt="" />
        <div class="contact-item flex-start mb-8px">
          <span>合作/商務：</span>
          <a class="hover:text-primary" href="mailto:service@hpool.link">service@hpool.link</a>
        </div>
        <div class="contact-item flex flex-row justify-start mb-8px">
          <span>合作/商務：</span>
          <div class="email flex flex-col justify-start">
            <a class="hover:text-primary" href="mailto:service@hpool.link">service@hpool.link</a>
            <a class="hover:text-primary" href="mailto:service@hpool.link">service@hpool.link</a>
            <a class="hover:text-primary" href="mailto:service@hpool.link">service@hpool.link</a>
          </div>
        </div>
        <div class="contact-item flex flex-row justify-start">
          <span>谷歌&微信解綁申請郵箱：</span>
          <a class="hover:text-primary" href="mailto:service@hpool.link">service@hpool.link</a>
        </div>
      </div>
      <div class="right-item flex flex-row justify-between">
        <div class="link-item">
          <h4>服務</h4>
          <div class="link">
            <router-link class="hover:text-primary" to="/">下载中心</router-link>
            <router-link class="hover:text-primary" to="/">帮助中心</router-link>
          </div>
        </div>
        <div class="link-item">
          <h4>關於</h4>
          <div class="link">
            <router-link class="hover:text-primary" to="/">關於我們</router-link>
            <router-link class="hover:text-primary" to="/">用戶協議</router-link>
            <router-link class="hover:text-primary" to="/">隱私政策</router-link>
          </div>
        </div>
        <div class="link-item">
          <h4>社群</h4>
          <div class="link">
            <div class="contact-item flex-start">
              <img src="https://www.hpool.in/static/media/twitter.a6a0742b.png" alt="" />
              <a class="hover:text-primary" href="/">Twitter</a>
            </div>
            <div class="contact-item flex-start">
              <img src="https://www.hpool.in/static/media/twitter.a6a0742b.png" alt="" />
              <a class="hover:text-primary" href="/">Discord</a>
            </div>
            <div class="contact-item flex-start">
              <img src="https://www.hpool.in/static/media/twitter.a6a0742b.png" alt="" />
              <a class="hover:text-primary" href="/">Telegram</a>
            </div>
            <div class="contact-item flex-start">
              <img src="https://www.hpool.in/static/media/twitter.a6a0742b.png" alt="" />
              <a class="hover:text-primary" href="/">Telegram 中文区</a>
            </div>
            <div class="contact-item flex-start">
              <img src="https://www.hpool.in/static/media/twitter.a6a0742b.png" alt="" />
              <a class="hover:text-primary" href="/">Telegram 俄文区</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-wrapper {
  width: 100%;
  padding: 40px 0px;
  color: #a3a7b5;
  background-color: #ecf0f6;
  .foot-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left-item {
      width: 30%;
    }
    .right-item {
      width: 50%;
      .link-item {
        h4 {
          font-size: 18px;
          margin-bottom: 16px;
          color: rgba(0, 0, 0, 0.85);
          font-weight: 500;
        }
        .link {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          .contact-item{
            margin-bottom: 12px;
            img{
              width: 24px;
              height: 24px;
              margin-right: 5px;
            }
            a{
              font-size: 12px;
            }
          }
          a {
            color: #a3a7b5;
            &:hover{
              color: #426fb3;
            }
          }
        }
      }
    }
  }
}
</style>