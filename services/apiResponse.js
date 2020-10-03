module.exports = class APIResponse {
	constructor(statusCode, body) {
		this.statusCode = statusCode;
		this.body = body;
	};

	getStatusCode() {
		return this.statusCode;
	}

	getBody() {
		return this.body;
	}
}
