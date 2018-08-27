/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

const rp = require('request-promise');

const JSONFileLoader = {};

JSONFileLoader.loadFile = function loadFile(url) {
  const options = {
    uri: url,
    transform(body) {
      return JSON.parse(body);
    },
  };

  return rp(options).catch((err) => {
    console.log(err);
  });
};

module.exports = JSONFileLoader;
