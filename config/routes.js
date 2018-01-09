var express = require('express')
var router = express.Router()
// http://expressjs.com/en/resources/middleware/body-parser.html
var bodyParser = require('body-parser')
// for form submissions
// https://github.com/expressjs/method-override
var methodOverride = require('method-override')
var passport = require("passport")
var usersController = require('../controllers/users')
var staticsController = require('../controllers/statics')

router.route("/").get(staticsController.home);

module.exports = router
