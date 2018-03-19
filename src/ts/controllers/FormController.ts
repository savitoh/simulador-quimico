const selectedOption  = <HTMLSelectElement>document.getElementById("opcoes-reacoes");
const buttonStartReaction = <HTMLElement>document.getElementById("btn-start-reaction");
const divEnergiaAtivacaoB = <HTMLElement>document.getElementById("energia-ativacao-b").parentNode.parentNode;
const divChart = <HTMLElement>document.getElementById("chart");


function visibleDivOptionSelected() {
  if(selectedOption.value=="reversibleFirstOrderReaction") 
      divEnergiaAtivacaoB.style.display  = "flex";
  else
      divEnergiaAtivacaoB.style.display  = "none";
}

function visibleDivChart() {
    divChart.style.display = "block";
}

export {visibleDivOptionSelected, visibleDivChart};