const sqlService = require('./sqlService');
const APIResponse = require('./apiResponse');

module.exports = {
    getGameState: async function (request, response) {
        const data = await sqlService.getGameState();
        const apiResponse = new APIResponse(200, data);
        response.status(apiResponse.getStatusCode()).json(apiResponse.getBody());
    }
};
