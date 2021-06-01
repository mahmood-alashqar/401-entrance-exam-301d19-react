const superagent = require('superagent');
const Characters = require('../models/filtereddatafromAPI.model');
const getAllData = async (req, res) => {
  superAPI = ` https://psychonauts-api.herokuapp.com/api/characters?limit=`;
  console.log(superAPI);
  superagent.get(superAPI).then(data => {
    console.log(data);
    const returnedData = data.body.map(loopingObj => {
      if (Object.keys(loopingObj).length < 10) { return new Characters(loopingObj); }

      console.log(loopingObj);
    })
    res.send(returnedData);
  }
  ).catch(error => {
    console.log(error);
  })
}
module.exports = getAllData;
