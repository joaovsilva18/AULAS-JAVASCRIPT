const resultSpan = document.querySelector("#result")
const inputPeso = document.querySelector("#weight")
const inputAltura = document.querySelector("#height")
const inputDia = document.querySelector("#Day")
const inputMes = document.querySelector("#Mounth")
const inputAno = document.querySelector("#Year")
const inputNome = document.querySelector("#name")

const user = new Object();


function formComplet() {
    user.name = (inputNome.value);
    console.log(user.name);
    user.birthDate = new Date(inputAno.value, inputMes.value - 1, inputDia.value)
    console.log(user.birthDate);
    user.weight = parseInt(inputPeso.value)
    console.log(user.weight)
    user.height = parseFloat(inputAltura.value)
    console.log(user.height)
    user.gender = document.querySelector("#gender").value
    console.log(user.gender)
    console.log(user)
}
function vazio() {
    console.log("cheguei aqui")
    try {
        if (inputNome.value == "" || inputDia.value == "" || inputMes.value == "" || inputAno.value == "" || inputPeso.value == "") {
            throw "prencha os campos corretamente"
        }
        return true
    } catch (e) {
        resultSpan.innerHTML = `o erro e esse: ${e}`;
        return false
    }
}


function pesoealturasaonumeros() {
    //console.log("teste")
    try {
        if (isNaN(inputPeso.value) || isNaN(inputAltura.value)) {
            throw "os valores nao sao numeros"
        }
        return true
    } catch (e) {
        resultSpan.innerHTML = `o erro e esse: ${e}`;
        return false
    }
}
function verificasetodosdadosforampreenchidos() {

    return true;
}
function dataEstaOk() {
    const resultadoAno = AnoEstaOk()
    const resultadoMes = MesEstaOk()

    try {
        if (resultadoAno == true && resultadoMes == true) {
            return true;
        }
        if (resultadoAno != true) {
            throw resultadoAno
        }
        if (resultadoMes != true) {
            throw resultadoMes
        }

    } catch (e) {
        resultSpan.innerHTML = `o erro e esse: ${e}`;
        return false
    }
}

function AnoEstaOk() {
    const ano = parseInt(inputAno.value)

    if (ano > 2022 || ano < 1) {
        return "ano esta errado"
    }
    return true
}
function MesEstaOk() {
    const Mes = parseInt(inputMes.value)

    if (Mes > 12 || Mes < 1) {
        return "mes esta errado"
    }
    return true
}
function chamadapelobotao() {

    if (verificasetodosdadosforampreenchidos() && pesoealturasaonumeros() && dataEstaOk() && vazio()) {
        resultSpan.innerHTML = "tudo esta ok"
        formComplet()
    }
    console.log("final")
}



