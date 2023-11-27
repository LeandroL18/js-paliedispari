// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


// chiedo all'utente di inserire una parola
const parola = prompt("Inserisci una parola per verificare se è palindroma");

// trasformo in minuscolo e senza spazi
parola = parola.toLowerCase().replaceAll("\\s","");

// // se la parola ha un solo carattere è sicuramente palindroma
// if (parola.length() < 2) { 
//     document.getElementById("mio_id").innerHTML("La parola che hai scritto è palindroma!");
// }


