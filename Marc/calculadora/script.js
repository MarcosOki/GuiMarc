function inserir(valor){
   var calc = document.getElementById("calc")
   document.getElementById("calc").innerHTML+= valor
}
function apagar(){
   var calc = document.getElementById("calc").innerHTML
   document.getElementById("calc").innerHTML = calc.substring(0,calc.length-1)
}
function apagarTudo(){
   var calc = document.getElementById("calc")
   calc.innerHTML = ""
}
function calcular(){
   var calc = document.getElementById("calc").innerHTML
   document.getElementById("calc").innerHTML = eval(calc)
}