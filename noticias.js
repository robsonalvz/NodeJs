//console.log('Criando um site de noticias com NodeJs');
var http = require('http');

var server = http.createServer(function (req,res){
    var categoria = req.url;
    
    if (categoria=='/noticias'){
        res.end("<html><body>Portal de noticias</body></html>");
    }else if (categoria=='/esporte'){
        res.end("<html><body>Noticias de beleza</body></html>");
    }else{
        res.end("<html><body>Junior is gay</body></html>");
    }
}).listen(3000);
