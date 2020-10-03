const sqlService = require('./sqlService');

module.exports = {
    getGameState: async function () {
        const data = await sqlService.getGameState();
        return data.data;
    }
};
