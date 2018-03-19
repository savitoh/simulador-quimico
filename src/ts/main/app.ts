import { SimulationController } from "../controllers/SimulationController";
import {visibleDivOptionSelected} from "../controllers/FormController";
import {visibleDivChart} from "../controllers/FormController";
import {getReactionSelected} from "../controllers/FormController";
import {getValuesInputs} from "../controllers/FormController";


const selectedOption  = <HTMLSelectElement>document.getElementById("opcoes-reacoes");
const buttonStartReaction = <HTMLElement>document.getElementById("btn-start-reaction");

let simulation: SimulationController;
let attributesReaction = { numberOfMolecules: 100000, temperatura: 1 };

selectedOption.addEventListener("change", visibleDivOptionSelected);

buttonStartReaction.addEventListener("click", () => {
    console.log(getValuesInputs());
    console.log(attributesReaction);
    visibleDivChart();
    simulation = new SimulationController(getReactionSelected(), <HTMLCanvasElement> document.getElementById('chart'), getValuesInputs());
    simulation.loadSimulation();
});

