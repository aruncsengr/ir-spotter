const ExternalApiService = require('./external-api-service')
const Train = require('../models/train')

const searchService = function(req, res, targetServiceObject) {
  const externalApiService = new ExternalApiService(targetServiceObject, req);
  
  externalApiService.perform()
    .then(function(response) {
      const trains = sanitizeTrainList(response.data)
      console.log(trains)
      res.status(200).json(trains);
    })
    .catch(function(error) {
      res.status(400).json(`Error >> ${error}`);
    });
}

const sanitizeTrainList = function(trainList) {
  console.log(trainList)
  const trainsCollection = trainList.match(/label:"(\w+): (\w)+ (\w)+/g)

  const trains = trainsCollection.map((train => {
    const label = train.toString().replace(/(label:|")/gi, '')
    return Train({label: label})
  }))

  return trains
}

module.exports = searchService;
