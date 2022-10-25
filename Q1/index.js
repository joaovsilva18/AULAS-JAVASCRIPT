const inteiro = document.querySelector('#inteiro')
const resultSpan = document.querySelector('#resultado')


function mostrainteiro() {

    switch (parseFloat(inteiro.value)) {
        case 0:
            resultSpan.innerHTML = "Numero zero";
            break;
        case 1:
            resultSpan.innerHTML = "Numero Um";
            break;
        case 2:
            resultSpan.innerHTML = "Numero Dois";
            break;
        case 3:
            resultSpan.innerHTML = "Numero Tres";
            break;
        case 4:
            resultSpan.innerHTML = "Numero Quatro";
            break;
        case 5:
            resultSpan.innerHTML = "Numero Cinco";
            break;
        case 6:
            resultSpan.innerHTML = "Numero Seis";
            break;
        case 7:
            resultSpan.innerHTML = "Numero Sete";
            break;
        case 8:
            resultSpan.innerHTML = "Numero Oito";
            break;
        case 9:
            resultSpan.innerHTML = "Numero Nove";
            break;
        case 10:
            resultSpan.innerHTML = "Numero Dez";
            break;
        default:
            resultSpan.innerHTML = "Valor Invalido";
    }

}