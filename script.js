/*
esercizio biglietto treno
developer: Leonardo Fabbri
*/


//n. km utente.
var kilometri;
//n. anni.
var anni;
//euro x km.
const PREZZO_KM=0.21;
//sconti
var scontoAnziani= 0.6;

var  scontoMinorenni= 0.8;

var prezzo
 

/*

sezione di raccolta dati utente (prompt/input)

*/


kilometri=prompt("inserire km da percorrere");
console.log(kilometri+"km");


anni=prompt("inserire età");
console.log(anni+"anni");

console.log(kilometri * PREZZO_KM+("EURO"));

/*
sezione di raccolta dati utente (prompt/input)
*/

//qua metterò i calcoli e condizioni sconti
if (anni>65){
    prezzo_biglietto= kilometri * PREZZO_KM*scontoAnziani;
    console.log(kilometri * PREZZO_KM*scontoAnziani);
    document.getElementById("biglietto_stampato").innerHTML=kilometri+("km")+(" ")+anni+("anni")+(" ")+kilometri * PREZZO_KM*scontoAnziani+("prezzo")+(" ")+("scontato");
} else if (anni<18) {
    console.log(kilometri * PREZZO_KM*scontoMinorenni);
    document.getElementById("biglietto_stampato").innerHTML=kilometri+("km")+(" ")+anni+("anni")+(" ")+kilometri * PREZZO_KM*scontoMinorenni+("prezzo")+(" ")+("scontato");
} else {
    document.getElementById("biglietto_stampato").innerHTML=kilometri+("km")+(" ")+anni+("anni")+(" ")+kilometri * PREZZO_KM+("euro");
}

































