const resultSpan = document.querySelector("#result")
const inputPeso = document.querySelector("#weight")
const inputAltura = document.querySelector("#height")
const inputDia = document.querySelector("#Day")
const inputMes = document.querySelector("#Mounth")
const inputAno = document.querySelector("#Year")
const user = {
    name: "",
    birthDate: "",
    weight: "",
    height: "",
    gender: ""
};
function formComplet() {
    user.name = document.querySelector("#name").value;
    console.log(user.name);
    user.birthDate = new Date(inputAno.value,inputMes.value - 1,inputDia.value)
    console.log(user.birthDate);
    user.weight = parseInt(inputPeso.value)
    console.log(user.weight)
    user.height = parseFloat(inputAltura.value)
    console.log(user.height)
    user.gender = document.querySelector("#gender").value
    console.log(user.gender)
}

function chamadapelobotao() {
    if (verificasetodosdadosforampreenchidos() && pesoealturasaonumeros() && dataEstaOk()) {
        formComplet()
    } else { 
        resultSpan.innerHTML = ("prencha os campos corretamente")
    }
}
function pesoealturasaonumeros() {
    if (isNaN(inputPeso.value) || isNaN(inputAltura.value)) {
        resultSpan.innerHTML = ("prencha os campos corretamente")
        return false;
    } else {
        resultSpan.innerHTML = ""
        return true;
    }
}
function verificasetodosdadosforampreenchidos() {
    return true;
}
function dataEstaOk(){
 if(AnoEstaOk() && MesEstaOk()){
    resultSpan.innerHTML = ""
    return true;
 }
 else{
    resultSpan.innerHTML = ("prencha os campos corretamente")
    return false
 }
}
function AnoEstaOk(){
    const ano = parseInt(inputAno.value)

    if(ano>2022 || ano<1){
        resultSpan.innerHTML = ("prencha os campos corretamente")
        return false
    }
    else{
        resultSpan.innerHTML = ""
        return true
    }
}
function MesEstaOk(){
    const Mes = parseInt(inputMes.value)

    if(Mes>31 || Mes<1){
        resultSpan.innerHTML = ("prencha os campos corretamente")
        return false
    }
    else{
        resultSpan.innerHTML = ""
        return true
    }
}

