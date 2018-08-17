import wechatConfig from "../../config/wechat.js";

class Wechat {
  constructor(opts) {
    this.appID = opts.appID;
    this.appSecret = opts.appSecret;
    this.getAccessToken = opts.getAccessToken;
    this.saveAccessToken = opts.saveAccessToken;
  }
  //获取accsessToken
  fetchAccessToken() {}
  //判断accessToken是否有效
  isvalidAccessToken(data) {}
}

export default new Wechat(wechatConfig);
