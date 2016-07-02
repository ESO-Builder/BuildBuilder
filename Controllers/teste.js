var express = require('express');
var router = express.Router();
var Pessoa = require('../models/Pessoa');


router.get('/', function (req, res) {

	var pessoaTeste = new Pessoa({
		nome: "enzo",
		idade: 21
	});

	pessoaTeste.save(function(error){
		if(!error)
			res.send('salvo com sucesso');
		else
			res.send('ocorroeu um erro ' + error);
	});
});

module.exports = router;