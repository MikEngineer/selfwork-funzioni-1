// Scrivi una funzione che simuli un gioco di dadi tra due utenti, partendo da un prompt che richieda quanti tiri sono da effettuarsi.  
// Stampare il giocatore che ha totalizzato più punti, tenendo conto che:
// ogni dado ha 6 facce
// ogni giocatore tirerà il dado n volte
// Per ogni giocatore:
// generare un numero casuale per ogni tiro che effettuera’,
// ed ogni tiro sarà sommato ai precedenti per calcolare il punteggio finale del giocatore rispettivo.

// TIPS:
// Usiamo questa formula per generare un numero random → Math.floor(Math.random() * (6 - 1 + 1) + 1);

let punteggioMiki = 0;
let punteggioAle = 0;
let numTiri = Number(prompt("Inserisci il numero di tiri da effettuare con il dado:"));


function tiraIlDado (nome){
    for (let i = 1; i <= numTiri; i++){

        punteggioMiki += Math.floor(Math.random() * (6 - 1 + 1) + 1);
        punteggioAle += Math.floor(Math.random() * (6 - 1 + 1) + 1);
        
        if(punteggioMiki < punteggioAle) {
            console.log(`Questo è il punteggio di ${nome}, vincitore della sfida: ${punteggioAle}`);
        }else if(punteggioMiki > punteggioAle) {
            console.log(`Questo è il punteggio di ${nome}, vincitore della sfida: ${punteggioMiki}`);
            
        }else {
            console.log("La sfida è finita in pareggio");
        }
    }
    
}

tiraIlDado ("Miki");
tiraIlDado ("Ale");