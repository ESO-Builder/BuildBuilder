var Atributo = require('../models/Atributo');

module.exports = function () 
{
    Atributo.find({'Tipo': 'Stamina'}, function (error, atributo) {
        if(!error){
            if(!atributo)
            {
                var stamina = new Atributo({
                    Tipo: 'Stamina',
                    Valor: 111
                });

                stamina.save();
            }
        }
    });

    Atributo.find({'Tipo': 'Magicka'}, function (error, atributo) {
        if(!error)
        {
            if(!atributo)
            {
                var magicka = new Atributo({
                    Tipo: 'Magicka',
                    Valor: 111
                });

                magicka.save();
            }
        }
    });

    Atributo.find({'Tipo': 'Health'}, function (error, atributo) {
        if(!error)
        {
            if(!atributo)
            {
                var health = new Atributo({
                    Tipo: 'Health',
                    Valor: 122
                });

                health.save();
            }
        }
    });
}

