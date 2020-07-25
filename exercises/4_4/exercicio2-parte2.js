//solução escrita: ter uma função que receba o array como parametro. Percorrer o array. Comparar os itens do array e descobrir o maior. Ir guardando os valores maiores. No fim, imprimir o índice do número maior.

let arrayInteiros = [2, 33, 6, 7, 10, 1];

function array(inteiros) {
    let maior = 0;
    let resultado = 0;
    for (let index in inteiros) {
        if (inteiros[index] > maior) {
            maior = inteiros[index];
            resultado = index;
        }
    }
    return resultado;
}

console.log(array(arrayInteiros));
