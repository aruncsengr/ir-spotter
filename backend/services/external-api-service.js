const axios = require("axios");
const { BASE_URL } = require("../constants");

class ExternalApiService {
  constructor(targetServicObject, req) {
    targetServicObject.queryParams.trainNo = req.query.searchTerm;
    this.targetServicObject = targetServicObject;
  }

  perform() {
    const targetURL = `${BASE_URL}${this.targetServicObject.path}`;
    this.log(targetURL)
    this.log(this.targetServicObject)

    return axios.get(targetURL, { params: this.targetServicObject.queryParams });
  }

  log(info) {
    console.log(info);
  }
}

module.exports = ExternalApiService;
