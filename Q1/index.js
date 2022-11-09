const n1 = document.querySelector('#n1')
const n2 = document.querySelector('#n2')
const result = document.querySelector('span')

const btnsoma = document.querySelector("#soma")
const btnsub = document.querySelector("#subtraçao")
const btnmulti = document.querySelector("#multiplicaçao")
const btnpote = document.querySelector("#potencia")
const btndiv = document.querySelector("#divisao")

btnsoma.addEventListener("click", somar)
btnsub.addEventListener("click", subtrair)
btnmulti.addEventListener("click", multiplicar)
btnpote.addEventListener("click", potencia)
btndiv.addEventListener("click", dividir)

function validar() {
    if (isNaN(n1.value) || isNaN(n2.value) || n1.value == "" || n2.value == "") {
        result.innerHTML = "Preencha Os Campos Corretamente!!"
        throw "erro"
    }
}

function somar(resultsoma) {
    validar()
    resultsoma = parseFloat(n1.value) + parseFloat(n2.value)
    console.log(resultsoma)
    result.innerHTML = resultsoma
}

function subtrair(resultsubtrai) {
    validar()
    resultsubtrai = parseFloat(n1.value) - parseFloat(n2.value)
    console.log(resultsubtrai)
    result.innerHTML = resultsubtrai
}

function potencia(resultpotencia) {
    validar()
    resultpotencia = parseFloat(n1.value) ** parseFloat(n2.value)
    console.log(resultpotencia)
    result.innerHTML = resultpotencia
}

function multiplicar(resultmulti) {
    validar()
    resultmulti = parseFloat(n1.value) * parseFloat(n2.value)
    console.log(resultmulti)
    result.innerHTML = resultmulti
}

function dividir(resultdiv) {
    validar()
    resultdiv = parseFloat(n1.value) / parseFloat(n2.value)
    console.log(resultdiv)
    result.innerHTML = resultdiv
}