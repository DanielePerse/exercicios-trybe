## Agora a prática

Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array nos exercícios:
*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];*

1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

2. Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

4. Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;

6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;


## Bônus

Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:

for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] < array[j]) {
      let position = array[i];
  
      array[i] = array[j];
      *array[j] = position;
    }
  }
}

1. Ordene o array numbers em ordem crescente e imprima seus valores;

2. Ordene o array numbers em ordem decrescente e imprima seus valores;

3. Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo próximo. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor). Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.