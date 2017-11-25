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
    //pega o que esta sendo passado pelo get -> request.query
    var id_noticia = request.query;
    
    noticiasModel.getNoticia(id_noticia,function(error,result){
        response.render("noticias/noticia",{noticia : result});
    });
}