module.exports.noticias = function(application,request,response){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    noticiasModel.getNoticias(function(error,result){
        response.render("noticias/noticias",{noticias : result});
    });
}
module.exports.noticia = function(application,request,response){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    noticiasModel.getNoticia(function(error,result){
        response.render("noticias/noticia",{noticia : result});
    });
}