// This is a JavaScript file

 textoDisplay = "";

var valor1 = 0;

var operador = "";

function zerarDisplay(){
  textoDisplay = "";
  $(".display").val("");
}

$(document).on("click","#ce", function(){
 zerarDisplay();
 valor1 = 0;
})

$(document).on("click",".botaao", function(){
  textoDisplay += $(this).val();
  $(".display").val(textoDisplay);
})

$(document).on("click", ".ope", function(){
operador = $(this).html();
valor1 = textoDisplay;
zerarDisplay();
})

$(document).on("click", ".igual", function(){
  var valor2 = textoDisplay;
  zerarDisplay();


  if(operador == "+"){
textoDisplay = parseFloat(valor1) + parseFloat(valor2);
  }

  if(operador == "-"){
textoDisplay = parseFloat(valor1) - parseFloat(valor2);
  }
  
  if(operador == "*"){
textoDisplay = parseFloat(valor1) * parseFloat(valor2);
  }

  if(operador == "/"){
textoDisplay = parseFloat(valor1) / parseFloat(valor2);
  }

  $(".display").val(textoDisplay);
})