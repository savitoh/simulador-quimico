const selectedOption  = <HTMLSelectElement>document.getElementById("opcoes-reacoes");
const buttonStartReaction = <HTMLButtonElement>document.getElementById("btn-start-reaction");
const divEnergiaAtivacaoB = <HTMLInputElement>document.getElementById("energia-ativacao-b").parentNode.parentNode;
const divChart = <HTMLDivElement>document.getElementById("chart");

const elementsIDs = ["numberOfMolecules", "temperatura", "energia-ativacao-a", "energia-ativacao-b"];

function getElemets(IDs: string[]){
    return IDs.reduce(function(acc: any, id) {
        const element =  <HTMLInputElement>document.getElementById(id);
        acc[id] = element.valueAsNumber;
        return acc;
    },{});
}

function getValuesInputs() {
    return getElemets(elementsIDs);
}

const visibleDivOptionSelected = () => {
  if(selectedOption.value=="reversibleFirstOrderReaction")
      divEnergiaAtivacaoB.style.display  = "flex";
  else
      divEnergiaAtivacaoB.style.display  = "none";
};

const visibleDivChart = () => divChart.style.display = "block";

const getReactionSelected = () => {return selectedOption.value};

export {visibleDivOptionSelected, visibleDivChart, getReactionSelected, getValuesInputs};