var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoDbUrl = "mongodb+srv://bryan:7dsTlieshRuCM1sN@cluster0-p4x5k.mongodb.net/llantas?retryWrites=true&w=majority";

mongoose.connect(mongoDbUrl, { useNewUrlParser: true , useUnifiedTopology: true});
{ mongoose.set('debug', true); }