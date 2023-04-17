const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let map = new Map();
  for (let i = 0; i < domains.length; i++) {
    let dns = domains[i].split(".");
    let domain = "";
    for (let j = dns.length - 1; j >= 0; j--) {
      domain += "." + dns[j];
      let count = map.get(domain);
      if (count == null) {
        count = 1;
      } else {
        count++;
      }
      map.set(domain, count);
    }
  }
  let obj = {};
  for (let key of map.keys()) {
    obj[`${key}`] = map.get(key);
  }
  return obj;
}

module.exports = {
  getDNSStats,
};