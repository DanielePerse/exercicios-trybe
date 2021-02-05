const inquirer = require('inquirer');

function validateFloat (input) {
  return !isNaN(parseFloat(input)) || 'Por favor, digite um número válido';
}

async function calculoIMC() {
  const result = await inquirer.prompt([
    { name: 'peso', type: 'input', message: 'Informe seu peso:', validate: validateFloat },
    { name: 'altura', type: 'input', message: 'Informe sua altura:', validate: validateFloat }
  ]);
  const peso = parseFloat(result.peso);
  const altura = parseFloat(result.altura);

  console.log('Peso: %s, altura: %s', peso, altura);
  
  const imc = (peso / Math.pow(altura, 2)).toFixed(2);

  console.log('IMC: %s', imc);

  if (imc < 18.5) {
    return console.log("Abaixo do peso (magreza)")
  } else if (imc >= 18.5 && imc <= 24.9) {
    return console.log("Peso normal")
  } else if (imc >= 25 && imc <= 29.9) {
    return console.log("Acima do peso (sobrepeso)")
  } else if (imc >= 30 && imc <= 34.9) {
    return console.log("Obesidade grau I")
  } else if (imc >= 35 && imc <= 39.9) {
    return console.log("Obesidade grau II")
  } else {
    return console.log("Obesidade graus III e IV")
  }

}

calculoIMC()

