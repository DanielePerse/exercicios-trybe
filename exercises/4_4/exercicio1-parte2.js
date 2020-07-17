//ter um for para ler cada letra de trás pra frente e comparar com a palavra original. Se a posição das letras continuarem iguais, então true, se não false.

let string = "";

function palindromo(string) {
    let resultado = "";
    for (let i = string.length - 1; i >= 0; i -= 1) {
        resultado += string[i];
    }

    if (resultado === string) {
        return true;
    } else {
        return false;
    }
}

console.log(palindromo("desenvolvimento"));