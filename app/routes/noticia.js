module.exports = function(application){
        application.get('/noticia',function(request,response){
        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;
        noticiasModel.getNoticia(connection,function(error,result){
            response.render("noticias/noticia",{noticia : result});
        });
    });
}

