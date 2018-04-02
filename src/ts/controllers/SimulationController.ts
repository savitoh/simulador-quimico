import { echart } from '../models/Chart/Chart';
import { ChartTheme } from '../models/Chart/Chart-Options/ChartTheme';
import { IAttributesReaction } from '../models/Reactions/IAttributesReaction';
import { IReaction } from '../models/Reactions/IReaction';
import { ReactionFactory } from '../models/Reactions/ReactionFactory';
import { IChartController } from '../models/Chart/IChartController';
import { ChartControllerFactory } from '../models/Chart/ChartControllerFactory';
import { IBuildChartOption } from "../models/Chart/Chart-Options/IBuildChartOption";
import { ChartOptionFactory } from '../models/Chart/Chart-Options/ChartOptionFactory';
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

        let reactionFactory = new ReactionFactory();
        let reaction = reactionFactory.getReaction(this.typeOfReaction, this.atributes);
        reaction.startReaction();

        let concentrationOfAandB = reaction.getConcetrations();
    
        this.chartOfConcentration = echart.init(this.canvas, ChartTheme);
        
        let chartOptionFactory = new ChartOptionFactory();
        let chartOption = chartOptionFactory.getChartOptions(this.typeOfReaction);
        
        this.chartOfConcentration.setOption(chartOption.buildChartOption());
        (<any>window).onresize = () => this.chartOfConcentration.resize();
        

        let chartControllerFactory = new ChartControllerFactory();

        let chartController  = chartControllerFactory.getChartController(this.typeOfReaction, 
                                                                this.chartOfConcentration, concentrationOfAandB);
        chartController.animateChart();
    }

}