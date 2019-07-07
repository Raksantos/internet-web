var botaoCalcula = document.querySelector("#calcula-preco");
botaoCalcula.addEventListener("click", function(event){
  var nome = document.querySelector(".nome-usuario");
  var almoco = document.querySelector(".self-service");
  var suco = document.querySelector(".suco");
  var sobremesa = document.querySelector(".sobremesa");
  var almocoValor = ((parseFloat(almoco.value) * 30)/1000).toFixed(2);
  var sucoValor = (parseFloat(suco.value) * 4).toFixed(2);
  var sobremesaValor = (parseFloat(sobremesa.value) * 4).toFixed(2);
  var total = (parseFloat(almocoValor) + parseFloat(sucoValor) + parseFloat(sobremesaValor)).toFixed(2);
  alert(nome.value+"\nConsumiu:\n"+almoco.value+" gramas no self-service R$ "+almocoValor+" reais\n"
  +suco.value+" sucos R$ "+sucoValor+" reais\n"+sobremesa.value+" pratos de sobremesa R$ "+sobremesaValor+" reais\n"
  +"Total: "+total);
});
