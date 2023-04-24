"use strict";
// No caso dando o comando     node .\           no terminal ele dara erro    
//Aqui temos qu tormar cuidado Poeque queroemos enganar o TypeScript com esse ipo de converção
var casting;
(function (casting) {
    let idade = 25;
    idade.toFixed(); // toFixed   adiciona casas decimais 
    idade.length;
    idade.forEach(x => {
        console.log(x);
    });
    let nome = 35; // Primeiro tem que convert para o    unknown    que signifca desconhecido
})(casting || (casting = {}));
