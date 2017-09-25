module.exports.formularo_inclusao_noticia = function(application,request,response){
     response.render("admin/form_add_noticia",{validacao:{}, noticia: {}});
}
module.exports.noticias_salvar = function(application,request,response){
    var noticia = request.body;
        
        request.assert('titulo','Titulo é obrigatorio').notEmpty();
        request.assert('resumo','Resumo é obrigatorio').notEmpty();
        request.assert('resumo','Resumo deve conter entre 10 a 100 caracteres').len(10,100);
        request.assert('autor','Autor é obrigatorio').notEmpty();
        //request.assert('data_noticia','Data é obrigatorio').notEmpty().isDate({format:'YYY-MM-DD'});
        request.assert('noticia','Noticia é obrigatorio').notEmpty();
        
        var erros = request.validationErrors();
        console.log(erros);
        if(erros){
            response.render("admin/form_add_noticia",{validacao : erros, noticia : noticia});
            return;
        }
        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);
        
        noticiasModel.salvarNoticia(noticia,function(error,result){
            response.redirect('/noticias');
        });
}