export class FormController {

     private selectedOption =  <HTMLSelectElement>document.getElementById("opcoes-reacoes");
     private inputEnergiaAtivacaoB = <HTMLInputElement>document.getElementById("energiaAtivacaoElementoB");
     private divEnergiaAtivacaoB =this.inputEnergiaAtivacaoB.parentElement.parentElement;
     private divChart = <HTMLDivElement>document.getElementById("chart");

     private elementsIDs = ["numberOfMolecules", "temperatura", "energiaAtivacaoElementoA", "energiaAtivacaoElementoB"];


    public jump = (h: string) => {
        const top = document.getElementById(h).offsetTop;
        window.scrollTo(0, top);
     };

    private hiddenDivEnergiaAtivacaoB = () => {
        this.divEnergiaAtivacaoB.style.display  = "none";
        this.inputEnergiaAtivacaoB.disabled = true;
     };

    private showDivEnergiaAtivacaoB = () => {
        this.divEnergiaAtivacaoB.style.display  = "flex";
        this.inputEnergiaAtivacaoB.disabled = false;
     };

    private visibleDivOptionSelected = () => {
        if(this.selectedOption.value=="reversibleFirstOrderReaction")
            this.showDivEnergiaAtivacaoB();
        else
           this.hiddenDivEnergiaAtivacaoB();   
    };

    public modifyOptionSelected = () => this.selectedOption.addEventListener("change", this.visibleDivOptionSelected);

    private getElemetsInputs = (IDs: string[]) => {
        return IDs.reduce(function(acc: any, id) {
            const element =  <HTMLInputElement>document.getElementById(id);
            acc[id] = element.valueAsNumber;
            return acc;
        },{});
    };

    public getInputsData = () => {return this.getElemetsInputs(this.elementsIDs)};

    public visibleDivChart = () => this.divChart.style.display = "block";

    public getReactionSelected = () => {return this.selectedOption.value};


}