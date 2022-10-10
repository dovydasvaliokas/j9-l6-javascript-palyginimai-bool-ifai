if (10 > 5) {
    console.log("10 yra daugiau už 5");
}

if (0 > 20) {
    console.log("Nulis yra didesnis");
}

let x = 15;
let y = -27;
let z = -14.8456;
let c = 2047;

console.log(modulis(x));
console.log(modulis(y));
console.log(modulis(z));
console.log(modulis(c));
console.log(modulis(-74));

let b = modulis(-7646);
console.log(b);



function modulis(x) {
    if (x < 0) {
        console.log("Keičiu " + x + " į teigiamą");
        x = x * -1;
    }
    return x;
}