let salarioBruto = 2300.50;
let salarioLiquido = 0;
let salarioDescontoInss = 0;
let aliquotaIr = 0;

if (salarioBruto > 0 && salarioBruto <= 1556.94) {
    salarioDescontoInss = (salarioBruto * 92)/100;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioDescontoInss = (salarioBruto * 91)/100;
} else if (salarioBruto >= 5189.82) {
    salarioDescontoInss = (salarioBruto -570,88);
} else {
    console.log("Mensagem de erro: salário não pode ser menor que zero!")
}

if (salarioDescontoInss > 0 && salarioDescontoInss <= 1903.98) {
    aliquotaIr = 0;
    salarioLiquido = salarioDescontoInss - aliquotaIr
    console.log("Salário líquido é = R$ " + salarioLiquido);
} else if (salarioDescontoInss >= 1903.99 && salarioDescontoInss <= 2826.65) {
    aliquotaIr = ((7.50 * salarioDescontoInss)/100)-142.80;
    salarioLiquido = salarioDescontoInss - aliquotaIr
    console.log("Salário líquido é = R$ " + salarioLiquido); 
} else if (salarioDescontoInss >= 2826.66 && salarioDescontoInss <= 3751.05) {
    aliquotaIr = ((15.00 * salarioDescontoInss)/100)-354.80;
    salarioLiquido = salarioDescontoInss - aliquotaIr
    console.log("Salário líquido é = R$ " + salarioLiquido); 
} else if (salarioDescontoInss >= 3751.06 && salarioDescontoInss <= 4664.68) {
    aliquotaIr = ((22.50 * salarioDescontoInss)/100)-613.13;
    salarioLiquido = salarioDescontoInss - aliquotaIr
    console.log("Salário líquido é = R$ " + salarioLiquido); 
} else if (salarioDescontoInss >= 4.664,68) {
    aliquotaIr = ((27.50 * salarioDescontoInss)/100)-869.36;
    salarioLiquido = salarioDescontoInss - aliquotaIr
    console.log("Salário líquido é = R$ " + salarioLiquido); 
} else {
    console.log("Mensagem de erro! O valor não pode ser negativo!")
}