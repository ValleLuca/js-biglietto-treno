let kmValue = prompt('Inserisci i kilometri che vuoi percorrere');

let ageValue = prompt('Inserisci i tuoi anni');

const priceValue = kmValue * 0.21;

if (ageValue < 18 ){
    const scontominorenniValue = priceValue - ((priceValue / 100) * 20);
    console.log(scontominorenniValue);
    document.getElementById('finalprice').innerHTML = scontominorenniValue.toFixed(2);
}else if(ageValue >= 65){
    const scontoanzianiValue = priceValue - ((priceValue / 100) * 40);
    console.log(scontoanzianiValue);
    document.getElementById('finalprice').innerHTML = scontoanzianiValue.toFixed(2);
}else{
    document.getElementById('finalprice').innerHTML = priceValue.toFixed(2);
}
