
var objeto = {
    nome: "Daniel",
    sobrenome: "Penelva",
    profissao: "programador",
    idade:28,
    fuma: false
};

console.log(objeto);
console.log(typeof objeto);

console.log(objeto.nome);
console.log(objeto.sobrenome);
console.log(objeto.profissao);
console.log(objeto.idade);
console.log(objeto.fuma);

console.log("Meu nome: " + objeto.nome + " " + objeto.sobrenome + "." + " Profissão: " + objeto.profissao);

/* Pode atribuir outro valor */
objeto.nome = "Carlos";

console.log(objeto.nome);