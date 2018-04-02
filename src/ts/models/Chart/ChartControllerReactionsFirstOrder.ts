import {IChartController} from "./IChartController";
import { ECharts } from "echarts";

export class ChartControllerReactionsFirstOrder implements IChartController {

    private dataSeriesConcentrationOfA: number[] = [];
    private dataSeriesConcentrationOfB: number[] = [];
    private chart: ECharts;
    private num_a: number[];
    private num_b: number[];

    constructor(chart: ECharts, concentrationOfAandB: Array<Array<number>>) {
        this.chart = chart;
        this.num_a = concentrationOfAandB[0];
        this.num_b = concentrationOfAandB[1];
    }

    private getDataSeriesConcentrationOfAandB(concentration: number[]): Array<Array<number>> {
        return concentration.map((value, index, array) => {
            return [index, value];
        });
    }

    private reactionDuration = (): number =>  { return this.num_a.length*2000 };

    private addSeriesInChart(elementsConcentrationOfA: number[], elementsConcentrationOfB: number[]): void {
        
        this.dataSeriesConcentrationOfA.push(elementsConcentrationOfA.shift());
        this.dataSeriesConcentrationOfB.push(elementsConcentrationOfB.shift());
        this.chart.setOption({
            series: [{
                data: this.dataSeriesConcentrationOfA
              },
              {
                data: this.dataSeriesConcentrationOfB
              }
            ]
        });
    }
    public animateChart(): void {
        let elementsConcentrationOfA =  this.getDataSeriesConcentrationOfAandB(this.num_a);
        let elementsConcentrationOfB =  this.getDataSeriesConcentrationOfAandB(this.num_b);
        let intervalo = setInterval(this.addSeriesInChart.bind(this, elementsConcentrationOfA, elementsConcentrationOfB), 1900);
        setTimeout(function() {
            clearInterval(intervalo);
        }, this.reactionDuration());
    }
}