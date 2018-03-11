import {IChartController} from "./IChartController";
import { ECharts } from "echarts";

export class ChartControllerForReactionsFirstOrder implements IChartController {

    private dataSeriesConcentrationOfAandB: any = {};
    private dataA: any[] = [];
    private dataB: any[] = [];
    private chart: ECharts;
    private num_a: number[];
    private num_b: number[];
    private indiceX: number = 0;

    constructor(chart: ECharts, concentrationOfAandB: Array<Array<number>>) {
        this.chart = chart;
        this.num_a = concentrationOfAandB[0];
        this.num_b = concentrationOfAandB[1];
    }

    private getDataSeriesConcetrationOfAandB(): any {
        return {
            concentrationOfA: [
              this.indiceX,
              this.num_a.shift()
            ],
            concentrationOfB: [
              this.indiceX++,
              this.num_b.shift()
            ]
        };
    }

    private reactionDuration(): number {
        return this.num_a.length*2000;
    }

    private addSeriesInChart(): void {
        this.dataSeriesConcentrationOfAandB = this.getDataSeriesConcetrationOfAandB();
        this.dataA.push(this.dataSeriesConcentrationOfAandB.concentrationOfA);
        this.dataB.push(this.dataSeriesConcentrationOfAandB.concentrationOfB);
        this.chart.setOption({
            series: [{
                data: this.dataA
              },
              {
                data: this.dataB
              }
            ]
        });
    }
    public animateChart(): void {
        let intervalo = setInterval(this.addSeriesInChart.bind(this), 1900);
        setTimeout(function() {
            clearInterval(intervalo);
        }, this.reactionDuration());
    }
}