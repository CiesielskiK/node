var EventEmitter = require("events").EventEmitter;
var OSinfo = require('../modules/OSinfo');

var emitter = new EventEmitter();
emitter.on("beforeCommand", function () {
	console.log('Napisałes: ' + instruction + ' , probuje wykonac polecenie');
});
emitter.on("afterCommand", function() {
	console.log('Koniec polecenia');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(){
	var input = process.stdin.read();
	if (input!==null){
	var instruction = input.trim();
	emitter.emit('beforeCommand', instruction);
	switch(instruction){
		case 'exit':
			process.stdout.write('Quitting app!)\n');
			console.log('Wersja node.js: ' + process.version);
			process.exit();
			break;
		case '/sayhello':
			process.stdout.write('hello!\n');
			break;
		case '/getOSinfo':
			OSinfo.print();
			break;
	default:
			process.stderr.write('bledna instrukcja!\n');
			};
		emitter.emit('afterCommand');
		};
});




