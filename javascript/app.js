import {
  Simulator
} from './simulation';

import {
  echart,
  theme,
  option
} from './chart';

import {
  ChartController
} from './chart-controller';

let simulator = new Simulator(100000);
simulator.execulteSimulation();
let num_a = simulator.getNum_a();
let num_b = simulator.getNum_b();

let mychart = echart.init(document.getElementById('main'), theme);
mychart.setOption(option);
let chartController = new ChartController(mychart, num_a, num_b);
chartController.animateChart();
