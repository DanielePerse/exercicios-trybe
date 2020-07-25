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