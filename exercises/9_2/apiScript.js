const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data => document.getElementById('jokeContainer').innerHTML = data.joke);
};

window.onload = () => fetchJoke();