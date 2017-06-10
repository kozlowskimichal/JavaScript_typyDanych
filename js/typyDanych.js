'use strict';


/*

Typ liczbowy

*/


var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);

/*

Typ - łańcuch znaków -string

*/

var wyplataStr = "5000";
var premiaStr = "2500";
var calkowitaWyplataStr;

/* calkowitaWyplataStr = wyplataStr  + ' "dodajemy" ' premiaStr; */
/*                                      "\"dodajemy"\"   */

calkowitaWyplataStr = wyplataStr + premiaStr;

console.log(calkowitaWyplataStr);


var imieStudenta = " Michał";
console.log(imieStudenta.indexOf('c'));
console.log(imieStudenta);
console.log(imieStudenta.trim());


/*Typ logiczny -boolean*/


var czyJestSmog;
czyJestSmog =false;

if (czyJestSmog) {
    console.log("Jest SMOG");
}  else {
    console.log("Nie ma SMOGa ;)");
}

