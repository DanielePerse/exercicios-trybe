const API_URL = 'https://icanhazdadjoke.com/';

/* EXERCICIO 1
  const fetchJoke = () => {
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerHTML = data.joke);
};*/

// EXERCICIO 2
const fetchPromise = () => {

  const newPromise = new Promise(function(resolve, reject) {

    //produzir array com 10 números aleatórios de 1 até 50;
    let array = [];
    for (let i = 0; i < 10; i += 1) {
      array.push(Math.floor(Math.random() * 51));
    }

    //elevar numéros do array ao quadrado
    const quadradoDoArray = array.map((currentValue) => currentValue * currentValue);

    //somar todos os números
    const somaArray = quadradoDoArray.reduce((acc, currentValue) => acc + currentValue);
    console.log(somaArray);

    //se <8000 resolve, se >= 8000 reject
    if (somaArray < 8000) {
      resolve(somaArray);
    } else {
      reject();
    }
    
  });

  newPromise
    //.then((response) => console.log("resultado dentro de 8000"))
    .then(somaArray => [2, 3, 5, 10].map(array => somaArray / array))
    .then(newArray => console.log(newArray.reduce((acc, currentValue) => acc + currentValue)))
    .catch((error) => console.log("É mais de oito mil! Essa promise deve estar quebrada!"));

}
fetchPromise();


// window.onload = () => fetchJoke();