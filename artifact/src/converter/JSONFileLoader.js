/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

const fs = require("fs");
const rp = require("request-promise");

const JSONFileLoader = {};

JSONFileLoader.loadFile = function loadFile(url) {
  const options = {
    uri: url,
    transform(body) {
      return JSON.parse(body);
    }
  };

  return rp(options).catch(err => {
    console.log(err);
  });
};

JSONFileLoader.loadLocalFile = fileName =>
  new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });

module.exports = JSONFileLoader;
