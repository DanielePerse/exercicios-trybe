//old function
function fatorial(num) {
  let result = 1;
  for (let i = num; i > 0; i -= 1){
    result = result * i;
  }
  return result;
}
console.log(fatorial(4));

//new function - using arrow function
let arrowFunction = num => {
  let result = 1;
  for (let i = num; i > 0; i -= 1){
    result = result * i;
  }
  return result;
}
console.log(fatorial(4));