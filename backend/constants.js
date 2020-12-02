const BASE_URL = "https://enquiry.indianrail.gov.in/ntes";

const SEARCH_TRAIN = {
  path: "/SearchTrain",
  queryParams: {
    trainNo: null,
    t: Date.now()
  }
};

const SPOT_TRAIN = {
  path: "/NTES",
  queryParams: {
    action: "getTrainData",
    trainNo: "",
    t: ""
  }
};

// const SPOT_TRAIN = {
//   path: "/NTES",
//   queryParams: {
//     action: "getFullRakeData",
//     trainNo: null,
//     trainStartDate: null,
//     t: Date.now()
//   }
// }

// const SPOT_TRAIN_VIA_STATION = {
//   path: "/NTES",
//   queryParams: {
//     action: "getTrainsViaStn",
//     viaStn: null,
//     withinHrs: 2,
//     toStn: null,
//     trainType: 'ALL',
//     t: Date.now()
//   }
// }

module.exports = {
  BASE_URL,
  SEARCH_TRAIN,
  SPOT_TRAIN
};
