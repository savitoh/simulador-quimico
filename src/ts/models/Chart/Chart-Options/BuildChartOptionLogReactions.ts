import {IBuildChartOption} from "./IBuildChartOption";
import {DefaultOptions} from "./DefaultOptions";

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

    private buidBaseOptions(): void {
      const title = "Concentração de A em escala Log";
      DefaultOptions.baseOption.title.text = title;
      DefaultOptions.baseOption.legend.data = ['[A]'];
      DefaultOptions.baseOption.toolbox.feature.dataView.lang[0] = title;
      DefaultOptions.baseOption.toolbox.feature.dataView.optionToContent = this.formatDataTableForLogReactions;
      DefaultOptions.baseOption.yAxis.type = 'log';
      DefaultOptions.baseOption.yAxis.nameGap = 32;
      delete DefaultOptions.baseOption.yAxis.min;
      delete DefaultOptions.baseOption.yAxis.max;
      DefaultOptions.baseOption.series = this.seriesOption;
    }

    private  buidMediaOptions(): void {
      const titleResponsive = "Log Concentração de A";
      DefaultOptions.media[0].option.title.text = titleResponsive;
      delete DefaultOptions.media[0].option.yAxis.interval;
      DefaultOptions.media[0].option.yAxis.nameLocation = "end";
      DefaultOptions.media[0].option.yAxis.nameRotate = 1;
      DefaultOptions.media[0].option.series = this.seriesMedia;
    }
    
    buildChartOption(): object {
        this.buidBaseOptions();
        this.buidMediaOptions();
        return DefaultOptions;
    };
}