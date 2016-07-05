var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var atributoSchema = new Schema({
    Tipo: String,
    Valor: Number
});

var Atributo = mongoose.model('Atributo', atributoSchema);

module.exports = Atributo;