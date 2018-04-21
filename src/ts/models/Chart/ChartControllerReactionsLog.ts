import {IChartController} from "./IChartController";
import { ECharts } from "echarts";

export class ChartControllerReactionsLog implements IChartController {

    private chart: ECharts;
    private num_a: number[];
    private dataSeriesConcentrationOfA: number[] = [];


    constructor(chart: ECharts, concentrationOfAandB: Array<Array<number>>) {
        this.chart = chart;
        this.num_a = concentrationOfAandB[0];
    };

    private reactionDuration = (): number =>  { return this.num_a.length*2000 };

    private getDataSeriesConcentration(concentration: number[]): Array<Array<number>> {
        return concentration.map((value, index, array) => {
            return [index, value];
        });
    }

    private addSeriesInChart(elementsConcentrationOfA: number[]): void {
        
        this.dataSeriesConcentrationOfA.push(elementsConcentrationOfA.shift());
        this.chart.setOption({
            series: [{
                data: this.dataSeriesConcentrationOfA
              }
            ]
        });
    }

    public animateChart(): void {
        let elementsConcentrationOfA =  this.getDataSeriesConcentration(this.num_a);
        let intervalo = setInterval(this.addSeriesInChart.bind(this, elementsConcentrationOfA), 1900);
        setTimeout(function() {
            clearInterval(intervalo);
        }, this.reactionDuration());
    }
}