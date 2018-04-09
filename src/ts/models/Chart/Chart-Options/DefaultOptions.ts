let DefaultOptions = {
    baseOption: {
      title: {
        text: ''
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      legend: {
        x: 'center',
        y: 35,
        data: ['']
      },
      toolbox: {
        show: true,
        feature: {
          dataView: {
            title: 'Tabela de Dados',
            lang: ['', 'Voltar', 'Atualizar'],
            optionToContent: function(opt: any) {

            }
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
      series: [{}]
    },
    media: [{
      query: {
        maxWidth: 500
      },
      option: {
        title: {
          text: '',
          y: 20,
          textStyle: {
            fontSize: 14
          }
        },
        yAxis: {
          nameRotate: 0,
          nameLocation: '',
          interval: 0,
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
        series: [{}]
      }
    }]
  };

  export { DefaultOptions };