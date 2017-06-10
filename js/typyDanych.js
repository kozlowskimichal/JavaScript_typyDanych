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