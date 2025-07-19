/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function arrayName (names){
    const initials = [];
    
    for (let i = 0; i < names.length; i++){

        const name = names[i];

        initials.push(name.charAt(0).toUpperCase());
    }

    return initials;
}

// Invoca la funzione qui e stampa il risultato in console

const result = arrayName(names);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

console.log(result);