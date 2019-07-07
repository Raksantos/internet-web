var botaoAutor = document.querySelector("#botao");
botaoAutor.addEventListener("click", function(event){
  var nome = document.querySelector("input.entrada");
  if(nome.value.localeCompare("Chico") == 0){
    alert("Você digitou o nome "+nome.value+". Está correto!");
  }
  else{
    alert("Você digitou o nome "+nome.value+". Está incorreto!");
  }
});
