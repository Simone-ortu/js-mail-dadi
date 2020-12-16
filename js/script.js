// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.




var dado1 = Math.floor(Math.random() * 6)+1;
console.log(dado1);
var dado2 = Math.floor(Math.random() * 6)+1;
console.log(dado2);

if (dado1>dado2){
    alert('dado1 wins');
}
else if (dado2>dado1){
    alert('dado2 wins');
}
else{
    alert('draw');
}