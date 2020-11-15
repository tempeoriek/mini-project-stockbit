EndpointController = {
  shootApi: function (baseURL, method) {
    let returns = new Promise((resolve) => {
      let results = {
        data: null,
        err: null
      };
   
      if (baseURL && method) {
        //shoot url and method to api
        axios({
          method,
          baseURL
        })
        .then(function (response) {
          console.log(`success`);
          if (Object.entries(response.data).length > 0) {
            //if data found then send data
            results.data = response.data;
          } else {
            //if data not found then send err message
            results.err = response.data.error_description;
          }
          resolve(results);
        })
        .catch(function (error) {
          //error when shoot api
          console.log(`\nERROR:Error when axios shoot api in endpoint controller\nstatus: ${error.response.status}\nstatusText: ${error.response.statusText}`);
          results.err = (error.response.data.header) ? error.response.data.header : error.response.statusText;
          resolve(results);
        })
      } else {
        //if input is wrong or not complete
        results.err = `Wrong Input`;
        resolve(results);
      }
    });
    //send data back
    return returns;
  },
}

module.exports = EndpointController;

