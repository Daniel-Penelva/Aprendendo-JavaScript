var teste = "Olá Mundo!";
console.log(teste);

var numero = 1;
console.log(numero);

/* É possivel declarar a variavel com dois caracteres especias, sao elas: $ e _ */

var _teste1 = 'Teste 1';
console.log(_teste1);

var $teste2 = 'Teste 2';
console.log($teste2);

/* Outras formas de declarar variaveis */

let mensagem = "Testando JavaScript"
let teste1 = 1;
let peso = 69.2
const teste2 = 2;

console.log(mensagem);
console.log(teste1);
console.log(peso)
console.log(teste2);

/*Testando o typeof - Descreve o tipo da variavel */

var numero1 = 10;
console.log(typeof numero1);

var texto = 'Carro';
console.log(typeof texto);

var continua = true
console.log(typeof continua)

/* Possui três valores simbólicos: +Infinity, -Infinity e NaN */
console.log(typeof NaN);
console.log(typeof +Infinity);
console.log(typeof -Infinity);

/* Trabalhar com valores constante */
const PI = 3.1415
console.log(PI)

const taxa = 0.5
console.log(taxa)

/* String  e concatenar String */
var nome = 'Daniel';
var sobrenome = 'Penelva';

console.log(nome);
console.log(sobrenome);

var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

console.log('Nome:' + nome + " " + sobrenome);


var peso1 = 63.9
var altura = 1.75

console.log(`Meu peso: ${peso1} m`)
console.log("<h3> Minha altura " + altura + " m </h3>")

/*Concatenar - Escrever na tela HTML*/
document.write("Teste");

document.write(nomeCompleto);

document.write("Seu Nome:" + nome + " " + sobrenome);

document.write('Aspas simples - "Aspas duplas dentro das aspas simples"');
document.write("Aspas duplas - 'Aspas simples dentro das aspas duplas'");

var marcaCarro = "Hyundai"
var modeloCarro = "I30"

document.write(`Marca do carro: ${marcaCarro} `)
document.write(`<p> Modelo do carro: ${modeloCarro} </p>`)

/* Boolean */

var verdadeiro = true;
var falso = false;

console.log(typeof verdadeiro);
console.log(typeof falso);

/* Boolean */

var test = null;
var test1;

console.log(test);
console.log(typeof test);

console.log(test1);
console.log(typeof test1);

/* Operadores e Operações */

let n1 = 10;
let n2 = 2;
let n3 = "2";

document.write("Operadores e Operações <br>")


document.write(`N1 = ${n1} <br>`)
document.write(`N2 = ${n2} <br>`)
document.write(`N3 = ${n3} <br>`)

document.write("N1 e N2 são inteiro e N3 é string <br>")

document.write("<br>")

document.write(`Resultado Soma = ${n1+n2} <br>`)
document.write(`Resultado Subtração = ${n1-n2} <br>`)
document.write(`Resultado Multiplicação = ${n1*n2} <br>`)
document.write(`Resultado Divisão = ${n1/n2} <br>`)
document.write(`Resultado Resto = ${n1%n2} <br>`)

document.write("<br>")

document.write(`N1 > N2 = ${n1 > n2} <br>`)     
document.write(`N1 >= N2 = ${n1 >= n2} <br>`)  
document.write(`N1 < N2 = ${n1 < n2} <br>`)  
document.write(`N1 <= N2 = ${n1 <= n2} <br>`)  

document.write("<br>")

document.write(`N2 = N3 = ${n1 == n2} <br>`)     //igual 
document.write(`N2 === N3 = ${n1 === n2} <br>`)  //identico a
document.write(`N2 != N3 = ${n1 != n2} <br>`)  //diferente de não
document.write(`N2 !== N3 = ${n1 !== n2} <br>`)  //Não e identico

document.write("<br>")
let a = true
let b = false

document.write(`a = ${a} <br>`)
document.write(`b = ${b} <br>`)

document.write("<br>")

document.write(`a && b = ${a && b} <br>`)     //E (AND)
document.write(`a || b = ${a || b} <br>`)  //OU (OR)
document.write(`!a = ${!a} <br>`)  //NOT (não / negação)
document.write(`!b = ${!b} <br>`)
