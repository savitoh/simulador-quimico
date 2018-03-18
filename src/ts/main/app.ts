import { ControllerSimulation } from "../controllers/SimulationController";


let simulation: ControllerSimulation;
let attributesReaction = { numberOfMolecules: 100000, temperatura: 1 };
simulation = new ControllerSimulation("reversibleFirstOrderReaction", <HTMLCanvasElement> document.getElementById('chart'), attributesReaction);
simulation.loadSimulation();