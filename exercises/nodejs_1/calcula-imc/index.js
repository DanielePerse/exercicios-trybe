let inquirer = require('inquirer');

inquirer
  .prompt([
    'Informe seu peso:'
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

let peso = readlineSync.questionFloat('Informe seu peso:');
let altura = readlineSync.questionFloat('Informe sua altura:');

function calculoIMC(peso, altura) {
  return (peso / (altura * altura)).toFixed(2)
}

let imc = calculoIMC(peso, altura);

function situacaoIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso (magreza)"
  } else if (imc >= 18.5 && imc <= 24.9) {
    return "Peso normal"
  } else if (imc >= 25 && imc <= 29.9) {
    return "Acima do peso (sobrepeso)"
  } else if (imc >= 30 && imc <= 34.9) {
    return "Obesidade grau I"
  } else if (imc >= 35 && imc <= 39.9) {
    return "Obesidade grau II"
  } else {
    return "Obesidade graus III e IV"
  }
}

console.log(calculoIMC(peso, altura))
console.log(situacaoIMC(imc))
