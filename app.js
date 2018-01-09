var express      = require('express')
var app          = express()
var mongoose     = require('mongoose')
var passport     = require('passport')
var flash        = require('connect-flash')
var hbs          = require('handlebars')
var morgan       = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser   = require('body-parser')
var session      = require('express-session')

app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser())

app.set('view engine', 'hbs')
app.set('views','./views')
app.use(express.static(__dirname + '/public'))

app.use(session({ secret: 'Julian-Photo-Blog' }))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

require('./config/passport')(passport)

// allows us to access the user object globally
app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    next();
  });

const routes = require('./config/routes')
app.use(routes)

app.listen(3100)

