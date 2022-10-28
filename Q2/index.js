const cep = document.querySelector('#CEP')

cep.addEventListener("input",(event) =>{
    const str = event.target.value;

    if(cep.value.lenght <= 9){
        cep.value = str.replace(/[^0-9\-]/g,"");
        cepPadrao(cep.value);
    }
    else {
        cep.value = str.replace(/[^0-9\-]/g,"");
        cepPadrao(cep.value.replace("-",""));
    }

})

function cepPadrao(stringnocep){

    if(stringnocep.indexOf("-") == -1 && stringnocep.lenght > 5){
        cep.value = stringnocep.slice(0,5) + "-" + stringnocep.slice(5,8);
    }
    else{
        if(stringnocep.lenght > 5){
            const semHifen = stringnocep.replace("-","");
            cep.value = semHifen.slice(0,5) + "-" + semHifen.slice(5,semHifen.lenght);
        }
    }
}

