var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pessoaSchema = new Schema({
	nome: String,
	idade: Number
});

var Pessoa = mongoose.model('Pessoa', pessoaSchema);

module.exports = Pessoa;