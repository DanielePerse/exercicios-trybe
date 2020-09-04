const service = require('./exercicio1');

test('Exercicio 1: Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
  service.aleatoryNumbers = jest.fn().mockReturnValue(10);

  expect(service.aleatoryNumbers()).toBe(10);
  expect(service.aleatoryNumbers).toHaveBeenCalled();
  expect(service.aleatoryNumbers).toHaveBeenCalledTimes(1);
});


test('Exercicio 2: Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
  service.aleatoryNumbers = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(service.aleatoryNumbers(30, 2)).toBe(15);
  expect(service.aleatoryNumbers).toHaveBeenCalled();
  expect(service.aleatoryNumbers).toHaveBeenCalledTimes(1);
});