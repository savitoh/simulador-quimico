import { echart } from '../models/Chart/Chart';
import { ChartTheme } from '../models/Chart/ChartTheme';
import { getChartOptions } from '../models/Chart/ChartOption';
import { IAttributesReaction } from '../models/Reactions/IAttributesReaction';
import { IReaction } from '../models/Reactions/IReaction';
import { ReactionFactory } from '../models/Reactions/ReactionFactory';
import { IChartController } from '../models/Chart/IChartController';
import { ChartControllerFactory } from '../models/Chart/ChartControllerFactory';
import { ECharts } from 'echarts';

export class SimulationController {
    
    private typeOfReaction: string;
    private canvas: HTMLCanvasElement;
    private atributes: IAttributesReaction;
    private chartOfConcentration: ECharts;


    constructor(typeOfReaction: string, canvas: HTMLCanvasElement, atributes: IAttributesReaction) {
            this.typeOfReaction = typeOfReaction;
            this.canvas = canvas;
            this.atributes = atributes;
            this.chartOfConcentration = echart.init(this.canvas, ChartTheme);
    }

    public loadSimulation(): void {

        this.chartOfConcentration.dispose();

        let factoryReaction = new ReactionFactory();
        let reaction = factoryReaction.getReaction(this.typeOfReaction, this.atributes);
        reaction.startReaction();

        let concentrationOfAandB = reaction.getConcetrations();
    

        this.chartOfConcentration = echart.init(this.canvas, ChartTheme);
        let option = getChartOptions(this.typeOfReaction);
        this.chartOfConcentration.setOption(option);
        (<any>window).onresize = () => this.chartOfConcentration.resize();
        

        let chartControllerFactory = new ChartControllerFactory();

        let chartController  = chartControllerFactory.getChartController(this.typeOfReaction, this.chartOfConcentration, concentrationOfAandB);
        chartController.animateChart();
    }

}