
import { SimulationController } from "../controllers/SimulationController";
import { FormController } from "../controllers/FormController";

const form = <HTMLFormElement>document.getElementById("form");

let simulation: SimulationController;
let formController = new FormController();

formController.watchReactionTypeSelected();

form.addEventListener("submit", (evt) => {
	evt.preventDefault();
    simulation = new SimulationController(formController.getReactionSelected(),
                                         <HTMLCanvasElement> document.getElementById('chart'), formController.getInputsData());
    formController.turnVisibleChartDiv();
    formController.jump("chart");
    simulation.loadSimulation();
});

