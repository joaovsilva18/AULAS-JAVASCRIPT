const min = document.querySelector('#minimo')
const max = document.querySelector('#maximo')
const resultSpan = document.querySelector('#resultado')
const error = document.querySelector('#error')
let resultado;


function sortearnumero(){
  if (isNaN(min.value)||isNaN(max.value)){
    error.textContent = "[ERROR]  Deve ser digitado um numero!"
}else{
    if(min.value != '' && max.value != ''){
      const numMin = Number(min.value)
      const numMax = Number(max.value) 
      console.log(numMin,numMax)
      //min = Math.ceil(min);
      //max = Math.floor(max);
      resultado=Math.floor(Math.random() * (numMax - numMin)) + numMin;
      escreveResultado(resultado);
    }else{
        resultSpan.innerHTML = ""
        error.textContent = "[ERROR]  Preencha os Campos!"
          }
    }   
}
function escreveResultado(resultado){
  resultSpan.innerHTML=`resultado =${resultado}`
}
