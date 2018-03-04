import {ChartController} from './ChartControllerForReactionsFirstOrder';
import {IChartController} from './IChartController';
import { ECharts } from 'echarts';
export class ChartControllerFactory {
    getChartController(typeOfReaction: string, chart: ECharts, concentrationOfAandB: Array<Array<number>>): IChartController{
        if(typeOfReaction=="reversibleFirstOrderReaction" || typeOfReaction == "ireversibleFirstOrderReaction")
            return new ChartController(chart, concentrationOfAandB);
        return new ChartController(chart, concentrationOfAandB);
    }
}