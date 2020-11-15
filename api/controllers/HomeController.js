HomeController = {
  startPage: async function (req, res) {
    res.status(200).json(`Hello, Welcome to Movie Database`);
  }
}

module.exports = HomeController;

