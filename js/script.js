// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.




var btnGenera = document.getElementById("gioca");

btnGenera.addEventListener('click',
    function () {
        var player = document.getElementsByClassName('player').value;
        var dado1 = Math.floor(Math.random() * 6) + 1;
        console.log(dado1);
        var dado2 = Math.floor(Math.random() * 6) + 1;
        console.log(dado2);
        var player = document.getElementById('human').value;
        console.log(human);

        document.getElementById('player').innerHTML = player;
        document.getElementById('dado1').innerHTML = dado1;
        document.getElementById('dado2').innerHTML = dado2;
        if (dado1>dado2){
            document.getElementById('vincitore').innerHTML = player +' '+ 'wins';
        }
        else if (dado2>dado1){
            document.getElementById('vincitore').innerHTML = 'Unlucky ho vinto io :P';
        }
        else{
            document.getElementById('vincitore').innerHTML = 'Pareggio';
        };
        document.getElementById('play').className = 'show'
    }
);

