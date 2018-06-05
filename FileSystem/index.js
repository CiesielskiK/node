var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

fs.stat('./cat.jpg', function(err, stats) {
	var statMode = new StatMode(stats);
	console.log(stats);
});

fs.readFile('./a.txt', 'utf-8', function(err, data) {
	console.log('Dane przed zapisem!'.blue);
	console.log(data);
	fs.appendFile('./a.txt', 'A tak wygląda po zapisie', 
function(err){
	if(err) throw err; //jeżeli pojawi się błąd wyrzuć wyjątek
	console.log('Zapisano!'.blue);
	fs.readFile('./a.txt', 'utf-8', function(err, data){
	console.log('Dane po zapisie'.blue);
	console.log(data);
	});
});
});

