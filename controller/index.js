import fs from "fs";
import path from "path";

const controllers = {};
fs.readdirSync(__dirname).forEach(item => {
  item.indexOf(".") === -1
    ? (controllers[item] = require(path.resolve(
        __dirname,
        `${item}/index.js`
      )).default)
    : "";
});

export default controllers;
