const express = require ('express')
const app = express()
const hbs = require('handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const flash = require('connect-flash')
const cookieParser = require("cookie-parser")
const morgan = require('morgan')
// const cookieParser = require('cookie-parser')
const pictures = require('./controllers/pictures')
const routes = require('./config/routes')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(session({ secret: 'Julian-Photo-Blog' }))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.static(__dirname + '/public'))

// require('./config/passport')(passport)

app.use('/pictures', pictures)

app.use(routes)

app.set('port', process.env.PORT || 3100);
app.set('view engine', 'hbs')
app.set('views', './views')

app.use(function(req, res, next) {
    global.currentUser = req.user;
    res.locals.currentUser = req.user;
    next();
  })

app.get('/', (req, res) => {
    res.render('app-welcome')
})

app.listen(app.get('port'), () => {
    console.log('it is working')
  })
