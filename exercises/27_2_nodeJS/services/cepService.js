const cepModel = require('../models/cepModel');
const apiService = require('../services/apiService');

const isValid = (cep) => cep && cep.match(/^\d{5}-?\d{3}$/);

const lookup = (cep) => {
  if(!isValid(cep)) return { err: { message: 'CEP inválido', code: 400 } };
  // o cep é valido? não - mensagem de erro / sim - segue linha 10

  const cepData = await cepModel.findCEP(cep);
  if (cepData) return cepData;
  // o cep foi encontrado no banco? se sim, ele é mostrado na tela / se não, ele segue para linha 14

  const cepFound = await apiService.findCEP(cep);
  if (cepFound.length === 0) return { err: { message: 'CEP não encontrado', code: 404 } };
  await cepModel.saveCEP(cepFound);
  return cepFound;
  // cep é consultado na api. Se cep não existe na api retrona erro / se cep existe, ele é salvo no banco
};

module.exports = { lookup };

//  Regras de negócio
// Um CEP válido é composto por 8 dígitos, com um hífen opcional separando os três últimos dígitos. Por exemplo, 30310-030 e 30310030 são CEPs válidos. 303100308 e AB897453 não são.
// API só é consultada se o cep não existir no banco. Se o cep existir, armazena no banco sem o hífen!
// Se for digitado um CEP com formato inválido, deve ser retornado um JSON com o campo mensagem com o texto mensagem CEP inválido.
// Se o CEP não for encontrado, deve ser retornado um JSON com o campo mensagem com o texto CEP não encontrado.