let quantidadeVendida = 1000;
let custoProduto = 100;
let valorVenda = 150;
let lucro = 0; 

if (custoProduto > 0 && valorVenda > 0) {
    lucro = (quantidadeVendida * (valorVenda - custoProduto)) * 0.80;
    console.log("A empresas terá: " + lucro + " vendendo " + quantidadeVendida + " de produtos.")
} else {
    console.log("O valor não pode ser menor que zero!")
}