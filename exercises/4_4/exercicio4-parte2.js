//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
//Valor esperado no retorno da função: Fernanda.
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function array(nomes) {
    let maiorCaracter = 0;
    let resultado = 0;
    for (let index in nomes) {
        if (nomes[index].length > maiorCaracter) {
            maiorCaracter = nomes[index].length;
            resultado = nomes[index];
        }
    }
    return resultado;
}
console.log(array(nomes));