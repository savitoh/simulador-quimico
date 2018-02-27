import {
  Simulator
} from '../js/ReactionAforB';

import {
  echart,
  theme,
  option
} from '../js/chart';

import {
  ChartController
} from '../js/chart-controller';


let simulator = new Simulator(100000);
simulator.execulteSimulation();
let num_a = simulator.getNum_a();
let num_b = simulator.getNum_b();

let mychart = echart.init(document.getElementById('main'), theme);
mychart.setOption(option);
let chartController = new ChartController(mychart, num_a, num_b);
chartController.animateChart();

