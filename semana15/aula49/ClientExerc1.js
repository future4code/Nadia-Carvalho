"use strict";
exports.__esModule = true;
var client = {
    name: "Nadia",
    registrationNumber: 10000,
    consumedEnergy: 100,
    calculateBill: function () {
        return 30;
    }
};
console.log(client.name, client.registrationNumber, client.consumedEnergy, client.calculateBill());
//Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
//Todas. Não. Isso é possível porque dentro de uma interface os dados são todos públicos.
