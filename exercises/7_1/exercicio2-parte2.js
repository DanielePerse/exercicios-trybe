let arrowFunction = phrase => {
  const array = phrase.split(' ');
  let maior = 0;
  let result = '';

  for (let i = 0; i < array.length; i +=1) {
    if (array[i].length > maior) {
      maior = array[i].length;
      result = array[i];
    }
  }
  return result;
}

console.log(arrowFunction("Antonio foi no banheiro e não sabemos o que aconteceu"));