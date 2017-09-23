module.exports = function(application){
        application.get('/noticia',function(request,response){
        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);
        noticiasModel.getNoticia(function(error,result){
            response.render("noticias/noticia",{noticia : result});
        });
    });
}

