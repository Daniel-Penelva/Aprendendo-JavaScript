
/* Função que adiciona a tarefa */
function addTask(){
    //titulo da tarefa - o ponto value adiciona o que você digitar no input
    const taskTitle = document.querySelector("#task-title").value

    // clona o template, ou seja, toda a ul e li
    if(taskTitle){
      const template = document.querySelector(".template")
      const newTask = template.cloneNode(true)
      // console.log(newTask)

      // adiciona título, no caso, o span
      newTask.querySelector(".task-title").textContent = taskTitle

      //remover as classes desnecessárias 
      newTask.classList.remove("template")
      newTask.classList.remove("hide")

      //adicionar tarefa na lista
      const list = document.querySelector("#task-list")
      list.appendChild(newTask)

      //adicionar o evento de remover no botão
      const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
          removeTask(this);  // o this faz referencia ao elemento 
      })

      //adicionar o evento de completar tarefa
      const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
        completeTask(this);  // o this faz referencia ao elemento 
    })

      //limpar texto depois que adiciona a tarefa
      document.querySelector("#task-title").value = "";

    }
}

/* Função de remover tarefa */
function removeTask(task){
    task.parentNode.remove(true)  //remove o elemento pai, que é a ul li
}

/* Função de completar a tarefa */
function completeTask(task){
    const taskToComplete = task.parentNode
    taskToComplete.classList.toggle("done")  // o toggle verifica se tem a classe ou não - se tiver com done tira e senao tiver com done ele coloca
}


/* Evento de adicionar a tarefa*/
var addBtn = document.querySelector("#add-btn")

//adicionar um evento no click do botao 
addBtn.addEventListener("click", function(e){
  //para não submeter um formulario quando se clica no botão +
  e.preventDefault();
  addTask();

})
