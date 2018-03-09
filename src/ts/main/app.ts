import { ControllerSimulation } from '../Controller/ControllerSimulation';


let simulation: ControllerSimulation;
let attributesReaction = {    numberOfMolecules: 100000 };
simulation = new ControllerSimulation("reversibleFirstOrderReaction", <HTMLCanvasElement> document.getElementById('main'), attributesReaction);
simulation.loadSimulation();