import Koa from "koa";
import middleware from "./middleware";
import router from "./router";
const app = new Koa();

middleware(app);
router(app);

app.listen(8877, () => {
  console.log("hahha");
});
