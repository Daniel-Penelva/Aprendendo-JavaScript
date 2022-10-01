
if(true){
    console.log("Dentro do if sendo true");
}

console.log("Saindo do if ")

/*  -----  */

var idade = 45;

if(idade<19){
    console.log("Menor idade");
} else{
    console.log("Adulto");
}

/*  -----  */

var nome="Pedro";

if(nome == "Daniel"){
    console.log("Seu Nome é: " + nome + " - Pode passar");
}else{
    console.log("Seu Nome é: " + nome + " - Não pode passar");
}

var cor="verde";

if(cor != "azul"){
    console.log(cor + " - você não escolheu a cor azul");
}else{
    console.log(cor + " - cor do céu");
}

/*  -----  */

var _idade = 17;

if(_idade < 11){
    console.log("Criança");
}else if (_idade >= 11 && _idade < 18){
    console.log("Adolescente");
}else if(_idade >=18 && _idade < 70){
    console.log("Adulto");
}else{
    console.log("Idoso");
}

var moeda1 = "coroa"; 
var moeda2 = "cara";

if(moeda1 == "cara" && moeda2 == "cara"){
    console.log("1º if else");
    console.log("1º Moeda jogada deu: " + moeda1);
    console.log("2º Moeda jogada deu: " + moeda2);
}else if (moeda1 == "cara" && moeda2 == "coroa"){
    console.log("2º if else");
    console.log("1º Moeda jogada deu: " + moeda1);
    console.log("2º Moeda jogada deu: " + moeda2);
}else if (moeda1 == "coroa" && moeda2 == "cara"){
    console.log("3º if else");
    console.log("1º Moeda jogada deu: " + moeda1);
    console.log("2º Moeda jogada deu: " + moeda2);
}else if(moeda1 == "coroa" && moeda2 == "coroa"){
    console.log("4º if else");
    console.log("1º Moeda jogada deu: " + moeda1);
    console.log("2º Moeda jogada deu: " + moeda2);
}else{
    console.log("ERRO");
}

var corPreferida = "amarelo";

if(corPreferida == "verde" || corPreferida == "vermelho"){
    console.log("1º if else");
    console.log("Cor preferida: " + corPreferida);
}else if(corPreferida == "rosa" || corPreferida == "amarelo"){
    console.log("2º if else");
    console.log("Cor preferida: " + corPreferida);;
}else if(corPreferida == "preto" || corPreferida == "azul"){
    console.log("3º if else");
    console.log("Cor preferida: " + corPreferida);
}else{
    console.log("Não tem a cor que escolheu - ERRO");
}


/*  -----  */

var num = "5";
if(num === 5){
    console.log("Tipo number e o número é 5");
}else{
    console.log("Tipo: " + typeof num);
}

/*  -----  */

var carro = "Ferrari";
if(!(carro == "Ferrari")){
    console.log("carro: " + carro);
}else{
    console.log("Não pode ser Ferrari");
}