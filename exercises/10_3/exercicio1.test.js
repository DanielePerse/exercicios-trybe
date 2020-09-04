const service = require('./exercicio1');

test('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
  service.aleatoryNumbers = jest.fn().mockReturnValue(10);

  expect(service.aleatoryNumbers()).toBe(10);
  expect(service.aleatoryNumbers).toHaveBeenCalled();
  expect(service.aleatoryNumbers).toHaveBeenCalledTimes(1);
})