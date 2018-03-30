import { SimulationController } from "../controllers/SimulationController";
import { FormController } from "../controllers/FormController";


const form = <HTMLFormElement>document.getElementById("form");

let simulation: SimulationController;
let formController = new FormController();

formController.modifyOptionSelected();

form.addEventListener("submit", (evt) => {
	evt.preventDefault();
    simulation = new SimulationController(formController.getReactionSelected(),
                                         <HTMLCanvasElement> document.getElementById('chart'), formController.getInputsData());
    formController.visibleDivChart();
    formController.jump("chart");
    simulation.loadSimulation();
});


