//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3];.
//Valor esperado no retorno da função: 2.
let inteiros = [2, 3, 2, 5, 8, 2, 3];

function array(inteiros) {
    let repeat = 0;
    for (let index in inteiros) {
        for (let index2 in inteiros) {
            if (inteiros[index] === inteiros[index2]) {
                repeat += 1;
                //rever a lógica
            }
        }
    }
}