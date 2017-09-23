var mysql = require('mysql');
module.exports = function(){
       return mysql.createConnection({
            host : '',
            user : 'root',
            password : 'sisalfa',
            database : 'portal_noticias'
        });
}