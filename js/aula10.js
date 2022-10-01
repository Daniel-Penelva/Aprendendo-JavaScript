
//Escopo Global
var x = 10
var y = 20

console.log(x, y)

//Escopo Local
function teste(){
    var z = 30
    console.log(z)

    // É possivel chamar a variavel global dentro da função, no caso, no escopo local.
    console.log("Variavel Global dentro do escopo local: " + x,y)
}

//chamando a função
teste()

//porém não é possivel chamar a variavel local para o escopo global. ERRADO: console.log(z)

/*  let  */
let t = 100

t = 110
console.log(t)

function teste2(){
    let t = 120
    console.log(t)
}

teste2()
console.log(t)

/*  const  */
const h = 15

// ERRO - nÃO vai poder alterar o valor de const, logo, h = 25

console.log(h)

//Dentro de outro escopo pode alterar a mesma variavel do tipo const
function teste3(){

    const h = 25
    console.log(25)
}

teste3()

/*  parseFloat e parseInt  */


console.log(parseFloat(12.999))

console.log(Number.parseFloat(12.999))

console.log(parseInt(12.999))

// toFixed - arredonda as casas decimais
console.log(23.567554345.toFixed(1))
console.log(23.567554345.toFixed(2))

//isNaN - verifica se o valor é número (tipo boolean)
console.log(isNaN("teste"))
console.log(isNaN(12))

// MAX_VALUE e MIN_VALUE
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

//length
var nome = "DANIEL"

console.log(nome.length)

console.log(nome[4])

//toLocaleLowerCase - caixa baixa
console.log(nome.toLocaleLowerCase())

// toLocaleUpperCase - caixa alta
var nome1 = "daniel"
console.log(nome1.toLocaleUpperCase())

// trim - reformula valores mal efetuadas - exemplo, deixar espaço no preenchimento de um campo
var carro = "    Ferrari       "
console.log(carro)
console.log(carro.trim())

// indexOf - marca o indice da primeira palavra do inicio da letra "r"
var frase = "O rato roeu a roupa do rei de Roma"
console.log(frase.indexOf("rato")) // vai imprimir 2

// lastIndexOf - marca o indice da ultima palavra do inicio da letra 
var frase1 = "eu quero a úlltima palavra teste que está escrito teste."
console.log(frase1.lastIndexOf("teste")) // vai imprimir 50

// slice - retira uma parte da frase (conta pelo indice)
console.log(frase.slice(7,11))

// replace - substituir uma palavra ou frase por outra
console.log(frase.replace("roeu", "mastigou"))

//split - cria um array
console.log(frase.split(" "))

var programacao = "java, php, javascript, C++, angular, wordpress"
console.log(programacao.split(", "))




