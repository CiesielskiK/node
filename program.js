process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(){
        var input = process.stdin.read();
        if (input!==null){
        var instruction = input.toString().trim();
        switch(instruction){
                case 'exit':
                        process.stdout.write('Quitting app!)\n');
                        console.log('Wersja node.js: ' + process.version);
                        process.exit();
                        break;
                default:
                        process.stderr.write('bledna instrukcja!\n');
                        };
                };
});


