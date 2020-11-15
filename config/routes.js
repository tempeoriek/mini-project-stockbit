module.exports = function (app) {
  let Home = require('../api/routes/Home');
  app.use('/', Home);

  let Search = require('../api/routes/Search');
  app.use('/search', Search);

  let Detail = require('../api/routes/Detail');
  app.use('/detail', Detail);
}
