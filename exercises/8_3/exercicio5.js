    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
const separador = names.toString().split('');
 
const contadorA = separador.reduce((acc, currentValue) => {
  if (currentValue === 'a'|| currentValue === 'A') {
    acc += 1;
  }
  return acc;
}, 0)
return contadorA;
}


assert.deepEqual(containsA(), 20);

