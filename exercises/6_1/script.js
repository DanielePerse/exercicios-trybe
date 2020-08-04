var estados = ["Selecione seu Estado", "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]

function criarListaDeEstados(estados) {
    for (let i = 0; i < estados.length; i += 1) {
        var option = document.createElement("option");
        option.value = i;
        option.text = estados[i];
        document.getElementById("estado").add(option);
    }
}

function validarData() {
    const arrayDataInicio = document.querySelector("#dataInicio").value.split("/");
    if((arrayDataInicio.length !== 3) || (arrayDataInicio[0] <= 0 || arrayDataInicio[0] > 31) || (arrayDataInicio[1] <= 0 || arrayDataInicio[1] > 12) || (arrayDataInicio[2] < 0)) {
        alert("data inválida, por favor, informar no formato DD/MM/AAAA");
    }
}

function validarCpf() {
    const cpf = document.querySelector("#cpf").value;
    if (cpf.length !== 11) {
        alert("Por favor, digitar somente números.");
    }
}


function validarDados(event) { 
    event.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const eMail = document.getElementById("e-mail").value;
    const cpf = document.getElementById("cpf").value;
    validarCpf (cpf);
    const endereco = document.getElementById("endereco").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    const resumoCurriculo = document.getElementById("resumo").value;
    const cargo = document.getElementById("cargo").value;
    const descricaoCargo = document.getElementById("descricaoCargo").value;
    const dataInicio = document.getElementById("dataInicio").value;
    validarData (dataInicio);

    

    const dadosGerais = [nome, eMail, cpf, endereco, cidade, estado, resumoCurriculo, cargo, descricaoCargo, dataInicio];

    for (let index = 0; index < dadosGerais.length; index += 1) {
        const dadosConsolidados = document.getElementById("dadosConsolidados");
        const novoElemento = document.createElement("p");
        novoElemento.innerHTML = dadosGerais[index];
        dadosConsolidados.appendChild(novoElemento);
    }    
}

window.onload = function () {
    criarListaDeEstados(estados);

    const botao = document.getElementById('enviar');
    botao.addEventListener('submit', validarDados);

}
;