var readlineSync = require('readline-sync');

var secretNumber =(Math.floor(Math.random()*10)+1);
for (var win = false;!win;){
  var guess =readlineSync.question("Guess a number \n");
  if(guess == secretNumber) {
    console.log("youwin!");
    win = true;
  }else{
    console.log((secretNumber>guess?'higher':'lower'));
  }
}
