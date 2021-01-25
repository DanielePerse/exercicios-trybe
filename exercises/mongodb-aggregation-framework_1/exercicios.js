//exercicio 1
db.clientes.aggregate([
  { $match: { sexo: "MASCULINO" }}
]);

//exercicio 2
db.clientes.aggregate([
  { $match: {
    $and: [
      { sexo: "FEMININO" },
      { dataNascimento: {
        $gte: ISODate("1995-01-01"),
        $lte: ISODate("2005-12-31")
      }
      }
    ]
  }}
]);

//exercicio 3
db.clientes.aggregate([
  { $match: {
    $and: [
      { sexo: "FEMININO" },
      { dataNascimento: {
        $gte: ISODate("1995-01-01"),
        $lte: ISODate("2005-12-31")
      }
      }
    ]
  }},
  { $limit: 5 }
]);

//exercicio 4
db.clientes.aggregate([
  { $match: {
    "endereco.uf": "SC"
  }},
  { $group: {
    _id: "SC",
    total: { $sum: 1}
  }}
]);
//retorno
[ { _id: 'SC', total: 25 } ]

//exercicio 5
db.clientes.aggregate([
  { $group: {
    _id: "$sexo",
    total: { $sum: 1}
  }}
]);
//retorno
[
  { _id: 'FEMININO', total: 155 },
  { _id: 'MASCULINO', total: 176 },
  { _id: 'NÃO DEFINIDO', total: 168 }
]

//exercicio 6
db.clientes.aggregate([
  { $group: {
    _id: {
      sexo: "$sexo",
      uf: "$endereco.uf"
    },
    total: { $sum: 1}
  }}
]);
//retorno
[
  { _id: { sexo: 'FEMININO', uf: 'RR' }, total: 13 },
  { _id: { sexo: 'NÃO DEFINIDO', uf: 'SC' }, total: 8 },
  { _id: { sexo: 'FEMININO', uf: 'AL' }, total: 7 },
  { _id: { sexo: 'FEMININO', uf: 'AP' }, total: 3 },
  { _id: { sexo: 'FEMININO', uf: 'SC' }, total: 10 },
  { _id: { sexo: 'FEMININO', uf: 'TO' }, total: 7 },
  { _id: { sexo: 'NÃO DEFINIDO', uf: 'RS' }, total: 6 },
  { _id: { sexo: 'MASCULINO', uf: 'AC' }, total: 5 },
  { _id: { sexo: 'FEMININO', uf: 'DF' }, total: 9 },
  { _id: { sexo: 'NÃO DEFINIDO', uf: 'MA' }, total: 5 },
  { _id: { sexo: 'MASCULINO', uf: 'PR' }, total: 7 },
  { _id: { sexo: 'MASCULINO', uf: 'RJ' }, total: 8 },
  { _id: { sexo: 'FEMININO', uf: 'BA' }, total: 8 },
  { _id: { sexo: 'MASCULINO', uf: 'SE' }, total: 8 },
  { _id: { sexo: 'FEMININO', uf: 'AM' }, total: 5 },
  { _id: { sexo: 'MASCULINO', uf: 'RN' }, total: 7 },
  { _id: { sexo: 'MASCULINO', uf: 'DF' }, total: 5 },
  { _id: { sexo: 'NÃO DEFINIDO', uf: 'DF' }, total: 6 },
  { _id: { sexo: 'NÃO DEFINIDO', uf: 'PB' }, total: 3 },
  { _id: { sexo: 'MASCULINO', uf: 'PA' }, total: 8 }
]

//exercicio 7
db.clientes.aggregate([
  { $group: {
    _id: {
      sexo: "$sexo",
      uf: "$endereco.uf"
    },
    total: { $sum: 1}
  }},
  { $project: {
    _id: 0,
    "estado": "$_id.uf",
    "sexo": "$_id.sexo",
    "total": 1
  }}
]);
//retorno
[
  { total: 13, estado: 'RR', sexo: 'FEMININO' },
  { total: 8, estado: 'SC', sexo: 'NÃO DEFINIDO' },
  { total: 7, estado: 'AL', sexo: 'FEMININO' },
  { total: 3, estado: 'AP', sexo: 'FEMININO' },
  { total: 10, estado: 'SC', sexo: 'FEMININO' },
  { total: 7, estado: 'TO', sexo: 'FEMININO' },
  { total: 6, estado: 'RS', sexo: 'NÃO DEFINIDO' },
  { total: 5, estado: 'AC', sexo: 'MASCULINO' },
  { total: 9, estado: 'DF', sexo: 'FEMININO' },
  { total: 5, estado: 'MA', sexo: 'NÃO DEFINIDO' },
  { total: 7, estado: 'PR', sexo: 'MASCULINO' },
  { total: 8, estado: 'RJ', sexo: 'MASCULINO' },
  { total: 8, estado: 'BA', sexo: 'FEMININO' },
  { total: 8, estado: 'SE', sexo: 'MASCULINO' },
  { total: 5, estado: 'AM', sexo: 'FEMININO' },
  { total: 7, estado: 'RN', sexo: 'MASCULINO' },
  { total: 5, estado: 'DF', sexo: 'MASCULINO' },
  { total: 6, estado: 'DF', sexo: 'NÃO DEFINIDO' },
  { total: 3, estado: 'PB', sexo: 'NÃO DEFINIDO' },
  { total: 8, estado: 'PA', sexo: 'MASCULINO' }
]

//exercicio 8
//fiz uma query para descobrir o nome dos status e no meu filtro usarei somente: EM SEPARACAO ou ENTREGUE
db.vendas.aggregate([
  { $group: {
    _id: "$status",
    total: { $sum: 1}
  }}
]);

// na query filtro as vendas com status que quero
// agrupo pelo valorTotal: valorTotal
// ordeno esse total em decrescente e limito em 5

db.vendas.aggregate([
  { $match: {
    status: { $in: ["EM SEPARACAO", "ENTREGUE"] }
  }},
  { $group: {
    _id: "$clienteId",
    total: { $sum: "$valorTotal"}
  }},
  { $sort: { total: -1 }},
  { $limit: 5 }
]);
//retorno
[
  { _id: 244, total: 135395.03 },
  { _id: 430, total: 114029.13 },
  { _id: 66, total: 109752.72 },
  { _id: 250, total: 109611.28 },
  { _id: 330, total: 108588.33 }
]

//exercicio 9
db.vendas.aggregate([
  { $match: {
    dataVenda: {
      $gte: ISODate("2019-01-01"),
      $lte: ISODate("2019-12-31")
    }
  }},
  { $group: {
    _id: "$clienteId",
    total: { $sum: "$valorTotal"}
  }},
  { $sort: { total: -1 } },
  { $limit: 10 }
]);
//retorno
[
  { _id: 189, total: 114731.88 },
  { _id: 169, total: 114495.23999999999 },
  { _id: 367, total: 113458.3 },
  { _id: 151, total: 109639.03 },
  { _id: 368, total: 109431.73999999999 },
  { _id: 460, total: 106441.92 },
  { _id: 102, total: 104589.51 },
  { _id: 459, total: 102661.33 },
  { _id: 481, total: 102373.05 },
  { _id: 489, total: 97751.54000000001 }
]

//exercicio 10
db.vendas.aggregate([
  { $group: {
    _id: "$clienteId",
    totalCompras: { $sum: 1}
  }},
  { $match: {
    totalCompras: { $gt: 5 }
  }},
  { $group: {
    _id: null,
    clientes: { $sum: 1 }
  }},
  { $project: { _id: 0 }}
]);
//retorno sem o project
[ { _id: null, clientes: 459 } ]
//retorno com o project
[ { clientes: 459 } ]

//exercicio 11
db.vendas.aggregate([
  { $match: {
    dataVenda: {
      $gte: ISODate("2020-01-01"),
      $lte: ISODate("2020-03-31")
    }
  }},
  { $group: {
    _id: "$clienteId",
    totalCompras: { $sum: 1 }
  }},
  { $match: {
    totalCompras: { $lt: 3 }
  }},
  { $group: {
    _id: null,
    clientes: { $sum: 1 }
  }},
  { $project: {
    _id: 0
  }}
]);

//exercicio 12 - Descubra quais as três uf s que mais compraram no ano de 2020 . Retorne os documentos no seguinte formato:

{
  "totalVendas": 10,
  "uf": "SP"
}


//exercicio 13 - Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019 . Ordene os resultados pelo nome da uf . Retorne os documentos no seguinte formato:

{
  "_id": "MG",
  "mediaVendas": 9407.129225352113,
  "totalVendas": 142
}