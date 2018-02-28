let echart = require('echarts/lib/echarts');
require('echarts/lib/chart/scatter');
require('echarts/lib/component/title');
require('echarts/lib/component/toolbox');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/legendScroll');


let theme = {
  color: ['#26B99A', '#34495E', '#BDC3C7', '#3498DB', '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'],
  title: {
    textStyle: {
      fontWeight: 'normal',
      color: '#408829',
    }
  },
  dataRange: {
    color: ['#1f610a', '#97b58d']
  },
  toolbox: {
    color: ['#408829', '#408829', '#408829', '#408829']
  },
  tooltip: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    axisPointer: {
      type: 'line',
      lineStyle: {
        color: '#408829',
        type: 'dashed'
      }
    }
  },
  categoryAxis: {
    axisLine: {
      lineStyle: {
        color: '#333'
      },
      splitLine: {
        lineStyle: {
          color: ['#eee']
        }
      }
    }
  },
  valueAxis: {
    axisLine: {
      lineStyle: {
        color: '#333'
      },
    },
    splitArea: {
      show: true,
      areaStyle: {
        color: ['rgba(250, 250, 250, 0.1)', 'rgba(200, 200, 200, 0.1)']
      }
    },
    splitLine: {
      lineStyle: {
        color: ['#eee']
      }
    }
  },
  grid: {
    borderWidth: 0
  }
};

let option = {
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
        smooth: true,
        animationDuration: 1000
      },
      {
        name: '[B]',
        type: 'scatter',
        showSymbol: true,
        smooth: true,
        animationDuration: 1000
      }
    ]
  },
  media: [{
    query: {
      maxWidth: 500
    },
    option: {
      title: {
        y: 25,
        textStyle: {
          fontSize: 12
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

export {
  echart,
  theme,
  option
};
