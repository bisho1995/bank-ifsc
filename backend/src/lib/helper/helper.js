const crypto = require('crypto');
const config = require('config');

class Helper {
  createHash(str) {
    const hash = crypto.createHmac('sha256', config.get('secret'))
      .update(str)
      .digest('hex');

    return hash;
  }

  getRandomNumbers({ count, totalCount }) {
    const seen = {};
    console.log({ count, totalCount });
    while (Object.keys(seen).length < count) {
      const rand = Math.floor(Math.random() * totalCount) + 1;
      console.log({ rand });
      if (!(rand in seen))seen[rand] = true;
    }
    console.log(seen);
    return Object.keys(seen);
  }

  removeDuplicateObjects(ar, key) {
    const save = {};
    return ar.reduce((ans, obj) => {
      if (!(obj[key] in save)) {
        save[key] = true;
        ans.push(obj);
      }
      return ans;
    }, []);
  }
}

const helper = new Helper();

module.exports = helper;
