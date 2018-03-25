
import { SimulationController } from "../controllers/SimulationController";
import {getReactionSelected} from "../controllers/FormController";
import {getElementsInputs} from "../controllers/FormController";
import {visibleDivChart} from "../controllers/FormController";
import {modifyOptionSelected} from "../controllers/FormController";
import {jump} from "../controllers/FormController";

const form = <HTMLFormElement>document.getElementById("form");
let simulation: SimulationController;

form.addEventListener("submit", (evt) => {
	evt.preventDefault();
    simulation = new SimulationController(getReactionSelected(), <HTMLCanvasElement> document.getElementById('chart'), getElementsInputs());
    visibleDivChart();
    form.reset();
    jump("chart");
    simulation.loadSimulation();
});

