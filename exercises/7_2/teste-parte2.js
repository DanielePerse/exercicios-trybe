//object.assign
const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
//console.log(person)

//exemplo 2:
//Como pôde ver acima, o clone é exatamente igual ao objeto person, e se você mudar qualquer propriedade nele, observará que o objeto person também será modificado. Isso ocorre devido ao fato de que o objeto retornado pelo método Object.assign é o próprio objeto destino, que foi alterado adicionando as novas propriedades.

const person2 = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person, lastName);

console.log(clone); 
console.log(person2); 