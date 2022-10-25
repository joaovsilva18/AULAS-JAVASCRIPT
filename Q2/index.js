const result = document.querySelector("#result");

const user_day = document.querySelector("#day");
const n_month = document.querySelector("#mounth_numb");
const user_year = document.querySelector("#year");
const week_numb = document.querySelector("#weekday");
const mounth_name = document.querySelector("#mounth_name");
const ms = document.querySelector("#ms_date");

result.addEventListener('click', function(){
    let calendar = document.querySelector('#play_date').value;
    let full_Date = new Date(calendar);
    let week_day = full_Date.getDay();
    let mounth_year = full_Date.getMonth();


    switch(week_day){
        case 0:
            week_numb.textContent = "Dia da Semana: Segunda-Feira";
            break; 
        
        case 1:
            week_numb.textContent = "Dia da Semana: Terça-Feira";
            break; 
                
        case 2:
            week_numb.textContent = "Dia da Semana: Quarta-Feira";
            break; 
                
        case 3:
            week_numb.textContent = "Dia da Semana: Quinta-Feira";
            break; 
        
        case 4:
            week_numb.textContent = "Dia da Semana: Sexta-Feira";
            break; 

        case 5:
            week_numb.textContent = "Dia da Semana: Sábado";
            break;

        case 6:
            week_numb.textContent = "Dia da Semana: Domingo";
            break;  
    }

    switch(mounth_year){
        case 0:
            mounth_name.textContent = "Mês(nome): Janeiro";
            break; 
        
        case 1:
            mounth_name.textContent = "Mês(nome): Fevereiro";
            break; 
                
        case 2:
            mounth_name.textContent = "Mês(nome): Março";
            break; 
                
        case 3:
            mounth_name.textContent = "Mês(nome): Abril";
            break; 
        
        case 4:
            mounth_name.textContent = "Mês(nome): Maio";
            break; 

        case 5:
            mounth_name.textContent = "Mês(nome): Junho";
            break;

        case 6:
            mounth_name.textContent = "Mês(nome): Julho";
            break;
        case 7:
            mounth_name.textContent = "Mês(nome): Agosto";
            break; 
            
        case 8:
            mounth_name.textContent = "Mês(nome): Setembro";
            break; 
                    
        case 9:
            mounth_name.textContent = "Mês(nome): Outubro";
            break; 
                    
        case 10:
            mounth_name.textContent = "Mês(nome): Novembro";
            break; 
            
        case 11:
            mounth_name.textContent = "Mês(nome): Dezembro";
            break; 
    }
    user_day.textContent = "Dia:  " + (full_Date.getUTCDate());
    n_month.textContent = "Mês(numérico):  " + (full_Date.getUTCMonth()+1);
    user_year.textContent = "Ano:  " + full_Date.getFullYear();
    ms.textContent = "Data em milissegundos:  " + full_Date.getTime();

});