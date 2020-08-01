var estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]

function criarListaDeEstados(estados) {
    for (let i = 0; i < estados.length; i += 1) {
        var option = document.createElement("option");
        option.value = i;
        option.text = estados[i];
        document.getElementById("estado").add(option);
    }
}
 

window.onload = function () {
    criarListaDeEstados(estados);
}
;