const n1 = document.querySelector('#n1')
const n2 = document.querySelector('#n2')
const result = document.querySelector('span')

function calcular(){
if(document.querySelector('#operador').value == ('somar')){
   somar(); 
}
if(document.querySelector('#operador').value == ('subtrair')){
    subtrair(); 
}
 if(document.querySelector('#operador').value == ('multiplicar')){
    multiplicar(); 
}
 if(document.querySelector('#operador').value == ('dividir')){
    dividir(); 
}
}
function somar(){
    result.innerHTML = parseFloat(n1.value) + parseFloat(n2.value)
}
function subtrair(){
    result.innerHTML = parseFloat(n1.value) - parseFloat(n2.value)
}
function multiplicar(){
    result.innerHTML = parseFloat(n1.value) * parseFloat(n2.value)
}
function dividir(){
    result.innerHTML = parseFloat(n1.value) / parseFloat(n2.value)
}