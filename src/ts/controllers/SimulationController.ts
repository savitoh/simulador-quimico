import { echart } from '../models/Chart/Chart';
import { ChartTheme } from '../models/Chart/ChartTheme';
import { getChartOptions } from '../models/Chart/ChartOption';
import { IAttributesReaction } from '../models/Reactions/IAttributesReaction';
import { IReaction } from '../models/Reactions/IReaction';
import { ReactionFactory } from '../models/Reactions/ReactionFactory';
import { IChartController } from '../models/Chart/IChartController';
import { ChartControllerFactory } from '../models/Chart/ChartControllerFactory';

export class SimulationController {
    
    private typeOfReaction: string;
    private canvas: HTMLCanvasElement;
    private atributes: IAttributesReaction;

    constructor(typeOfReaction: string, canvas: HTMLCanvasElement, atributes: IAttributesReaction) {
            this.typeOfReaction = typeOfReaction;
            this.canvas = canvas;
            this.atributes = atributes;
    }

    public loadSimulation(): void {
        let option = getChartOptions(this.typeOfReaction);

        let factoryReaction = new ReactionFactory();

        let reaction = factoryReaction.getReaction(this.typeOfReaction, this.atributes);
        reaction.startReaction();

        let concentrationOfAandB = reaction.getConcetrations();

        let chartOfConcentration = echart.init(this.canvas, ChartTheme);
        chartOfConcentration.setOption(option);
        window.onresize = function() {
        if(chartOfConcentration != null && chartOfConcentration != undefined){
            chartOfConcentration.resize();
        }
        };

        let chartControllerFactory = new ChartControllerFactory();

        let chartController  = chartControllerFactory.getChartController(this.typeOfReaction, chartOfConcentration, concentrationOfAandB);
        chartController.animateChart();
    }

}