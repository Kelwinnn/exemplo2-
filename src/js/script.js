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
// const num1 = 10;
// const num2 = 20;

// console.log(num1 + num2); //SOMA
// console.log(num1 - num2); //SUBTRAÇÃO
// console.log(num1 * num2); //MULTIPLICAÇÃO
// console.log(num1 / num2); //DIVISÃO

// // OPERADORES LOGICOS 
// const num3 = 20;
// const num4 = 30;

// console.log(num3 > num4); //MAIOR
// console.log(num3 < num4); //MENOR
// console.log(num3 > num4 && num4 < 50); //OPERADOR "AND" 
// console.log(num3 > num4 || num4 > num3); //OPERADOR "OU"
// console.log(num3 == num4 || num4 <= num3);

// OPERADORES DE COMPAÇÃO 
// const num5 = 25;
// const num6 = 35;

// console.log(num5 == num6); //Compara 
// console.log(num5 === num6); //Compara e verifica o tipo da variavel
// console.log(num5 != num6); //Diferente


// ESTRUTURA CONDICIONAL

//IF

let valor = 100;

if(valor == 101){
    console.log("É verdadeiro!");
}

// IF / ELSE

let valor1 = 100;

if(valor1 == 100){
    console.log("Valor Correto");
} else {
    console.log("Valor Errado");
}


//IF /ELSE - encadeado ou aninhado

// let idade = 13;

// if(idade < 14 ){
//     console.log("Não pode entrar na balada!");
// } 
// else if(idade >= 14 && idade < 18){
//     console.log("Pode entrar na balada!");
// }
// else{
//     console.log("Não pode entrar na balada!")
// }

// CONDIÇÃO TERNARIO

// let valor2 = 300;

// let resultado = valor2 == 300? "Certo" : "Errado";
// console.log(resultado)

//SWITCH CASE

// let time = "São Paulo";

// switch(time){
//     case "São Paulo":
//         console.log("Melhor Time");
//         break;
//     case "Corinthians ":
//         console.log("Menor do Brasil");
//         break;
//     case "Palmeiras":
//         console.log("Já sabe que não tem MUNDIAL");
//         break;
//     default:
//         console.log("Nenhuma das opções");
// }

// ESTRUTURA DE LAÇO DE REPETIÇÃO 

// for(let i = 0; i < 10; i++){
//     console.log("O valor de I é:", i);
// }

// WHILE

let w = 0;

while(w <= 10){
    console.log("O valor de W é ",w);
    w++
}

//DO WHILE

let z = 10;

do{
    console.log("Do while é:", z);
    z++;
}while(z < 100);