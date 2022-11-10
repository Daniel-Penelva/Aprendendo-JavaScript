const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

/* Criar uma classe para as regras de negocio */
class Calculator {
  /* inicializa instanciando os objetos para não precisar ficar chamando a todo momento */
  constructor(previousOperationText, currentOperationText) {
    
    /* valores já impressos na tela */
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;

    /*valores que serão digitados e impressos na tela */
    this.currentOperation = "";
  }

  /* 1º ação - adicionar os digitos da calculadora */
  addDigit(digit){

    /* regra de negocio para o uso correto do ponto nos numeros */
    if(digit === "." && this.currentOperationText.innerText.includes(".")){
        return;
    }
    
    this.currentOperation = digit;

    /* responsavel por atualizar a tela */
    this.updateScreen();
  }

  /* processar as operações da calculadora */
  processOperation(operation){
   
    /* Checar se o current está vazio */
    if(this.currentOperationText.innerText === "" && operation !== "C"){
        if(this.previousOperationText.innerText !== ""){
            /* ocorre a mudança de operação */
            this.changeOperation(operation);
        }
        return;
    }


    let operationValue;
    let previous = +this.previousOperationText.innerText.split(" ")[0];
    let current = +this.currentOperationText.innerText;

    switch(operation){
        case "+":
            operationValue = previous + current;
            this.updateScreen(operationValue, operation, current, previous);
            break;
        case "-":
            operationValue = previous - current;
            this.updateScreen(operationValue, operation, current, previous);
            break;
        case "*":
            operationValue = previous * current;
            this.updateScreen(operationValue, operation, current, previous);
            break;
        case "/":
            operationValue = previous / current;
            this.updateScreen(operationValue, operation, current, previous);
            break;
        case "DEL":
            this.processDelOperator();
            break;
        case "CE":
            this.processClearCurrentOperator();
            break;
        case "C":
            this.processClearAllOperator();
            break;
        case "=":
            this.processEqualsOperator();
            break;
        default:
            return;
    }
  }

  updateScreen(operationValue = null, operation = null, current = null, previous = null){
    
    if(operationValue === null){
        /* responsavel por refletir o número na tela da calculadora */
        this.currentOperationText.innerText += this.currentOperation;
    }else{
        if(previous === 0){
            operationValue = current;
        }
    
        /* adicionar o valor na current para o previous*/
        this.previousOperationText.innerText = `${operationValue} ${operation}`;
        this.currentOperationText.innerText = "";
    }
  }

  changeOperation(operation){
    const mathOperations = ["*", "/", "+", "-"];

    if(!mathOperations.includes(operation)){
        return;
    }

    this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
  }

  /* para deletar o ultimo digito */
  processDelOperator(){
    this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
  }

  /* deletar todo o digito */
  processClearCurrentOperator(){
    this.currentOperationText.innerText = "";
  }

  /* deleta o current e o previous*/
  processClearAllOperator(){
    this.currentOperationText.innerText = "";
    this.previousOperationText.innerText = "";
  }

  /* processo o sinal de igual */
  processEqualsOperator(){
    let operation = this.previousOperationText.innerText.split(" ")[1];
    this.processOperation(operation);
  }

}

/* executa os métodos de entrada */
const calc = new Calculator(previousOperationText, currentOperationText);

/* Eventos para o funcionamento do programa */
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    /*capturar o valor que o usuário clicou na calculadora */
    const value = e.target.innerText;

    /* condição para separar os números e as operações */
    if (+value >= 0 || value === ".") {
      calc.addDigit(value);
    } else {
      calc.processOperation(value);
    }
  });
});
