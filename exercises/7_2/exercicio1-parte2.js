const lesson1 = {
materia: 'Matemática',
numeroEstudantes: 20,
professor: 'Maria Clara',
turno: 'manhã',
};

const lesson2 = {
materia: 'História',
numeroEstudantes: 20,
professor: 'Carlos',
};

const lesson3 = {
materia: 'Matemática',
numeroEstudantes: 10,
professor: 'Maria Clara',
turno: 'noite',
};


const novoTurno = (objeto, chave, valor) => {
  objeto[chave] = valor;
  console.log(objeto);
}
novoTurno(lesson2, "turno", "manhã");

const listarKeys = (objeto) => {
  console.log(Object.keys(objeto));
}
listarKeys(lesson1);

const tamanhoObjeto = (objeto) => {
  console.log(Object.keys(objeto).length);
}
tamanhoObjeto(lesson1);

const valoresObjeto = (objeto) => {
  console.log(Object.values(objeto));
}
valoresObjeto(lesson3);

const allLessons = Object.assign({lesson1, lesson2, lesson3});
console.log(Object.assign(lesson1, lesson2, lesson3));

//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
