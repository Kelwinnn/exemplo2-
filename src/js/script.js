// // DECLARAÇÃO E VARIAVEIS
// var nome = "FIAP"; //DECLARA UMA VARIAVEL "VAR" QUE RECEBE O NOME "FIAP".
// console.log(nome); //EXIBE NO CONSOLE O QUE VOCÊ DECLARAR.

// // -------------------------------------------
// let idade = 17;
// console.log(idade);

// // -------------------------------------------
// const sobreNome ="Silva";
// console.log(sobreNome);

// //undefined
// let aula;
// console.log(aula)

// //null
// let valor = null;
// console.log(valor);

// //Objeto com coisas especificas
// let exemplo1={};

// //Objeto array
// let exemplo2=[];

// // TIPO VARIAVEIS
// let exemplo3 = 10;
// console.log(typeof exemplo3); //NUMERO

// let exemplo4 = "Aula";
// console.log(typeof exemplo4); //STRING

// let exemplo5 = true;
// console.log(typeof exemplo5); //BOOLEAN

// let exemplo6 = ["huguinho", "zezeinho", "luizinho"];
// console.log(typeof exemplo6); //OBJETO

// // CONVERSÕES

// // FLOAT => INTEIRO 
// let numFloat = 123.456;
// console.log(parseInt (numFloat));

// // STRING => FLOAT 
// let numString = "547.987";
// console.log(parseFloat(numString));

// // FLOAT => STRING 
// let numFloat1 = 554.665;
// console.log(numFloat1.toString());

// let numInt=100;
// console.log(numInt.toString());

// // METODOS - PARTE 1

// // LENGHT - VERIFICA O TAMANHO DA STRING 
// let frase = "O mundo da tecnologia";
// console.log(frase.length);

// // indexOf - RETORNA O TRECHO DE UM TEXTO
// let texto = "Programação Sustentavel";
// console.log(texto.indexOf("ão"));

// // SLICE - RETORNA PARTE DE UM TEXTO APONTANDO O INICIO E O FIM DE UM TEXTO.
// let info = "Processamento de ponta";
// console.log(info.slice(0,13));

// OPERADORES ARITMETICOS 
const num1 = 10;
const num2 = 20;

console.log(num1 + num2); //SOMA
console.log(num1 - num2); //SUBTRAÇÃO
console.log(num1 * num2); //MULTIPLICAÇÃO
console.log(num1 / num2); //DIVISÃO

// OPERADORES LOGICOS 
const num3 = 20;
const num4 = 30;

console.log(num3 > num4); //MAIOR
console.log(num3 < num4); //MENOR
console.log(num3 > num4 && num4 < 50); //OPERADOR "AND" 
console.log(num3 > num4 || num4 > num3); //OPERADOR "OU"
console.log(num3 == num4 || num4 <= num3);