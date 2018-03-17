import { echart } from '../models/Chart/Chart';
import { ChartTheme } from '../models/Chart/ChartTheme';
import { getChartOptions } from '../models/Chart/ChartOption'; 
import { IAttributesReaction } from '../models/Reactions/IAttributesReaction'
import { IReaction } from '../models/Reactions/IReaction';
import {ReactionFactory} from '../models/Reactions/ReactionFactory';
import { IChartController } from '../models/Chart/IChartController';
import { ChartControllerFactory } from '../models/Chart/ChartControllerFactory';

let option = getChartOptions("reversibleFirstOrderReaction");

let factoryReaction = new ReactionFactory();

let attributesReaction = {numberOfMolecules: 100000, temperatura: 1};

let reaction = factoryReaction.getReaction("ireversibleFirstOrderReaction", attributesReaction);
reaction.startReaction();

let concentrationOfAandB = reaction.getConcetrations();

let chartOfConcentration = echart.init(<HTMLCanvasElement> document.getElementById('main'), ChartTheme);
chartOfConcentration.setOption(option);
window.onresize = function() {
  if(chartOfConcentration != null && chartOfConcentration != undefined){
    chartOfConcentration.resize();
  }
};

let chartControllerFactory = new ChartControllerFactory();

let chartController  = chartControllerFactory.getChartController("ireversibleFirstOrderReaction", chartOfConcentration, concentrationOfAandB);
chartController.animateChart();