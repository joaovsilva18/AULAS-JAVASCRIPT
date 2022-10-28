const opçao = document.querySelector('#opçao')
const resultSpan = document.querySelector('#invalid')
const image = document.querySelector('#image')
const nome = document.querySelector('#nome')
const maker = document.querySelector('#fabri')
const speed = document.querySelector('#speed')
const loc = document.querySelector ('#km')
const power = document.querySelector('#power')
const preço = document.querySelector('#preço')


opçao.addEventListener("change", function exibirimg (){
    switch(opçao.value){
        case 'seleçao':
            image.innerHTML = ""
            image.setAttribute('src',"./assets/logo.jpeg");
            nome.innerHTML = "";
            maker.innerHTML = "";
            speed.innerHTML = "";
            loc.innerHTML = "";
            power.innerHTML = "";
            preço.innerHTML = "";
            resultSpan.innerHTML = "Escolha Um Veiculo!!";
            break;
        case 'img1':
            image.innerHTML = ""
            resultSpan.innerHTML = ""
            image.setAttribute('src',"./assets/carro1.jfif");
            nome.innerHTML = "Name: " + "Mercedes Benz CLA 250 2.0";
            maker.innerHTML = "Maker: " +  "Mercedes";
            speed.innerHTML = "Speed: " +  "250 km/h";
            loc.innerHTML = "0-100km/h: " +  "6,3 s";
            power.innerHTML = "Power: " +  "224 cv";
            preço.innerHTML = "Cost: " +  "R$ 324.900";
            break;
        case 'img2':
            image.innerHTML = ""
            resultSpan.innerHTML = ""
            image.setAttribute('src',"./assets/carro2.jfif");
            nome.innerHTML = "Name: " + "Mercedes-Benz EQC 400 AMG Line";
            maker.innerHTML = "Maker: " +  "Mercedes";
            speed.innerHTML = "Speed: " +  "180 km/h";
            loc.innerHTML = "0-100km/h: " +  "5,1 s";
            power.innerHTML = "Power: " +  "204 cv";
            preço.innerHTML = "Cost: " +  "R$ 669.900";
            break;
        case 'img3':
            image.innerHTML = ""
            resultSpan.innerHTML = ""
            image.setAttribute('src',"./assets/carro3.jfif");
            nome.innerHTML = "Name: " + "Mercedes-Benz A35 AMG 2.0 4Matic";
            maker.innerHTML = "Maker: " +  "Mercedes";
            speed.innerHTML = "Speed: " +  "250 km/h";
            loc.innerHTML = "0-100km/h: " +  "4,7 s";
            power.innerHTML = "Power: " +  "306 cv";
            preço.innerHTML = "Cost: " +  "R$ 421.900";
            break;
        case 'img4':
            image.innerHTML = ""
            resultSpan.innerHTML = ""
            image.setAttribute('src',"./assets/carro4.jfif");
            nome.innerHTML = "Name: " + "Mercedes Benz A45 S AMG 2.0 4Matic";
            maker.innerHTML = "Maker: " +  "Mercedes";
            speed.innerHTML = "Speed: " +  "270 km/h";
            loc.innerHTML = "0-100km/h: " +  "3,9 s";
            power.innerHTML = "Power: " +  "421 cv";
            preço.innerHTML = "Cost: " +  "R$ 530.900";
            break;
        case "img5":
            image.innerHTML = ""
            resultSpan.innerHTML = ""
            image.setAttribute('src',"./assets/carro5.jfif");
            nome.innerHTML = "Name: " + "Mercedes-Benz A250 2.0";
            maker.innerHTML = "Maker: " +  "Mercedes";
            speed.innerHTML = "Speed: " +  "250 km/h";
            loc.innerHTML = "0-100km/h: " +  "6,2 s";
            power.innerHTML = "Power: " +  "224 cv";
            preço.innerHTML = "Cost: " +  "R$ 332.900";
            break;
    }
})
