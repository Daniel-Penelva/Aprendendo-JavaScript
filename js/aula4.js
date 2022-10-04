var array = [1, 2, 3, 4, 5, 6];
console.log(array);
console.log(typeof array);  // tipo Object

let carro = ['ferrari', 'mercedes', 'honda']
document.write("Carros: " + carro)

var codigos = Array(10, 20, 30)
document.write("Códigos: " + codigos)

/* capturando por indice */
console.log(array[0]);
console.log(array[1]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);   // vai gerar undefined

var nomes = ["Daniel", "Carlos", "Renata", "Joice"];
console.log(nomes);

var b = [true, false];
console.log(b);

var ArrayObj = [1, 2, 3, {numero: 4}];
console.log(ArrayObj);
console.log(ArrayObj[3]);

/* Substituir e atribuir novos indices */

array[5] = 100;  // Substituir o valor 6 por 100
array[6] = 7;
array[7] = 8;
array[8] = 9;

console.log(array);
console.log(array.length);


let produtos = ['arroz', 'feijao', 'macarrão']
var numeros = Array(1, 2, 3, 5, 6)

console.log(produtos)
console.log(numeros)

//adicionar no final push (empurre)
produtos.push('batata')
numeros.push(7)

console.log(produtos)
console.log(numeros)


//remover no final (estourar)
produtos.pop()
numeros.pop()

console.log(produtos)
console.log(numeros)

//adicionar no inicio - unshift 
produtos.unshift('leite', 'maça')
console.log(produtos)

//remove do inicio 
produtos.shift()

//splice(inicio, quantos remover) - emendar
numeros.splice(1, 2) 

//slice - copiar array slice e fatiar porção
//posição inicial, quantos copiar
numeros.slice(0, 2)

//lenght - tamanho do array
numeros.length


// spreed operator...
let teste = [...produtos, 'Ovo', 'Pera']