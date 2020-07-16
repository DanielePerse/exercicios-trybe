//Pegue cada um dos exercícios da primeira parte das nossas aulas de JavaScript e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções. 

//exercicio 2:

function maiorQue(a, b) {
    if (a > b) {
        return a + " é maior que " + b;
    } else {
        return b + " é maior que " + a;
    }
}

console.log(maiorQue(10, 6))