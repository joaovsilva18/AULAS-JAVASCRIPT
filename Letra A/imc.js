const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const resultado2 = document.querySelector ('#resultado2')
const error = document.querySelector ('#error')

function errado(){
    isNaN(altura.value)
      
    }
const calcIMC = () =>{
    if (isNaN(altura.value)||isNaN(peso.value)){
        error.textContent = "[ERROR]  Deve ser digitado um numero!"
    }else{
        if(altura.value != '' && peso.value != ''){
            const imc = parseFloat((peso.value / (altura.value * altura.value))).toFixed(2)
            
            if (imc<18.5){
                resultado2.innerHTML = '(abaixo do peso)'
            } else if (imc<25){
                resultado2.innerHTML = '(peso normal)'  
            }else if (imc<30){
                resultado2.innerHTML = '(acima do peso)'
            }else if (imc<35){
                resultado2.innerHTML = '(obesidade grau I)'
            }else if (imc<41){
                resultado2.innerHTML = '(obesidade grau II)'
            }else {
                resultado2.innerHTML = '(obesidade grau III)'
            }
            resultado.innerHTML = imc   
        }else{
            resultado.innerHTML = ""
            resultado2.innerHTML = ""
            error.textContent = "[ERROR]  Preencha os Campos!"  
              }
        }
    }

