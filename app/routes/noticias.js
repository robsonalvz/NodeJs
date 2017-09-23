//var dbConnection = require('../../config/dbConnection');

module.exports = function(application){
    application.get('/noticias',function(request,response){
        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;
        connection.query('select * from noticias',function(error,result){
            response.render("noticias/noticias",{noticias : result});
        });
    });
};

