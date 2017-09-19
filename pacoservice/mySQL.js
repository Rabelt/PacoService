var mysql  = require('mysql');
var connection = mysql.createConnection({
	host : '10.211.55.5',
	user : 'root',
	password : '2005',
	database : 'pacoyescas'
});

connection.connect();

connection.query('SELECT * FROM prueba', function(error, results, fields){
	if(error) throw error;
	console.log('The solution is:', results);
});

connection.end();