const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert(sum(4, 5) === 9, '4 mais 5 é 9');

assert(sum(0, 0) === 0, 'A soma esperada é zero');

assert.throws(
  function (){
    sum(4, '5')
  }
)

assert.throws(
  function (){
    sum(4, '5')
  }, /^Error: parameters must be numbers$/);

  //linha 24 foi usado regex no gabarito, conforme esclarecido na aula ao vivo, ele é listado desa maneira
  // /^ iniciar com esses caracteres e $/ terminar com esses. Pesquisar mais sobre.
  // mas poderia lançar apenas /Error: parameters must be numbers/