const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
port = process.env.PORT || 3000;
var morgan = require('morgan');
var cors = require('cors');

global.__root = __dirname + '/';

var db = require('./config/db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET, OPTIONS");
    return res.status(200).json({});
  }
  next();
});

app.get('/', function (req, res) {
	res.status(200).send({apiStatus: 'Ok'});
});



var productosRouter = require(__root + 'router/productosRouter');
app.use('/productos', productosRouter);


var port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log('Express server listening on port ' + port);
});
