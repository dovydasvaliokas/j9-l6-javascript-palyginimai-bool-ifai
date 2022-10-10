let x = +prompt("Įveskite dienos skaičių - jums bus išvedamas tos dienos pavadinimas");
isvestiDienosPavadinimas(x);


function isvestiDienosPavadinimas(dienosSkaicius) {
    if (dienosSkaicius == 1) {
        alert("Tai yra pirmadienis");
    } else if (dienosSkaicius == 2) {
        alert("Tai yra antradienis");
    } else if (dienosSkaicius == 3) {
        alert("Tai yra trečiadienis");
    } else if (dienosSkaicius == 4) {
        alert("Tai yra ketvirtadienis");
    } else if (dienosSkaicius == 5) {
        alert("Tai yra penktadienis");
    } else if (dienosSkaicius == 6) {
        alert("Tai yra šeštadienis");
    } else if (dienosSkaicius == 7) {
        alert("Tai yra sekmadienis");
    }
    else {
        alert("Įvedėte netinkamą dienos skaičių!!!");
    }
}