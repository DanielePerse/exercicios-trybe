const sum = require('./exercicio1');

describe('teste se', () => {
  it('o retorno de sum(4, 5) é 9', () => {
    expect(sum(4,5)).toBe(9);
  });

  it('o retorno de sum(0, 0) é 0', () => {
    expect(sum(0,0)).toBe(0);
  });

  it('a função sum lança um erro quando os parametros são 4 e "5"', () => {
    expect( () => {
      sum(4,'5');
    }).toThrow();
  });

  it('a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect( () => {
      sum(4, '5');
    }).toThrow('parameters must be numbers');
  })
})
