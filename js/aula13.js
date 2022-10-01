
//Tags - getElementsByTagName
var titulo = document.getElementsByTagName("h1")[0]
console.log(titulo)

var lis = document.getElementsByTagName("li")
console.log(lis[2])
console.log(lis[4].innerHTML) //innerHtml revela o que está escrito na tag

//id - getElementById

var titulo = document.getElementById("titulo")
console.log(titulo)

var paragrafo = document.getElementById("paragrafo")
console.log(paragrafo)

var lista = document.getElementById("lista")
console.log(lista)

//class - getElementsByClassName
var itensLista = document.getElementsByClassName("item")
console.log(itensLista)
console.log(itensLista[1].innerHTML)
console.log(itensLista[3].innerHTML)

//seletores - querySelector (captura somente um elemento) e querySelectorAll (captura mais de um elemento)

var itensQuery = document.querySelectorAll("#lista li")      //capturando o id da lista
console.log(itensQuery)

var itensQuery1 = document.querySelectorAll("#lista .item")  //capturando o id da lista
console.log(itensQuery1)

var p = document.querySelector("#paragrafo")                 //capturando o id do paragrafo
console.log(p)

var p2 = document.querySelector("#paragrafo2").innerHTML  
console.log(p2)

var lisLista = document.querySelectorAll(".item")             //capturando a class da li
console.log(lisLista)

//textContent e innerHTML - adiciona texto

 var title = document.querySelector("#teste")

 title.innerHTML = "Testando o innerHTML"            // alterando o texto do title 

 var titulo2 = document.querySelector("#titulo2")   //pode ser tb o getElementById()
 titulo2.innerHTML = "Testando o innerHTML"         // alterando o titulo h2 do texto

var titulo3 = document.querySelector(".titulo3")   // pode ser tb o getElementsByClassName()
titulo3.textContent = "Testando textContent"       // alterando o titulo h3 do texto

//createElement - cria elmentos
var paragrafoCreateElement = document.createElement("p")                 //criando o elemento p
var texto = document.createTextNode("Este é o texto do create element")  // criando o texto 
paragrafoCreateElement.appendChild(texto)                                //adicionando o texto dentro do paragrafo

var corpo = document.querySelector("body")                              //selecionar o body (corpo) do HTML
corpo.appendChild(paragrafoCreateElement)                               //adicionar o elemento p dentro do body

// colocando o crateElement dentro da div
var container = document.querySelector("#container")     //selecionando a div 
var elemento = document.createElement("span")            //criando o elemento span
elemento.appendChild(document.createTextNode("Adicionado o texto dentro do span"))  // adicionando o elemento dentro do texto
console.log(elemento)                                                               // testando o texto
container.appendChild(elemento)                                                    //adicionando o container dentro do elemento

// removeChild - remove elementos
//Removendo uma div onde dentro dela tem um paragrafo
var container2 = document.querySelector("#container2")
var removerParagrafo = document.querySelector("#container2 p")

container2.removeChild(removerParagrafo)

//removendo apenas um elmento
var subtitulo = document.querySelector(".classe")
subtitulo.remove()

// appendChild e insertBefore - inserindo elementos 

var elemento = document.createElement("div")   // criando um elemento
elemento.classList = "div-criada"              // adicionar uma classe a div
console.log(elemento)

var container3 = document.querySelector("#container3")  //selecionar a div
container3.appendChild(elemento)                        // adicionando o elemento dentro da div (container3)

// insertBefore outra forma de inserir o elemento 
var elemento2 = document.createElement("div")
elemento2.classList = "div-before"
console.log(elemento2)

var elemento3 = document.querySelector("#container3 .div-criada")
console.log(elemento3)

container3.insertBefore(elemento2, elemento3)

// replaceChild - trocando elementos 
var elemento4 = document.createElement("h3")
elemento4.classList - "testando-classe"

var texto = document.createTextNode("Este é o subtitulo h3")

elemento4.appendChild(texto)
console.log(elemento4)

//Agora vamos trocar a tag
var titulo7 = document.querySelector("#titulo7")

var pai = titulo7.parentNode                // vai acessar o elemento pai do titulo7
pai.replaceChild(elemento4,titulo7)        // trocar o elemento


// setAttribute - Adicionando atributo 

var titulo8 = document.querySelector("#titulo8")
titulo8.setAttribute("class", "testanto-atributo")    //setAttribute(propriedade, nome da propriedade)
console.log(titulo8)

var btn = document.querySelector("#botao")
btn.setAttribute("disabled", "desabilitado")
console.log(btn)

var paragrafo8 = document.querySelector(".paragrafo8")
paragrafo8.setAttribute("id", "paragrafo")
console.log(paragrafo8)

// remover atributo
var lista8 = document.querySelector("#lista8")
lista8.removeAttribute("id")
console.log(lista8)












