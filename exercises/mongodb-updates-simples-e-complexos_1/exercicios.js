db.movies.insertMany([{
  "title": "Batman",
  "category": [ "action", "adventure" ],
  "imdbRating": 7.6,
  "budget": 35
},
{
  "title": "Godzilla",
  "category": [ "action", "adventure", "sci-fi" ],
  "imdbRating": 6.6
},
{
  "title": "Home Alone",
  "category": [ "family", "comedy" ],
  "imdbRating": 7.4
}]);

// Exercício 1
db.movies.updateOne({ title: "Batman" }, { $set: { imdbRating: 7.7 }});

// Exercício 2
db.movies.updateOne({ title: "Godzilla" }, { $set: { budget: 1 }});

// Exercício 3
db.movies.updateOne({ title: "Home Alone" }, { $set: { budget: 15, imdbRating: 5.5 }});

// Exercício 4
db.movies.updateOne({ title: "Batman" }, { $inc: { imdbRating: 2 }});

// Exercício 5
db.movies.updateOne({ title: "Home Alone" }, { $inc: { budget: 5 }});

// Exercício 6
db.movies.updateOne({ title: "Batman" }, { $mul: { imdbRating: 4 }});

// Exercício 7
db.movies.updateOne({ title: "Batman" }, { $rename: { budget: "estimatedBudget" }});

// Exercício 8
db.movies.updateOne({ title: "Home Alone" }, { $min: { budget: 5 }});

// Exercício 9
db.movies.updateOne({ title: "Godzilla" }, { $max: { imdbRating: 8.6 }, $set: { "category.1": "thriller" } });

// Exercício 10
db.movies.updateOne({ title: "Home Alone" }, { $currentDate: { "lastUpdated": { $type: "timestamp" } }});

// Exercício 11
db.movies.updateMany({}, { $set: { "sequels": 0 } });

// Exercício 12
db.movies.updateMany({}, { $unset: { budget: "", estimatedBudget: "" } });

// Exercício 13
db.movies.updateMany({ title: { $in: ["Batman", "Home Alone" ]}}, { $max: { imdbRating: 17 }});