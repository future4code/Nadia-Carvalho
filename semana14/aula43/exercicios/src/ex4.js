// Tendo este pequeno texto em mente, você deve criar uma função que determine a que idade 
// histórica (em negrito no texto) um ano pertence. Ela deve esperar receber o ano e um outro
// parâmetro que seja a sigla "AC" ou "DC". Algumas características a mais desta função:
//       - Caso ela seja chamada sem passar uma sigla, ela deve automaticamente concluir que se 
//       trata de um ano "DC"
//       - Caso ela seja chamada passando um valor inválido (tanto para o ano como para a sigla),
//        ela deve retornar uma mensagem indicando um erro.
var Eras;
(function (Eras) {
    Eras["PREHISTORY"] = "Pr\u00E9-Hist\u00F3ria";
    Eras["ANCIENT"] = "Idade Antiga";
    Eras["MIDDLE"] = "Idade M\u00E9dia";
    Eras["MODERN"] = "Idade Moderna";
    Eras["CONTEMPORARY"] = "Idade Contempor\u00E2nea";
})(Eras || (Eras = {}));
var Ages;
(function (Ages) {
    Ages["AC"] = "AC";
    Ages["DC"] = "DC";
})(Ages || (Ages = {}));
function ValidateAC(year) {
    if (year > 4000) {
        return Eras.PREHISTORY;
    }
    else {
        return Eras.ANCIENT;
    }
}
function ValidateDC(year) {
    if (year < 476) {
        return Eras.MIDDLE;
    }
    else if (year < 1453) {
        return Eras.MODERN;
    }
    else {
        return Eras.CONTEMPORARY;
    }
}
function checkingAge(year, age) {
    if (!age) {
        age = Ages.DC;
    }
    if (year > 0) {
        switch (age) {
            case Ages.AC:
                return ValidateAC(year);
            case Ages.DC:
                return ValidateDC(year);
            default:
                return ("Era inválida!");
        }
    }
    else {
        return ("Ano inválido!");
    }
}
console.log(checkingAge(1987));
