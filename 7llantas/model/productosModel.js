var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var productosSchema = new Schema({
  codigo: { type: String},
  SKU: { type: String },
  descripcion: { type: String },
});

module.exports = mongoose.model('productos', productosSchema);