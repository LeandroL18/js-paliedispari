// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


// selezione input
const wordin = document.getElementById("wordIn");
const userscelta = document.getElementById("userscelta");
const numberin = document.getElementById("numberIn");


// selezione bottoni 
const palibutton = document.getElementById("palindroma");
const playbutton = document.getElementById("gioca");

// definizione variabili
let parola = "";
let number = 0;
let computer = 0;
const pari = "pari";
const dispari = "dispari";

palibutton.addEventListener("click",
    function(){
        parola = wordin.value; 
        console.log(parola);
        const risultato = palindroma(parola);
        document.getElementById("risultato").innerHTML = risultato;
    }
)

function palindroma(){
    // trasformo in minuscolo e senza spazi
    parola = parola.toLowerCase().replace(/ /g,"");
    console.log(parola);
    // inverto la parola
    let parolainversa = parola.split('').reverse().join('');
    console.log(parolainversa);
    // condizione
    if(parola === parolainversa){
        return "La parola inserita è palindroma!";
    }
    else return "La parola inserita non è palindroma!";
}



playbutton.addEventListener("click",
    function(){
        let userNumber = numberin.value;
        console.log("Il giocatore ha scelto " + userNumber);

        computer = Math.floor(Math.random() * (5)) + 1;
        console.log("Il computer ha scelto " + computer);

        const result = pariodispari(userNumber,computer);
        document.getElementById("result").innerHTML = result;
    }
)

function pariodispari(userNumber,computer){
    let scelta = userscelta.value;
    scelta = scelta.toLowerCase();
    console.log(scelta);

    let somma = userNumber + computer;
    
    if(somma % 2 === 0 & scelta === pari){
        return "Hai vinto!";
    }
        else if(somma % 2 === 1 & scelta === dispari) return "Hai vinto!";
        else return "Hai perso!";
}
