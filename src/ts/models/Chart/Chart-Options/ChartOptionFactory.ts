import { IBuildChartOption } from "./IBuildChartOption";
import { BuildChartOptionFirstOrderReactions } from "./BuildChartOptionFirstOrderReactions";
import { BuildChartOptionLogReactions } from "./BuildChartOptionLogReactions";

export class ChartOptionFactory {

  public getChartOptions(typeOfReaction: String): IBuildChartOption {
    if(typeOfReaction == "reversibleFirstOrderReaction" || 
            typeOfReaction == "ireversibleFirstOrderReaction") 
      return new BuildChartOptionFirstOrderReactions();
    
    else if(typeOfReaction == "logireversibleFirstOrderReaction" || 
            typeOfReaction == "logreversibleFirstOrderReaction")
      return new BuildChartOptionLogReactions();
    
      throw new Error('not implemented');
  }
}

