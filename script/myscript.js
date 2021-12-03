let kmValue = prompt('Inserisci i kilometri che vuoi percorrere');

let ageValue = prompt('Inserisci i tuoi anni');

const priceValue = kmValue * 0.21;
console.log(priceValue)

if (ageValue < 18 ){
    const scontominorenniValue = priceValue - ((priceValue / 100) * 20);
    console.log(scontominorenniValue)
}
