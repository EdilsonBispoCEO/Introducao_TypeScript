"use strict";
let estaChovendo = false;
estaChovendo = true;
let idade = 33;
let altura = 1.75;
const nacionalidade = "Brasileiro";
const colegas = ['lucas', "Fernanda"];
const tecnologia = ['html', 'css', 'js']; //  Aqui consigo adicionar mais inforçã com  tecnologias.push();
const notas = [7, 8, 9, 4]; //Já aqui não da pra usar o push
const lista = ['Edilson', true, 33]; //  Aqui o consigo usar os três tipos, no caso do TypeScript uma união de tipos 
let idadeDaAna = 25;
idadeDaAna = '25 anos'; //    Aqui consigo usar todos os tipos se utilizar da suguite forma  loolean | number |  string 
/*  any  é mais utilizado para retorno ou uma integração com os dados do Back-end,
quando não temos certeza de qual o tipo de dados o Back-end vai devolver... Um tipo especial ele aceita qualquer coisa.
            Mas no caso Ele foge totalmente da proposta do TypeScript, que é  de ter um codigo bem escrito, escalavem e que sirva de documentação  */
let dadosDaApi;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = 'string';
let cusro = 'front-end';
