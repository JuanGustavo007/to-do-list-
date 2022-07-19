const selecionarInput = document.querySelector("input"); //Selecionando o input
console.log(selecionarInput);

const selecionandoForms = document.querySelector("form"); //Selecionando o forms
console.log(selecionandoForms);

const selecionarBotao = document.querySelector("button"); //Selecionando o botao de submit
console.log(selecionarBotao);

//Criando a acao do botao
function adicionarTarefa(event) {
  event.preventDefault();
  const selecionarValor = selecionarInput.value;

  const novoElemento = document.createElement("p");
  novoElemento.innerText = selecionarValor;
  novoElemento.classList.add("estilo");
  selecionandoForms.appendChild(novoElemento);
  const selecionandoTodosP = document.querySelectorAll("p");
  console.log(selecionandoTodosP);
  const primeiroPmarginTop = selecionandoTodosP[0];
  primeiroPmarginTop.classList.add("margin-p");
}
selecionarBotao.addEventListener("click", adicionarTarefa); //add click

//Botao de remover

const selecionandoRemover = document.querySelector(".remover");

function removerItens(evento) {
  evento.preventDefault();
  const selecionarAll = document.querySelectorAll("p");
  console.log(selecionarAll);

  selecionarAll.forEach((item) => {
    item.remove();
  });
  selecionarInput.value = "";
}
selecionandoRemover.addEventListener("click", removerItens);

//Botao de remover o ultimo item

const ultimoItem = document.querySelector(".ultimo");

//funcao de remover o ultimo item

function removerUltimoItem(item) {
  item.preventDefault();
  const selecionandoPai = document.querySelectorAll("p");
  const ultimoItemLista = selecionandoPai[--selecionandoPai.length];
  ultimoItemLista.remove();
  alert("Última tarefa retirada!!");
}

ultimoItem.addEventListener("click", removerUltimoItem);
