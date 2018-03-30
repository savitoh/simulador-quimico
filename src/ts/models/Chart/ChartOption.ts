let baseOptions = {
    baseOption: {
      title: {
        text: 'Concentração de A e B em Função de passos Monte Carlo'
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      legend: {
        x: 'center',
        y: 35,
        data: ['[A]', '[B]']
      },
      toolbox: {
        show: true,
        feature: {
          dataView: {
            title: 'Tabela de Dados',
            lang: ['Concentração de A e B em Função de passos Monte Carlo', 'Voltar', 'Atualizar'],
            optionToContent: function(opt: any) {
              var axisData = opt.xAxis[0].data;
              var series = opt.series;
              var table = '<table style="width:100%;text-align:center"><tbody><tr>' +
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
                    '<td>' + dataConcentrantionOfA.slice(1) + '</td>' +
                    '<td>' + dataConcentrantionOfB.slice(1) + '</td>' +
                    '</tr>';
                }
              }
              table += '</tbody></table>';
              return table;
            },
          },
          saveAsImage: {
            show: true,
            pixelRatio: 2,
            title: 'Salvar como Imagem'
          }
        }
      },
      xAxis: {
        name: "Passos Monte Carlo",
        nameLocation: "center",
        nameGap: 24,
        type: 'value',
        scale: true,
        boundaryGap: false,
        data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        min: 0,
        max: 20
      },
      calculable: true,
      yAxis: {
        name: 'Concentração',
        nameRotate: 90,
        nameLocation: "center",
        nameGap: 30,
        type: 'value',
        scale: true,
        min: 0,
        max: 1
      },
      series: [{
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
      ]
    },
    media: [{
      query: {
        maxWidth: 500
      },
      option: {
        title: {
          text: 'Concentração de A e B',
          y: 25,
          textStyle: {
            fontSize: 14
          }
        },
        yAxis: {
          interval: 1,
          nameGap: 10
        },
        xAxis: {
          nameGap: 19
        },
        legend: {
          right: 0,
          top: '15%',
          orient: 'vertical'
        },
        series: [{
            radius: [20, '50%'],
            center: ['50%', '30%']
          },
          {
            radius: [30, '50%'],
            center: ['50%', '75%']
          }
        ]
      }
    }]
  };

function buildChartOptionSecondOrderReaction() {
    const optionsChartSecondOrderReaction = baseOptions;
    const title: string = "Concentração de A, B e C em função de passos Monte Carlo";
    const objectSeriesElementC = {
        name: '[C]',
        type: 'scatter',
        showSymbol: true,
        smooth: true
    };
    optionsChartSecondOrderReaction.baseOption.title.text = "'Concentração de A, B e C";
    optionsChartSecondOrderReaction.baseOption.legend.data.push('[C]');
    optionsChartSecondOrderReaction.baseOption.toolbox.feature.dataView.lang[0] = title;
    optionsChartSecondOrderReaction.baseOption.series.push(objectSeriesElementC);
    return optionsChartSecondOrderReaction;
}


function getChartOptions(typeOfReaction: String): object {
    if(typeOfReaction == "reversibleFirstOrderReaction" || typeOfReaction == "ireversibleFirstOrderReaction") 
        return baseOptions;
    else
        return buildChartOptionSecondOrderReaction();
}

export { getChartOptions };