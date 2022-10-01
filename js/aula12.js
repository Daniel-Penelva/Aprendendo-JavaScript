
let pessoa = {
    nome: "Daniel",
    profissao: "programador",
   
    falar: function(){
        console.log("Olá Mundo do JavaScript!")
    },

    idade: function(idade){
        return idade
    }
}

console.log("Nome: " + pessoa.nome + " - Profissão: " + pessoa.profissao)
pessoa.falar();

var idade = pessoa.idade(32)
console.log(idade)

/*  Exemplo 2  */

let calculadora = {
    soma: function(num1, num2){
        var calcSoma = num1 + num2
        return calcSoma
    },

    subtracao:function(num1, num2){
        var calSubtracao = num1 - num2
        return calSubtracao
    },

    multiplicacao:function(num1, num2){
        var calcmultiplicacao = num1 * num2
        return calcmultiplicacao
    },

    divisao:function(num1, num2){
        if(num2 > 0){
            var calcDivisao = num1 / num2
            return calcDivisao
        }else{
            return "Erro"
        }
    }
}

//Chamando os métodos calculadora
soma = calculadora.soma(10, 20)
console.log(soma)

subtrair = calculadora.subtracao(30, 20)
console.log(subtrair)

multiplicar = calculadora.multiplicacao(10, 5)
console.log(multiplicar)

dividir = calculadora.divisao(25, 5)
console.log(dividir)

/*  this  */
let cachorro = {
    nome:"Bilu",
    raça:"poodle",
    idade: 5,

    late: function(){
        console.log("Au auauauauauauau  " + this.nome)
    },

    aniversario: function(){
        this.idade += 1
    }
}

//o this exibe o valor da propriedade idade
cachorro.late()

//o this altera o valor da propriedade idade
cachorro.aniversario()
console.log(cachorro.idade)

