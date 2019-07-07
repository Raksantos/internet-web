var botaoVerifica = document.querySelector("#botao");
botaoVerifica.addEventListener("click", function(event){
  var deci = document.querySelector(".entradaDecimetro");
  var cent = document.querySelector(".entradaCentimetro");
  if(deci.value != "" && cent.value != ""){
    alert("Decimetro -> Metro: "+converteDeciMetros(deci)+" | Centimetro -> Metro: "+converteCentMetros(cent));
  }
  else if(deci.value != "" && cent.value == ""){
    alert("Decimetro -> Metro: "+converteDeciMetros(deci));
  }
  else if(cent.value != "" && deci.value == ""){
    alert("Centimetro -> Metro: "+converteCentMetros(cent));
  }
});

var botaoVerifica2 = document.querySelector("#botao2");
botaoVerifica2.addEventListener("click", function(event){
  var metroCent = document.querySelector(".entradaMetroCent");
  var metroDeci = document.querySelector(".entradaMetroDeci");
  if(metroDeci.value != "" && metroCent.value != ""){
    alert("Decimetro -> Metro: "+converteMetrosDeci(metroDeci)+" | Centimetro -> Metro: "+converteMetrosCent(metroCent));
  }
  else if(metroDeci.value != "" && metroCent.value == ""){
    alert("Decimetro -> Metro: "+converteMetrosDeci(metroDeci));
  }
  else if(metroCent.value != "" && metroDeci.value == ""){
    alert("Centimetro -> Metro: "+converteMetrosCent(metroCent));
  }
});

function converteDeciMetros(deci){
  return deci.value / 10;
}

function converteCentMetros(cent){
  return cent.value /= 100;
}

function converteMetrosCent(num){
  return num.value * 100;
}

function converteMetrosDeci(num){
  return num.value * 10;
}
