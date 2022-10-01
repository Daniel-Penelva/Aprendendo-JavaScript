
//click
var btn = document.querySelector("#btn")

console.log(btn)

//adiciona um evento ao clicar o botao
btn.addEventListener("click", function(){
    console.log("você clicou no botão!");

    console.log(this);

    this.style.color = "red";
})


var titulo = document.querySelector("#titulo1");

titulo.addEventListener("click", function(){
    console.log("testando click");

    var subtitulo = document.querySelector(".subtitulo1");
    subtitulo.style.display = "none";
    

});

//dblclick (duplo click)

var titulo1 = document.querySelector(".subtitulo1")

titulo1.addEventListener("dblclick", function(){

    console.log("testando duplo click");

})

/* ------ */

//mouseover
var titulo2 = document.querySelector("#titulo2")

titulo2.addEventListener("mouseover", function(){
    this.style.backgroundColor = "red";
})

//mouseout
titulo2.addEventListener("mouseout", function(){
    this.style.backgroundColor = "yellow";
})

// afetar outro elemento usando o mouseover e o mouseout
var paragrafo = document.querySelector(".paragrafo")

paragrafo.addEventListener("mouseover", function(){
    var hideEl = document.querySelector("#idHide");
    
    //objetivo é remover a class dessa maneira o css nao vai ter mais uma class com o display e valor none
    hideEl.classList.remove("hide");
})

var paragrafo = document.querySelector(".paragrafo")

paragrafo.addEventListener("mouseout", function(){
    var hideEl = document.querySelector("#idHide");
    
    //objetivo é adicionar de novo a class, dessa maneira o css vai ter a class com o display e valor none
    hideEl.classList.add("hide");
})


/* ------ */
// keydown

document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
      console.log("Apertou o Enter");
    }else if(event.key === "1"){
      console.log("Apertou o botão número 1");
    }else{
        console.log("apertou qlq botao");
    }
})

// keyup
document.addEventListener("keyup", function(e){
    if(e.key === "Enter")
        console.log("Soltou o Enter");
        
})