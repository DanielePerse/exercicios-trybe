const myFizzBuzz = require('./exercicio4');

describe('verifique se o retorno é o esperado', () => {
  it('número divisível por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('número divisível por 3', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });

  it('número divisível por 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  it('número que não é divisível por 3 ou 5', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });

  it('parâmetro que não é um número', () => {
    expect(myFizzBuzz('teste')).toBeFalsy();
  });
});