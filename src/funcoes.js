"use strict";
function calculaArea(base, altura) {
    return base * altura;
}
// Aqui segui no mesmo raciocino, consigo fazer em uma linha ou duas
const calculaArea2 = (base, altura) => base * altura;
// O  void    é um    return   como no Js
function somar(...numeros) {
    // numeros.reduce()
    console.log(numeros);
}
// Essas são as formas de tipa seu retorno, e os valores que a função pode receber como argumentos  
function teste() {
    if (10 > 5) {
        return 'Dez é maior que cinco';
    }
    else {
        return 5;
    }
}
const resultadoDeTeste = teste();
