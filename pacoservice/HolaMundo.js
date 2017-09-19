var http = require("http");
var manejador = function(solicitud, respuesta){
console.log("Hola mundo");
respuesta.end("Hola Mundo");
};
http.createServer(manejador);

var servidor = http.createServer(manejador);
servidor.listen(8080);