const resultSpan = document.querySelector('#resultado')
const opçao = document.querySelector('#opçao')
const image = document.querySelector('#image')
function exibirimg(){
    switch(opçao.value){
        case 'img1':
            image.setAttribute('src',"./assets/espada.jpg");
            break;
        case 'img2':
            image.setAttribute('src',"./assets/picareta.webp");
            break;
        case 'img3':
            image.setAttribute('src',"./assets/machado.jfif");
            break;
        case 'img4':
            image.setAttribute('src',"./assets/pa.jpg");
            break;
        case "img5":
            image.setAttribute('src',"./assets/arco.jfif")
            break;
    }
}