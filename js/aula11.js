
var lista = [1, 2, "morango", "JAVA", 3]

console.log(lista)

// push - adicionar a lista 
lista.push(4)
lista.push("limão")

console.log(lista)

//pop - remove a lista 
lista.pop()
console.log()

// unshift - adiciona para o inicio da lista
lista.unshift("Abacate")
lista.unshift(0)
console.log(lista)

// shift - remove o inicio da lista, no caso, o número 0 (zero)
lista.shift()
console.log(lista)

// acessar o ultimo elemento da lista 
console.log(lista[lista.length - 1])

//isArray - verifica se é realmente o array que está sendo utilizado
//É preciso chamar a sua classe Array para depois chamar o seu método isArray() - retorna um boolean
console.log(Array.isArray(lista))

// splice - adiciona um elemento através do indice
// splice[indice, quantidade de elementos a ser eliminado, valor adicionado a lista]
console.log(lista)

lista.splice(2, 0, 999)   // eliminar 0 (zero) elemento da lista do indice 2 adicionando o valor 999
console.log(lista)

lista.splice(6, 2, "PHP") // eliminar 2 (um) elementos da lista do indice 2 adicionando o valor PHP
console.log(lista)

lista.splice(4,1)         // eliminar 1 (um) elemento da lista do indice 4 
console.log(lista)


// indexOf - acha o indice do elemento
console.log(lista.indexOf(2))

// join - transforma o array numa string
var lista2 = ["O", "rato", "roeu", "a", "roupa"]
console.log(lista2.join(", "))
console.log(lista2.join(" "))

// reverse - iverte a lista os valores da lista
console.log(lista2.reverse())
console.log(lista.reverse())