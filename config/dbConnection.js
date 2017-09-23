var mysql = require('mysql');
var connMySQL = function(){

        console.log("Conecao com bd foi estabelecida");
       return mysql.createConnection({
            host : '',
            user : 'root',
            password : 'sisalfa',
            database : 'portal_noticias'
        });
}
module.exports = function(){
    console.log("o autoload carregou o modulo de conexao com banco de dados");
    return connMySQL;
}