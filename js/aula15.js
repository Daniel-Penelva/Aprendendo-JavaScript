
// os valores serão impressos nessa função abaixo
function exibir(num){
    console.log("A operação resultou em: " + num)
}

function soma(a,b, callback){
    var soma = a+b
    callback(soma)
}

// cb = callback tb
function multiplica(a,b, cb){
    var multiplica = a*b
    cb(multiplica)
}

soma(2,2, exibir)
multiplica(4,2, exibir)

//setTimeout e setInterval
// 1 é milesegundos e 1000 é um segundo

setTimeout(function(){
    console.log("Testando o setTimeout");
}, 2000);

setInterval(function(){
    console.log("Testando o setInterval");
}, 3000);

//Eventos
window.onload = function(){
    console.log("carregou o DOM");
}

console.log("Carregou o JS")