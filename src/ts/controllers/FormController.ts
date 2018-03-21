const selectedOption  = <HTMLSelectElement>document.getElementById("opcoes-reacoes");
const divEnergiaAtivacaoB = <HTMLInputElement>document.getElementById("energia-ativacao-b").parentNode.parentNode;
const divChart = <HTMLDivElement>document.getElementById("chart");

const elementsIDs = ["numberOfMolecules", "temperatura", "energia-ativacao-a", "energia-ativacao-b"];


const jump = (h: string) => {
    const top = document.getElementById(h).offsetTop;
    window.scrollTo(0, top);
}

const visibleDivOptionSelected = () => {
    if(selectedOption.value=="reversibleFirstOrderReaction")
        divEnergiaAtivacaoB.style.display  = "flex";
    else
        divEnergiaAtivacaoB.style.display  = "none";
};

const modifyOptionSelected = () => selectedOption.addEventListener("change", visibleDivOptionSelected);

const getElemets = (IDs: string[]) => {
    return IDs.reduce(function(acc: any, id) {
        const element =  <HTMLInputElement>document.getElementById(id);
        acc[id] = element.valueAsNumber;
        return acc;
    },{});
}

const getElementsInputs = () => {return getElemets(elementsIDs)};

const visibleDivChart = () => divChart.style.display = "block";

const getReactionSelected = () => {return selectedOption.value};

export {getReactionSelected, visibleDivChart, getElementsInputs, modifyOptionSelected, jump};