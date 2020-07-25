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
