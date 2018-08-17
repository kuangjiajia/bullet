module.exports = {
  appID: "wx33eb6a0510f98a3f",
  appSecret: "d4624c36b6795d1d99dcf0547af5443d",
  token: "wemovie",
  getAccessToken: function() {
    return util.readFileAsync(wechat_file);
  },
  saveAccessToken: function(data) {
    return util.writeFileAsync(wechat_file, data);
  }
};
