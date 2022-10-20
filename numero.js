comparando.addEventListener("click", (e) => compararnumero(e));
function compararnumero(e){
    e.preventDefault();
    const num1 = document.querySelector('#numero').value;
    const num2 = document.querySelector('#numero2').value;
    
    if((parseFloat(num1))>(parseFloat(num2))){
        return console.log('o primeiro é maior')
    }
    else if((parseFloat(num2))>(parseFloat(num1))){
            return console.log('o primeiro é menor')
        } 
        else{
            return console.log('os numeros são iguais')
        }
    }


