// Scrivi una funzione che simuli un gioco di dadi tra due utenti, partendo da un prompt che richieda quanti tiri sono da effettuarsi.  
// Stampare il giocatore che ha totalizzato più punti, tenendo conto che:
// ogni dado ha 6 facce
// ogni giocatore tirerà il dado n volte
// Per ogni giocatore:
// generare un numero casuale per ogni tiro che effettuera’,
// ed ogni tiro sarà sommato ai precedenti per calcolare il punteggio finale del giocatore rispettivo.

// TIPS:
// Usiamo questa formula per generare un numero random → Math.floor(Math.random() * (6 - 1 + 1) + 1);



function tiraIlDado(numTiri) {
    let punteggioMiki = 0;
    let punteggioAle = 0;
    
    for (let i = 0; i <= numTiri; i++){
        tiroMiki = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        tiroAle = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        
        punteggioMiki += tiroMiki;
        punteggioAle += tiroAle;
        
    }

    if(punteggioMiki < punteggioAle) {
        return `Questo è il punteggio di Ale, vincitore della sfida: ${punteggioAle}.`;
    }else if(punteggioMiki > punteggioAle) {
        return `Questo è il punteggio di Miki, vincitore della sfida: ${punteggioMiki}.`;
        
    }else {
        return `La sfida è finita in pareggio perché entrambi i giocatori hanno ottenuto ${punteggioMiki}.`;
    }
    
}

let numTiri = Number(prompt("Inserisci il numero di tiri da effettuare con il dado:"));


// let risultato = tiraIlDado(numTiri);
// console.log(risultato);

console.log(tiraIlDado(numTiri));

