var estados = ["Selecione seu Estado", "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]

function criarListaDeEstados(estados) {
    for (let i = 0; i < estados.length; i += 1) {
        var option = document.createElement("option");
        option.value = i;
        option.text = estados[i];
        document.getElementById("estado").add(option);
    }
}


function validarDados(event) {
    const arrayDataInicio = document.querySelector("#dataInicio").value.split("/");
    if((arrayDataInicio.length !== 3) || (arrayDataInicio[0] <= 0 || arrayDataInicio[0] > 31) || (arrayDataInicio[1] <= 0 || arrayDataInicio[1] > 12) || (arrayDataInicio[2] < 0)) {
        event.preventDefault();
        alert("data inválida, por favor, informar no formato DD/MM/AAAA");
    }
}

window.onload = function () {
    criarListaDeEstados(estados);

    const botao = document.getElementById('enviar');
    botao.addEventListener('click', validarDados);

}
;