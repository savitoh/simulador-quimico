import {IBuildChartOption} from "./IBuildChartOption";
import {baseOptions} from "./BaseOptions";

export class BuildChartOptionFirstOrderReactions implements IBuildChartOption {
    
    private formatDataTableForReactionsFirstOrder(opt: any) {
        let axisData = opt.xAxis[0].data;
        let series = opt.series;
        let table = '<table style="width:100%;text-align:center"><tbody><tr>' +
          '<td>Passo Monte Carlo</td>' +
          '<td>' + series[0].name + '</td>' +
          '<td>' + series[1].name + '</td>' +
          '</tr>';
        const tamanho = axisData.length;
        for (var i = 0, l = tamanho; i < l; i++) {
          let dataConcentrantionOfA = series[0].data[i];
          let dataConcentrantionOfB = series[1].data[i];
          if(dataConcentrantionOfA && dataConcentrantionOfB) {
            table += '<tr>' +
              '<td>' + axisData[i] + '</td>' +
              '<td>' + parseFloat(dataConcentrantionOfA.slice(1)).toFixed(5) + '</td>' +
              '<td>' + parseFloat(dataConcentrantionOfB.slice(1)).toFixed(5) + '</td>' +
              '</tr>';
          }
        }
        table += '</tbody></table>';
        return table;
    };

    private seriesOption = [{
        name: '[A]',
        type: 'scatter',
        showSymbol: true,
        smooth: true       
      },
      {
        name: '[B]',
        type: 'scatter',
        showSymbol: true,
        smooth: true
      }
    ];

    private seriesMedia = [{
        radius: [20, '50%'],
        center: ['50%', '30%']
      },
      {
        radius: [30, '50%'],
        center: ['50%', '75%']
    }];
    
    buildChartOption(): object {
        const optionsChartFirstOrderReactions = baseOptions;
        const title = "Concentração de A e B em Função de passos Monte Carlo";
        const titleResponsive = "Concentração de A e B"; 
        optionsChartFirstOrderReactions.baseOption.title.text = title;
        optionsChartFirstOrderReactions.baseOption.legend.data = ['[A]', '[B]'];
        optionsChartFirstOrderReactions.baseOption.toolbox.feature.dataView.lang[0] = title;
        optionsChartFirstOrderReactions.baseOption.yAxis.type = 'value';
        optionsChartFirstOrderReactions.baseOption.yAxis.max = 1;
        optionsChartFirstOrderReactions.baseOption.yAxis.min = 0;
        optionsChartFirstOrderReactions.baseOption.toolbox.feature.dataView.optionToContent = this.formatDataTableForReactionsFirstOrder;
        optionsChartFirstOrderReactions.baseOption.series = this.seriesOption;
        optionsChartFirstOrderReactions.media[0].option.title.text = titleResponsive;
        optionsChartFirstOrderReactions.media[0].option.yAxis.interval = 1;
        optionsChartFirstOrderReactions.media[0].option.series = this.seriesMedia;
        optionsChartFirstOrderReactions.media[0].option.yAxis.nameLocation = "center";
        optionsChartFirstOrderReactions.media[0].option.yAxis.nameRotate = 90;
        return optionsChartFirstOrderReactions;
    };
}