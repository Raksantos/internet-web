var botaoArea = document.querySelector("#calcula-area");
botaoArea.addEventListener("click", function(event){
  var base = document.querySelector(".base");
  var altura = document.querySelector(".altura");
  alert("A área do paralelogramo é: "+(base.value * altura.value));
});

var botaoPerimetro = document.querySelector("#calcula-perimetro");
botaoPerimetro.addEventListener("click", function(event){
  var lado1 = document.querySelector(".lado-1");
  var lado2 = document.querySelector(".lado-2");
  resultado = (2 * (parseInt(lado1.value) + parseInt(lado2.value)));
  alert("O perímetro do paralelogramo é: "+resultado);
});
