import { SimulationController } from "../controllers/SimulationController";
import {visibleDivOptionSelected} from "../controllers/FormController";
import {visibleDivChart} from "../controllers/FormController";



const selectedOption  = <HTMLSelectElement>document.getElementById("opcoes-reacoes");
const buttonStartReaction = <HTMLElement>document.getElementById("btn-start-reaction");
let simulation: SimulationController;
let attributesReaction = { numberOfMolecules: 100000, temperatura: 1 };


selectedOption.addEventListener("change", visibleDivOptionSelected);

buttonStartReaction.addEventListener("click", function(){
    visibleDivChart();
    simulation = new SimulationController("reversibleFirstOrderReaction", <HTMLCanvasElement> document.getElementById('chart'), attributesReaction);
    simulation.loadSimulation();
});

