var botaoCalcula = document.querySelector("#calcula");
botaoCalcula.addEventListener("click", function(event){
  var tarefa1 = document.querySelector(".tarefa-1");
  var tarefa2 = document.querySelector(".tarefa-2");
  var tarefa3 = document.querySelector(".tarefa-3");
  var tarefa4 = document.querySelector(".tarefa-4");
  var nota1 = document.querySelector(".nota-1");
  var nota2 = document.querySelector(".nota-2");
  var mediaTarefa = calculaMediaTarefa(tarefa1, tarefa2, tarefa3, tarefa4);
  var mediaNotas = ((parseFloat(nota1.value) + parseFloat(nota2.value))/2).toFixed(2);
  var mediaTotal = ((parseFloat(mediaTarefa) + parseFloat(mediaNotas))/2).toFixed(2);
  console.log(mediaTotal);
  alert("A média final é: "+mediaTotal);
});

function calculaMediaTarefa(tarefa1, tarefa2, tarefa3, tarefa4){
  return ((parseFloat(tarefa1.value) + parseFloat(tarefa2.value) + parseFloat(tarefa3.value) + parseFloat(tarefa4.value))/4).toFixed(2);
}
