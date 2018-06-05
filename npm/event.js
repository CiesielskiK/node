var EventEmitter = require('events').EventEmitter;
var OSinfo = require('./modules/OSinfo');

var emitter = new EventEmitter();

emitter.on('beforeCommand', function(instruction) {
	console.log('You wrote: ' + instruction + ' trying to run 
command.')
});
emitter.or('afterCommand', function() {
console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
		var input = process.stdin.read();
		if(input !== null){
		var instruction = input.trim();
		emitter.emit('beforeCommand', instruction);
			switch(instruction){
				case 
