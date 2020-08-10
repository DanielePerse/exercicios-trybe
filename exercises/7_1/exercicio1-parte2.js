//old function
function fatorial(num) {
  let resultado = 1;
  for (let i = num; i > 0; i -= 1){
    resultado = resultado * i;
  }
  return resultado;
}
console.log(fatorial(4));

//new function - using arrow function
let arrowFunction = num => {
  let resultado = 1;
  for (let i = num; i > 0; i -= 1){
    resultado = resultado * i;
  }
  return resultado;
}
console.log(fatorial(4));