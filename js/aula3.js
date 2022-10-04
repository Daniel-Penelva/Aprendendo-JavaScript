
var objeto = {
    nome: "Daniel",
    sobrenome: "Penelva",
    profissao: "programador",
    idade:28,
    fuma: false
};

console.log(objeto);
console.log(typeof objeto);

//acessando o objeto
console.log(objeto.nome);
console.log(objeto.sobrenome);
console.log(objeto.profissao);
console.log(objeto.idade);
console.log(objeto.fuma);

console.log("Meu nome: " + objeto.nome + " " + objeto.sobrenome + "." + " Profissão: " + objeto.profissao);

/* Pode atribuir outro valor */
objeto.nome = "Carlos";

console.log(objeto.nome);

let produtos = {
    descricao : "carne",
    preco : 2.90
}

const carro = {
    marca: ['Porsche, Ferrari', 'Honda'],
    modelo: ["Cayenne", "F40", "civic"],
    ano: ['2012', '2017', '2020']
}

//outra forma de acesso ao objeto -

console.log(carro['marca'])
console.log(carro['modelo'])
console.log(carro['ano'])


//usando screed - adicionando um novo modelo de carro - obs. repare que vale para constante tb
carro.marca = [...carro.modelo, 'spyder', 'lamborguini', 'bmw']