
for(var i=0; i< 10; i++){
    console.log(i);
}

var array = [1, 2, 3, 4, 5, 6];
for(i=0; i<array.length; i++){
    console.log(array[i]);
}

for(var y=10; y > 0; y--){
   console.log(y);
}

/* ----- */

for(var t=0; t<10; t++){

    console.log(t);

    if(t==5){
      break;
    }
}

console.log("Ocorreu o break!");

/* ----- */
var x = 10;

while(x < 100){
    x +=10;

    if(x == 60){
      continue;      // vai pular a execução do 60.
    }

    console.log("Testando continue: " + x);
}