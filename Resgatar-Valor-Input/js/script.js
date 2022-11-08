
//Selecionando o botão de submeter
const btn = document.querySelector("#send");

//Criar um evento para resgatar o valor do input
btn.addEventListener("click", function(e){

    e.preventDefault();

    //capturar o valor do input name
    const name = document.querySelector("#name");

    // acessa a propriedade value do input nome
    const value = name.value;

    //imprimir no console
    console.log(value);
})