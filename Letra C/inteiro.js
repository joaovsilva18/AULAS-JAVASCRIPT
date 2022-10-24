const numero = document.querySelector('#numero')
const resultSpan = document.querySelector('#resultado')
const error = document.querySelector('#error')
let resultado;


function calcinteiro() {
  if (isNaN(numero.value)){
    error.textContent = "[ERROR]  Deve ser digitado um numero!"
  } else {
    if (numero.value != '') {
      const num = Number(numero.value)
      const inteiroAntes = Math.floor(num)
      const inteiroDepois = Math.ceil(num)

      escreveResultado(inteiroAntes, inteiroDepois);
    } else {
      resultSpan.innerHTML = ""
      error.textContent = "[ERROR]  Preencha o Campo!"
    }
  }
}

function escreveResultado(antes, depois) {
  resultSpan.innerHTML = `o numero Digitado esta entre ${antes} & ${depois}`
}