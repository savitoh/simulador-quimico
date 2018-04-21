import { IChartController } from './IChartController';
import { ChartControllerReactionsFirstOrder } from './ChartControllerReactionsFirstOrder';
import { ChartControllerReactionsLog } from './ChartControllerReactionsLog';

import { ECharts } from 'echarts';

export class ChartControllerFactory {

    getChartController(typeOfReaction: string, chart: ECharts, concentrationOfAandB: Array<Array<number>>): IChartController{
        if(typeOfReaction=="reversibleFirstOrderReaction" || 
                typeOfReaction == "ireversibleFirstOrderReaction")
            return new ChartControllerReactionsFirstOrder(chart, concentrationOfAandB);
        
        else if(typeOfReaction=="logireversibleFirstOrderReaction" || 
                typeOfReaction == "logreversibleFirstOrderReaction")
            return new ChartControllerReactionsLog(chart, concentrationOfAandB);
            
        throw new Error('not implemented');
    }
}