const axios = require('axios');

module.exports = {
  getPrices: async () => {
    const url = 'https://blockchain.info/ticker';
    try {
      return await axios.get(url);
    } catch (e) {
      console.error(e);
    }
    return null;
  },
};
