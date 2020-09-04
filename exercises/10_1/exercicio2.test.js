const myRemove = require('./exercicio2');

describe('verifique se', () => {
  it('a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual(
      expect.not.arrayContaining([1, 2, 3, 4]),
    );
  });

  it('o array passado por parâmetro não sofreu alterações', () => {
    expect(myRemove([1, 2, 3, 4])).toEqual(
      expect.arrayContaining([1, 2, 3, 4]),
    );
  })

  it('a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})