var botaoPessoa = document.querySelector("#botao");
botaoPessoa.addEventListener("click", function(event){
  var entrada = prompt("Digite seu nome: ", "");
  alert("Muito prazer, "+entrada);
});
