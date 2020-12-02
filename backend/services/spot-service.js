const ExternalApiService = require('./external-api-service')
const Train = require('../models/train')
const Jsonify = require('../utils/jsonify')

const spotService = function(req, res, targetServiceObject) {
  const externalApiService = new ExternalApiService(targetServiceObject, req);
  
  externalApiService.perform()
    .then(function(response) {
      const responseData = sanitizeTrainList(response.data)
      // console.log(responseData)
      res.send(responseData);
    })
    .catch(function(error) {
      res.send(`Error >> ${error}`);
    });
}

const sanitizeTrainList = function(trainData) {
  let rawData = trainData
  rawData = rawData.replace(/_variable_\d+=/g, "{ \"train\": ")
  // rawData = rawData.replace(/function(\W+|\w+)+}/g, "123")
  rawData = rawData.replace(/getDaysOfRunString\(\"1111111\"\)/g, "123")
  rawData = rawData + '}'
  const jsonObj = new Jsonify(rawData).toJson()
  return jsonObj
}

module.exports = spotService;
