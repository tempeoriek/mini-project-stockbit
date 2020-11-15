const { key } = require("../../config/key");

SearchController = {
  search: async function (req, res) {
    //Get the keyword for searching movie
    let { keyword } = req.query;
    let method, baseURL;

    //url for shoot api to omdbapi.com with params (keyword)
    baseURL = `http://www.omdbapi.com?apikey=${key.key}&s=${keyword}`
    method = `GET`;
    
    //url for shoot api to omdbapi.com
    let shoot = await EndpointController.shootApi(baseURL, method);
    if (shoot.err) {
      response.error(400, `Error when shoot api`, res, shoot.err);
    }
    
    //get result from shoot to omdapi
    if (shoot.data.Response == `True`) {
      let data = shoot.data.Search
      //send back the data
      response.ok(data, res, `Success Search Movie`);
    } else {
      //send back the data if data is empty or cannot be found
      response.success({}, res, shoot.data.Error);

    }
  }
}

module.exports = SearchController;

