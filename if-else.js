arTeigiamas(-27);
arTeigiamas(6);
arTeigiamas(0);
arTeigiamas(17);

console.log(arLyginis(5));
let x = arLyginis(18);
console.log(x);

let y = 25;
let arYLyg = arLyginis(y);
isvestiArLyginis(arYLyg, y);

let z = 24;
isvestiArLyginis(arLyginis(z), z);


let sk1 = 25;
let sk2 = 48;
console.log(veiksmaiSuLyginiaisNelyginiais(sk1));
console.log(veiksmaiSuLyginiaisNelyginiais(sk2));


function arTeigiamas(x) {
    if (x > 0) {
        console.log(x + " Skaičius yra teigiamas");
    }
    else {
        console.log(x + " Skaičius NĖRA teigiamas");
    }
}


function arLyginis(x) {
    if (x % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function isvestiArLyginis(lyginisArNe, skaicius) {
    if (lyginisArNe == true) {
        console.log(skaicius + " Skaičius yra lyginis");
    }
    else {
        console.log(skaicius + " Skaičius nėra lyginis");
    }
}


// Funkcija gauna skaičių ir jeigu jis yra lyginis tą skaičių padvigubina
// Jeigu jis yra nelyginis, tą skaičių padalina per pusę
// Rezultatą grąžina
function veiksmaiSuLyginiaisNelyginiais(skaicius) {
    let koksSkaiciusYra = arLyginis(skaicius);
    if (koksSkaiciusYra == true) {
        skaicius = skaicius * 2;
    }
    else {
        skaicius = skaicius / 2;
    }
    return skaicius;
}