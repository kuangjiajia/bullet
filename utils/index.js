import fs from "fs";
import path from "path";

const utils = {};
fs.readdirSync(__dirname).forEach(item => {
  item.indexOf(".") === -1
    ? (utils[item] = require(path.resolve(
        __dirname,
        `${item}/index.js`
      )).default)
    : "";
});

export default utils;
