
var titulo = document.querySelector("#titulo") // seleciona o elemento

titulo.style.color = "red"               // selecionando o estilo

var ulEl = document.querySelector("#lista")
ulEl.style.backgroundColor = "yellow"  // em css seria assim: background-color

// vários estilos
var subtitulo = document.querySelector(".subtitulo")
subtitulo.style.cssText = "color: red; background-color:black; font-size:50px"

//document
console.log(document.body)  //acessa as propriedades do body

console.log(document.links[0])
console.log(document.links[1])

//pode alterar o texto
document.links[1].textContent = "Twitter"