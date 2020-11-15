const { key } = require("../../config/key");

DetailController = {
  detail: async function (req, res) {
    //Get the keyword or id for movie's detail
    let { keyword, id } = req.query;
    let method, baseURL;

    //url for shoot api to omdbapi.com with params, can use keyword or id
    baseURL = (keyword && id) ? `http://www.omdbapi.com?apikey=${key.key}&t=${keyword}&i=${id}` : 
      (keyword) ? `http://www.omdbapi.com?apikey=${key.key}&t=${keyword}` : 
      (id) ? `http://www.omdbapi.com?apikey=${key.key}&i=${id}` : null;
    method = `GET`;

    //url for shoot api to omdbapi.com
    let shoot = await EndpointController.shootApi(baseURL, method);
    if (shoot.err) {
      response.error(400, `Error when shoot api`, res, shoot.err);
    }

    //get result from shoot to omdapi
    if (shoot.data.Response == `True`) {
      let data = shoot.data
      //send back the data
      response.ok(data, res, `Success Search Movie`);
    } else {
      //send back the data if data is empty or cannot be found
      response.success({}, res, shoot.data.Error);

    }
  }
}

module.exports = DetailController;

