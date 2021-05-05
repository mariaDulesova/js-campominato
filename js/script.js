// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

//---------------------------------------
//              FUNCTIONS
//---------------------------------------

function isRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function isInArray (element, array) {
    var check = false;

    for(var i = 0; i<array.length; i++)
    if (element == array[i]){
        return check = true;
    }

    return check = false;
}


//BONUS
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

var userLevel = prompt ("Please choose the game level:\n Level - 0 - Easy\n Level - 1 Intermediate\n Level - 2 Advanced");

console.log(userLevel);

switch(userLevel) {
    case "0":
        var maxAttempts = 100 - 16;
        console.log(maxAttempts);
        break;
    case "1":
        var maxAttempts = 80 - 16;
        console.log(maxAttempts);
        break;
    case "2":
        var maxAttempts = 50 - 16;
        console.log(maxAttempts);
        break;
}

//COMPUTER
var computerBombs = [];

while (computerBombs.length<16) {
    var randomNumber = isRandomNumber(1,100);

    if(!isInArray(randomNumber,computerBombs)){
        computerBombs.push(randomNumber);
    }
    
}
console.log(computerBombs);

//USER
var userNumberArray = [];
var gameOver = false;

while (userNumberArray.length < maxAttempts && gameOver == false) { // faccio girare il while finche' non scelgo il numero uguale a quello scelto dal computer e finche' non arrivo al massimo di scelte possibili.
    do {
        var userNumber = parseInt(prompt(" Choose a number from 1 to 100?"));
    } while (isNaN(userNumber) || userNumber < 1 || userNumber > 100); // per continuare a far girare while, almeno una delle tre condizioni deve essere TRUE
    
    
    if (isInArray(userNumber, computerBombs)) { //verifico che il numero scelto non e' presente in array del computer
        gameOver = true;
        alert("GAMEOVER \n Your score is: " + userNumberArray.length)
    } else if (!isInArray (userNumber, userNumberArray)) { //se il primo if e' FALSE, verifico che il numero scelto non sia un doppione
        userNumberArray.push(userNumber);
    }
}

if(userNumberArray.length == maxAttempts){
    alert("CONGRATULATIONS\n Your score is: " + userNumberArray.length);
}
