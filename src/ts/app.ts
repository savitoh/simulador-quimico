
import {
  echart,
  theme,
  option
} from '../js/chart';

import {
  ChartController
} from '../js/chart-controller';

import {
  IReaction
} from './IReaction';

import { ReactionAforB } from './ReactionAforB';


let reaction: IReaction;
reaction = new ReactionAforB(100000);
reaction.startReaction();

let num_a = reaction.getConcetrations()[0];
let num_b = reaction.getConcetrations()[1];

let mychart = echart.init(document.getElementById('main'), theme);
mychart.setOption(option);
let chartController = new ChartController(mychart, num_a, num_b);
chartController.animateChart();