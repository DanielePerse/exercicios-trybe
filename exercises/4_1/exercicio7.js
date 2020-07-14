let nota = 6;
let porcentagem = (nota * 0.1) * 100;

if (porcentagem >= 90 && porcentagem <= 100) {
    console.log(porcentagem + "%" + " , portanto conceito A!");
} else if (porcentagem >= 80 && porcentagem < 90) {
    console.log(porcentagem + "%" + " , portanto conceito B!");
} else if (porcentagem >= 70 && porcentagem < 80) {
    console.log(porcentagem + "%" + " , portanto conceito C!");
} else if (porcentagem >= 60 && porcentagem < 70) {
    console.log(porcentagem + "%" + " , portanto conceito D!");
} else if (porcentagem >= 50 && porcentagem < 60) {
    console.log(porcentagem + "%" + " , portanto conceito E!");
} else if (porcentagem > 0.1 && porcentagem < 50) {
    console.log(porcentagem + "%" + " , portanto conceito F!")
} else {
    console.log("ERRO! A porcentagem deve estar entre 0.1 e 100.");
}