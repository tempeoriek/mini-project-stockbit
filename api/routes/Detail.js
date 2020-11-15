const router = express.Router(),
Detail = require('../controllers/DetailController');

router.get('/', Detail.detail);

module.exports = router;
