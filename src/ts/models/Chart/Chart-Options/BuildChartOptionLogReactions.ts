import {IBuildChartOption} from "./IBuildChartOption";
import {baseOptions} from "./BaseOptions";

export class BuildChartOptionLogReactions implements IBuildChartOption {
    
    private formatDataTableForLogReactions(opt: any) {
        let axisData = opt.xAxis[0].data;
        let series = opt.series;
        let table = '<table style="width:100%;text-align:center"><tbody><tr>' +
          '<td>Passo Monte Carlo</td>' +
          '<td>' + series[0].name + '</td>' +
          '</tr>';
        const tamanho = axisData.length;
        for (var i = 0, l = tamanho; i < l; i++) {
          let dataConcentrantionOfA = series[0].data[i];
          if(dataConcentrantionOfA) {
            table += '<tr>' +
              '<td>' + axisData[i] + '</td>' +
              '<td>' + parseFloat(dataConcentrantionOfA.slice(1)).toFixed(5)  + '</td>' +
              '</tr>';
          }
        }
        table += '</tbody></table>';
        return table;
    };

    private seriesOption = [{
        type: 'scatter',
        name: '[A]',
        showSymbol: true,
        smooth: true 
      }];

   
    private seriesMedia = [{
        radius: [20, '50%'],
        center: ['50%', '30%']
      }];

    
    buildChartOption(): object {
        const optionsChartLogReactions = baseOptions;
        const title = "Concentração de A em escala Log";
        const titleResponsive = "Log Concentração de A";
        optionsChartLogReactions.baseOption.title.text = title;
        optionsChartLogReactions.baseOption.legend.data = ['[A]'];
        optionsChartLogReactions.baseOption.toolbox.feature.dataView.lang[0] = title;
        optionsChartLogReactions.baseOption.yAxis.type = 'log';
        optionsChartLogReactions.baseOption.yAxis.nameGap = 32;
        delete optionsChartLogReactions.baseOption.yAxis.min;
        delete optionsChartLogReactions.baseOption.yAxis.max;
        optionsChartLogReactions.baseOption.toolbox.feature.dataView.optionToContent = this.formatDataTableForLogReactions;
        optionsChartLogReactions.baseOption.series = this.seriesOption;
        optionsChartLogReactions.media[0].option.title.text = titleResponsive;
        delete optionsChartLogReactions.media[0].option.yAxis.interval;
        optionsChartLogReactions.media[0].option.yAxis.nameLocation = "end";
        optionsChartLogReactions.media[0].option.yAxis.nameRotate = 1;
        optionsChartLogReactions.media[0].option.series = this.seriesMedia;
        return optionsChartLogReactions;
    };
}