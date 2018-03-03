import { echart } from '../models/Chart/Chart';
import { ChartTheme } from '../models/Chart/ChartTheme';
import { getChartOptions } from '../models/Chart/ChartOption'; 
import { ChartController } from '../../js/chart-controller';
import { IReaction } from '../models/Reactions/IReaction';
import {ReactionFactory} from '../models/Reactions/ReactionFactory';

let option = getChartOptions("reversibleFirstOrderReaction");

let factoryReaction: ReactionFactory;
factoryReaction = new ReactionFactory();

let reaction: IReaction;
reaction = factoryReaction.getReaction("reversibleFirstOrderReaction", 100000);
reaction.startReaction();

let num_a = reaction.getConcetrations()[0];
let num_b = reaction.getConcetrations()[1];

let chartOfConcentration = echart.init(<HTMLCanvasElement> document.getElementById('main'), ChartTheme);
chartOfConcentration.setOption(option);
window.onresize = function() {
  if(chartOfConcentration != null && chartOfConcentration != undefined){
    chartOfConcentration.resize();
  }
};
let chartController = new ChartController(chartOfConcentration, num_a, num_b);
chartController.animateChart();
