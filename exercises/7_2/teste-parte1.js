// método 1 para adicionar outro item ao objeto.
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
customer.lastname = 'Faria'; 
//console.log(customer);

// método 2 para adicionar outro item ao objeto.
const customer2 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
customer2['lastname'] = 'Faria';
//console.log(customer2);

//adicionar mais de uma nova propriedades ao objeto
const customer3 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer3[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer3.firstName} ${customer3.lastName}`;
customer3[newKey] = fullName;
//console.log(customer3);

//object.keys 1
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

//console.log(Object.keys(student1);

//Object.keys 2
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(i in arrayOfSkills){
    console.log(`${arrayOfSkills[i]}, Nível: ${student[arrayOfSkills[i]]}`);
  }
};

//console.log('Estudante 1');
//listSkills(student1);

//console.log('Estudante 2');
//listSkills(student2);

//Object.value 1
const studen = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

//console.log(Object.values(student));

//object.values

const student5 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsWithValues = (student5) => Object.values(student5);

//console.log(listSkillsWithValues(student5));

//Object.entries
const paises = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};

const pairKeyValue = Object.entries(paises);

for(i in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[i][0]);
  console.log('Capital:', pairKeyValue[i][1]);
};
//console.log(pairKeyValue);