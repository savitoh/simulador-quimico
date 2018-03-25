const selectedOption  = <HTMLSelectElement>document.getElementById("opcoes-reacoes");
const inputEnergiaAtivacaoB = <HTMLInputElement>document.getElementById("energiaAtivacaoElementoB");
const divEnergiaAtivacaoB = inputEnergiaAtivacaoB.parentElement.parentElement;
const divChart = <HTMLDivElement>document.getElementById("chart");

const elementsIDs = ["numberOfMolecules", "temperatura", "energiaAtivacaoElementoA", "energiaAtivacaoElementoB"];


const jump = (h: string) => {
    const top = document.getElementById(h).offsetTop;
    window.scrollTo(0, top);
}

const visibleDivOptionSelected = () => {
    if(selectedOption.value=="reversibleFirstOrderReaction"){
        divEnergiaAtivacaoB.style.display  = "flex";
        inputEnergiaAtivacaoB.disabled = false;
    }
    else{
        divEnergiaAtivacaoB.style.display  = "none";
        inputEnergiaAtivacaoB.disabled = true;
    }
};

const modifyOptionSelected = () => selectedOption.addEventListener("change", visibleDivOptionSelected);

const getElemetsInputs = (IDs: string[]) => {
    return IDs.reduce(function(acc: any, id) {
        const element =  <HTMLInputElement>document.getElementById(id);
        acc[id] = element.valueAsNumber;
        return acc;
    },{});
}

const getInputsData = () => {return getElemetsInputs(elementsIDs)};

const visibleDivChart = () => divChart.style.display = "block";

const getReactionSelected = () => {return selectedOption.value};

export {getReactionSelected, visibleDivChart, getInputsData, modifyOptionSelected, jump};