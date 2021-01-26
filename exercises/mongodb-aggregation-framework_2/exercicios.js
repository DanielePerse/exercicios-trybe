//exercicio 1
db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { $divide: [
      { $subtract: [ "$$NOW", "$dataNascimento"] },
      { $multiply: [86400000, 365] }
    ]}}
  }},
]);

//exercicio 2
db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { $divide: [
      { $subtract: [ "$$NOW", "$dataNascimento"] },
      { $multiply: [86400000, 365] }
    ]}}
  }},
  { $match: {
    idade: { $gte: 18, $lte: 25 }
  }},
  { $group: {
    _id: "idade",
    total: { $sum: 1 }
  }}
]);

//exercicio 3
db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { $divide: [
      { $subtract: [ "$$NOW", "$dataNascimento"] },
      { $multiply: [86400000, 365] }
    ]}}
  }},
  { $lookup: {
    localField: "clienteId",
    foreignField: "clienteId",
    from: "vendas",
    as: "compras"
  }}
]);

//exercicio 4 Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020
db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { $divide: [
      { $subtract: [ "$$NOW", "$dataNascimento"] },
      { $multiply: [86400000, 365] }
    ]} }
  } },
  { $lookup: {
    localField: "clienteId",
    foreignField: "clienteId",
    from: "vendas",
    as: "compras"
  } },
  { $match: {
    "compras.dataVenda": {
      $gte: ISODate("2019-06-01"),
      $lte: ISODate("2020-03-31")
    }
  } }
]);

//exercicio 5
db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { $divide: [
      { $subtract: [ "$$NOW", "$dataNascimento"] },
      { $multiply: [86400000, 365] }
    ]} }
  } },
  { $lookup: {
    localField: "clienteId",
    foreignField: "clienteId",
    from: "vendas",
    as: "compras"
  } },
  { $match: {
    "compras.dataVenda": {
      $gte: ISODate("2019-06-01"),
      $lte: ISODate("2020-03-31")
    }
  } }
]).itcount();

//Exercício 6
db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { $divide: [
      { $subtract: [ "$$NOW", "$dataNascimento"] },
      { $multiply: [86400000, 365] }
    ]} }
  } },
  { $lookup: {
    localField: "clienteId",
    foreignField: "clienteId",
    from: "vendas",
    as: "compras"
  } },
  { $match: {
    "compras.dataVenda": {
      $gte: ISODate("2019-06-01"),
      $lte: ISODate("2020-03-31")
    }
  } },
  { $addFields: {
    totalCompras: {
      $size: "$compras"
    }
  }},
  { $sort: { "totalCompras": -1 } },
  { $limit: 10 }
]);

//Exercício 7
db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { $divide: [
      { $subtract: [ "$$NOW", "$dataNascimento"] },
      { $multiply: [86400000, 365] }
    ]} }
  } },
  { $lookup: {
    localField: "clienteId",
    foreignField: "clienteId",
    from: "vendas",
    as: "compras"
  } },
  { $match: {
    "compras.dataVenda": {
      $gte: ISODate("2019-06-01"),
      $lte: ISODate("2020-03-31")
    }
  } },
  { $addFields: {
    totalCompras: {
      $size: "$compras"
    }
  }},
  { $sort: { "totalCompras": -1 } },
  { $limit: 10 },
  { $unwind: "$compras" },
  { $addFields: {
    "compras.valorComDesconto": {
      $multiply: ["$compras.valorTotal", 0.9]
    }
  }}
]);

//Exercício 8
db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { $divide: [
      { $subtract: [ "$$NOW", "$dataNascimento"] },
      { $multiply: [86400000, 365] }
    ]} }
  } },
  { $lookup: {
    localField: "clienteId",
    foreignField: "clienteId",
    from: "vendas",
    as: "compras"
  } },
  { $match: {
    "compras.dataVenda": {
      $gte: ISODate("2019-06-01"),
      $lte: ISODate("2020-03-31")
    }
  } },
  { $addFields: {
    totalCompras: {
      $size: "$compras"
    }
  }},
  { $sort: { "totalCompras": -1 } },
  { $limit: 10 },
  { $unwind: "$compras" },
  { $addFields: {
    "compras.valorComDesconto": {
      $multiply: ["$compras.valorTotal", 0.9]
    }
  }},
  { $group: {
    _id: "$endereco.uf",
    totalCompras: { $sum: 1 }
  }},
  { $sort: {
    totalCompras: -1
  }}
]);

//retorno
[
  { _id: 'AC', totalCompras: 20 },
  { _id: 'MT', totalCompras: 20 },
  { _id: 'RO', totalCompras: 19 },
  { _id: 'RN', totalCompras: 19 },
  { _id: 'PA', totalCompras: 19 },
  { _id: 'SC', totalCompras: 18 },
  { _id: 'PB', totalCompras: 17 },
  { _id: 'AP', totalCompras: 17 },
  { _id: 'GO', totalCompras: 17 },
  { _id: 'PE', totalCompras: 17 }
]

//Exercício 9
db.vendas.aggregate([
  { $match: {
    "itens.nome": "QUEIJO PRATO"
  }},
  { $unwind: "$itens" },
  { $match: {
    "itens.nome": "QUEIJO PRATO"
  }},
  { $group: {
    _id: "$clienteId",
    total: { $sum: "$itens.quantidade"}
  }},
  { $sort: {
    total: -1
  }},
  { $limit: 1 },
  { $lookup: {
    localField: "_id",
    foreignField: "clienteId",
    from: "clientes",
    as: "clienteMaisConsumiu"
  }},
  { $unwind: "$clienteMaisConsumiu" },
  { $project: {
    _id: 0,
    nomeCliente: "$clienteMaisConsumiu.nome",
    uf: "$clienteMaisConsumiu.endereco.uf",
    totalConsumido: "$total"
  }}
]);

//Exercício 10
db.vendas.aggregate([
  { $match: {
    dataVenda: {
      $gte: ISODate("2020-03-01"),
      $lte: ISODate("2020-03-31")
    },
    status: "EM SEPARACAO"
  }},
  { $addFields: {
    dataEntregaPrevista: {
      $add: ["$dataVenda", 3 * 24 * 60 * 60000]
    }
  }},
  { $project: {
    _id: 0,
    clienteId: 1,
    dataVenda: 1,
    dataEntregaPrevista: 1
  }}
]);

//Exercício 11: Calcule a diferença absoluta em dias entre a data da primeira entrega prevista e a última, considerando o pipeline do exercício 10.