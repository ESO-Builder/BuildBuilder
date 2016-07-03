// dependencias
var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var cookie_parser = require('cookie-parser');
var app = express();

// load de configuracoes
var url = require('./config/server');
var db = require('./config/db');

// load de rotas
var home = require('./Controllers/home');
var teste = require('./Controllers/teste');

// usa configuracoes
app.use(body_parser.json());
app.use(body_parser.urlencoded( {extended: false} ));
app.use(cookie_parser());
app.use(express.static('public'));
app.use('/node_modules', express.static(__dirname + '/node_modules/'));

// usa rotas
app.use('/', home);
app.use('/teste', teste);

// usa configuracoes
mongoose.connect(db.url);

// starta servdidor
app.listen(url.port, url.ip, function(){
    console.log('Ouvindo em: %s porta %s', url.ip, url.port);
});

