import Router from "koa-router";
import controllers from "../controller/index";

const router = new Router();
module.exports = app => {
  router.get("/login", controllers.wechat);

  app.use(router.routes()).use(router.allowedMethods());
};
