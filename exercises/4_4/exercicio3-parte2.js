//crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3];.
//Valor esperado no retorno da função: 6.
let inteiros = [2, 4, 6, 7, 10, 0, -3]

function array(inteiros) {
    let menor = 100;
    let resultado = 0;
    for (let index in inteiros) {
        if (inteiros[index] < menor) {
            menor = inteiros[index];
            resultado = index;
        }
    }
    return resultado;
}
console.log(array(inteiros));