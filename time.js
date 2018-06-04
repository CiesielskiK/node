function czas(){
var input;

console.log("To " + Math.floor(input/3600) + " godzin, "+ Math.floor((input%3600)/60) + "minut i " + (input%60) + " sekund");
};

exports.time = czas;

