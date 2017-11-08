const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const util = require('./middleware/utilities');

const dbURL = "mongodb://localhost/angular-video";

mongoose.Promise = global.Promise;
mongoose.connect(dbURL).then(() => console.log('connected to DB'))
.catch(err => console.log(err));

const db = mongoose.connection;
const routes = require('./routes');
const app = express();
const errorHandlers = require('./middleware/errorhandlers');

app.use(express.static(path.join(__dirname, '..','App')));
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({ extended: true }));

//Express Routes 
app.get('/',routes.index);
app.get('/vimeoUrl',routes.vimeoUrl);
app.get('/youtubeUrl',routes.youtubeUrl);
app.get('/dailymotionUrl',routes.dailymotionUrl);


// catch 404 and forward to error handler
app.use(errorHandlers.notFound);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.status = err.status;
  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

app.listen('3000',function(){
  console.log('server connected to port 3000');
})
