var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require("body-parser");

var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var devRouter = require('./routes/dev');
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var settingsRouter = require('./routes/settings');
var technologiesRouter = require('./routes/technologies');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/dev', devRouter);
app.use('/', indexRouter);
app.use('/settings', settingsRouter);
app.use('/technologies', technologiesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  
  res.render('error');
});


// Utilizado para confirmar servidor online quando utilizando nodemon
// app.listen(3000, function() {
//   console.log("Servidor online");
//   console.log(process.env.LOGGEDIN)
// });


module.exports = app;
