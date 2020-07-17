//2. [x] Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Valor esperado no retorno da função: 4 (número 10 - índice 4).
//solução escrita: ter uma função que receba o array como parametro. Percorrer o array. Comparar os itens do array e descobrir o maior. Ir guardando os valores maiores. No fim, imprimir o índice do número maior.

let arrayInteiros = [2, 33, 6, 7, 10, 1];

function indiceMaior(arrayInteiros) {
    let resultado = 0;
    let comparacao = 0
    for (let index = 0; index < arrayInteiros.length; index += 1) {
        if (arrayInteiros[index] > comparacao) {
            comparacao = arrayInteiros[index];
            resultado = index;
        }
    }
    return resultado;
}

console.log(indiceMaior(arrayInteiros));
