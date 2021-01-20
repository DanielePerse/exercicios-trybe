//exercicio 1
db.movies.updateOne({ title: "Batman"}, {$push: { category: "superhero"}});

//exercicio 2
db.movies.updateOne({ title: "Batman"}, {$push: { category: { $each: [ "villain", "comic-based" ]}}});

//exercicio 3
db.movies.updateOne({ title: "Batman"}, {$pop: { category: -1 }});

//exercicio 4
db.movies.updateOne({ title: "Batman"}, {$pop: { category: -1 }});

//exercicio 5
db.movies.updateOne({ title: "Batman"}, {$pop: { category: 1 }});

//exercicio 6
db.movies.updateOne({ title: "Batman"}, {$addToSet: { category: "action" }});

//exercicio 7
db.movies.updateMany({ title: {$in: ["Batman", "Home Alone"]}}, {$push: { "category": "90's" }});

//exercicio 8
db.movies.updateOne({ title: "Home Alone" }, {$push: { cast: { $each: [
  {
    "actor": "Macaulay Culkin",
    "character": "Kevin"
  },
  {
    "actor": "Joe Pesci",
    "character": "Harry"
  },
  {
    "actor": "Daniel Stern"
  }
]}}});

//exercicio 9 - Adicione o campo character com o valor Marv ao array de cast em que o campo actor seja igual a 
db.movies.updateOne({ $and: [
  {title: "Home Alone" },
  { "cast.actor": "Daniel Stern"}
]},
{$set: { "cast.$.character": "Marv" }});

//exercicio 10
db.movies.updateOne({ title: "Batman" }, {$push: { cast: { $each: [
  {
    "character": "Batman"
  },
  {
    "character": "Alfred"
  },
  {
    "character": "Coringa"
  }
]}}});


//exercicio 11
db.movies.updateOne({ title: "Batman", "cast.character": "Batman" }, {
  $push: { "cast.$.actor": "Christian Bale" }
});
db.movies.updateOne({ title: "Batman", "cast.character": "Alfred" }, {
  $push: { "cast.$.actor": "Michael Caine" }
});
db.movies.updateOne({ title: "Batman", "cast.character": "Coringa" }, {
  $push: { "cast.$.actor": "Heath Ledger" }
});


//exercicio 12
db.movies.updateMany({ title: "Batman", "cast.character": "Batman" }, {
  $push: {
    "cast.$.actor": {
      $each: [ "Michael Keaton" , "Val Kilmer", "George Clooney" ],
      $sort: 1
    }
  }
});
