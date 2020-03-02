const requests = require('./requests');

const resolvers = {
  Query: {
    getPrices: async () => {
      const { data } = await requests.getPrices();
      return {
        price: data,
      };
    },
    getPrice: async (_parent, { currency }) => {
      const { data } = await requests.getPrices();
      return {
        price: data[currency],
      };
    },
  },
};

module.exports = resolvers;
