export class FormController {

     private reactionTypeSelected =  <HTMLSelectElement>document.getElementById("opcoes-reacoes");
     private inputEnergiaAtivacaoB = <HTMLInputElement>document.getElementById("energiaAtivacaoElementoB");
     private divEnergiaAtivacaoB =this.inputEnergiaAtivacaoB.parentElement.parentElement;
     private chartDiv = <HTMLDivElement>document.getElementById("chart");

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
        if(this.reactionTypeSelected.value=="reversibleFirstOrderReaction" || 
                this.reactionTypeSelected.value=="logreversibleFirstOrderReaction")
            this.showDivEnergiaAtivacaoB();
        else
           this.hiddenDivEnergiaAtivacaoB();   
    };

    public watchReactionTypeSelected = () => this.reactionTypeSelected.addEventListener("change", this.visibleDivOptionSelected);

    private getElemetsInputs = (IDs: string[]) => {
        return IDs.reduce(function(acc: any, id) {
            const element =  <HTMLInputElement>document.getElementById(id);
            acc[id] = element.valueAsNumber;
            return acc;
        },{});
    };

    public getInputsData = () => {return this.getElemetsInputs(this.elementsIDs)};

    public turnVisibleChartDiv = () => this.chartDiv.style.display = "block";

    public getReactionSelected = () => {return this.reactionTypeSelected.value};


}