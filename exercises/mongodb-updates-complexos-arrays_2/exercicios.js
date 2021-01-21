//Exercicio 1
db.movies.find({
  category: {
    $all: ["action", "adventure"]
  }
});

//Exercicio 2
db.movies.find({
  $and: [
    {category: {
      $all: ["action"]
    }},
    {imdbRating: { $gt: 7 }}
  ]
});

//Exercicio 3
db.movies.updateMany(
  {title: "Batman"},
  {$push: {
    ratings: {
      $each: [85, 100, 102, 105]
    }
  }}
);

//Exercicio 4
db.movies.updateMany(
  {title: "Godzilla"},
  {$push: {
    ratings: {
      $each: [78, 52, 95, 102]
    }
  }}
);

//Exercicio 5
db.movies.updateMany(
  {title: "Home Alone"},
  {$push: {
    ratings: {
      $each: [200, 99, 65]
    }
  }}
);

//Exercicio 6
db.movies.find({
  ratings: {$elemMatch: {$gt: 103}}
},{
  title: 1, ratings: 1, _id: 0
});

//Exercicio 7
db.movies.find({
  ratings: {$elemMatch: {$gte: 100, $lt: 105}}
},{
  title: 1, ratings: 1, _id: 0
});

//Exercicio 8
db.movies.find({
  ratings: {$elemMatch: {$gte: 64, $lt: 105, $mod: [9, 0]}}
},{
  title: 1, ratings: 1, _id: 0
});

//Exercicio 9
db.movies.find({
  ratings: {$elemMatch: {$gt: 103}},
  category:{$elemMatch: {$eq: "adventure"}}
},{
  title: 1, ratings: 1, _id: 0, category: 1
});

//Exercicio 10
db.movies.find({ category: { $size: 2}}, {_id: 0, title: 1});

//Exercicio 11
db.movies.find({ ratings: { $size: 4}}, {_id: 0, title: 1});

//Exercicio 12


//Exercicio 13


//Exercicio 14


//Exercicio 15