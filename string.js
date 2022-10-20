comparando.addEventListener("click", (e) => comparartexto(e));
function comparartexto(e){
    e.preventDefault();
    const texto1 = document.querySelector('#text1').value;
    const texto2 = document.querySelector('#text2').value;
    
    if(texto1.length>texto2.length){
        console.log('o primeiro é maior')
    }
    else if(texto2.length>texto1.length){
            console.log('o primeiro é menor')
        } 
        else{
            console.log('os texto são iguais')
        }
    }
    



