var array = [1, 2, 3, 4, 5, 6];
console.log(array);
console.log(typeof array);  // tipo Object

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