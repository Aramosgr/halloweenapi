const sqlService = require("./sqlService");
const APIResponse = require("./apiResponse");

module.exports = {
  getGameState: async function (request, response) {
    const data = await sqlService.getGameState();
    const apiResponse = new APIResponse(200, data);
    response.header(
      "Access-Control-Allow-Origin",
      "*"
    );
    response.header("Access-Control-Allow-Methods", "*");
    response.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    response.status(apiResponse.getStatusCode()).json(apiResponse.getBody());
  },
  getPhases: async function (request, response) {
    const data = await sqlService.getPhases();
    const apiResponse = new APIResponse(200, data);
    response.header(
      "Access-Control-Allow-Origin",
      "*"
    );
    response.header("Access-Control-Allow-Methods", "*");
    response.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    response.status(apiResponse.getStatusCode()).json(apiResponse.getBody());
  },
  getPhase: async function (request, response) {
    const data = await sqlService.getPhase(request.query.id);
    const apiResponse = new APIResponse(200, data);
    response.header(
      "Access-Control-Allow-Origin",
      "*"
    );
    response.header("Access-Control-Allow-Methods", "*");
    response.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    response.status(apiResponse.getStatusCode()).json(apiResponse.getBody());
  }
};
