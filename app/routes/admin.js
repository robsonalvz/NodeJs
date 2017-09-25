module.exports = function(application){
    application.get('/formulario_inclusao_noticia',function(request,response){
        application.app.controllers.admin.formularo_inclusao_noticia(application,request,response);
    });
    application.post('/noticia/salvar',function(request,response){
        application.app.controllers.admin.noticias_salvar(application,request,response);
    });
}