let x = 25;
let y = -47;
let z = 0;

let xTeigiamas = arTeigiamasArNeigiamas(x);
let yTeigiamas = arTeigiamasArNeigiamas(y);

isvestiArTeigiamas(x, xTeigiamas);
isvestiArTeigiamas(y, yTeigiamas);
isvestiArTeigiamas(z, arTeigiamasArNeigiamas(z));


//  Funkcija gauna skaičių
//  Patikrina ar skaičius yra teigiamas, ar neigiamas, ar nulis
// Grąžina -1, jei neigiamas, 1 jei teigiamas, 0 jei nulis
function arTeigiamasArNeigiamas(x) {
    if (x > 0) {
        return 1;
    } else if (x < 0) {
        return -1;
    }
    else {
        return 0;
    }
}


function isvestiArTeigiamas(skaicius, minusArPlius) {
    if (minusArPlius == -1) {
        console.log(skaicius + " Yra neigiamas");
    } else if (minusArPlius == 0) {
        console.log(skaicius + " Yra nulis");
    }
    else {
        console.log(skaicius + " Yra teigiamas");
    }
}