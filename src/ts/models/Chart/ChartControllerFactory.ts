import {ChartControllerForReactionsFirstOrder} from './ChartControllerForReactionsFirstOrder';
import {IChartController} from './IChartController';
import { ECharts } from 'echarts';

export class ChartControllerFactory {
    getChartController(typeOfReaction: string, chart: ECharts, concentrationOfAandB: Array<Array<number>>): IChartController{
        if(typeOfReaction=="reversibleFirstOrderReaction" || typeOfReaction == "ireversibleFirstOrderReaction")
            return new ChartControllerForReactionsFirstOrder(chart, concentrationOfAandB);
        return new ChartControllerForReactionsFirstOrder(chart, concentrationOfAandB);
    }
}