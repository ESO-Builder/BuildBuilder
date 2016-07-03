// dependencias
var express = require('express');
var mongoose = require('mongoose');
var app = express();

// load de configuracoes
var url = require('./config/server');
var db = require('./config/db');

// load de rotas
var home = require('./Controllers/home');
var teste = require('./Controllers/teste');

// usa rotas
app.use('/', home);
app.use('/teste', teste);

// usa configuracoes
mongoose.connect(db.url);

// starta servdidor
app.listen(url.port, url.ip, function(){
    console.log('Ouvindo em: %s porta %s', url.ip, url.port);
});

