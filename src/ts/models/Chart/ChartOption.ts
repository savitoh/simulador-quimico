let optionsBase = {
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
            lang: ['Concentração de A e B em Função de passos Monte Carlo', 'Voltar', 'Atualizar']
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
    const optionsChartSecondOrderReaction = optionsBase;
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
        return optionsBase;
    else
        return buildChartOptionSecondOrderReaction();
}

export { getChartOptions };