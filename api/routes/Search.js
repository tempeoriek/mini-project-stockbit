const router = express.Router(),
Search = require('../controllers/SearchController');

router.get('/', Search.search);

module.exports = router;
