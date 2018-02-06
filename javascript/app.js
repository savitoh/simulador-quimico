const teta = 1,
  frac_a = 1;
const amostra_tot = 1,
  t_max = 20;
const N = 100000;
let P_AB, Na, Nb, amostra;
let A = new Array(N).fill(0);
let B = new Array(N).fill(0);
let num_a = new Array(t_max + 1).fill(0);
let num_b = new Array(t_max + 1).fill(0);

P_AB = Math.exp(-1 / teta);

function metropolis() {
  for (tm = 1; tm <= N; tm++) {
    random = Math.random() * N + 1;
    var i = Math.floor(random);
    if (A[i] != 0) {
      random = Math.random();
      if (random <= P_AB) {
        A[i] = 0;
        Na = Na - 1;
        B[i] = 1;
        Nb = Nb + 1;
      }
    }
  }
}

for (i = 0; i < amostra_tot; i++) {
  if (frac_a == 1) {
    A.fill(1);
    Na = N;
    B.fill(0);
    Nb = 0;
    num_a[0] = num_a[0] + (Na / N);
    num_b[0] = num_b[0] + (Nb / N);
    for (j = 1; j <= t_max; j++) {
      metropolis();
      num_a[j] = num_a[j] + (Na / N);
      num_b[j] = num_b[j] + (Nb / N);
    }
  } else {
    A.fill(0);
    B.fill(1);
    Na = 0;
    Nb = N;
    while (Na < (frac_a * N)) {
      random = Math.random() * N + 1;
      indice = Math.floor(random);
      if (A[indice] == 0) {
        A[indice] = 1;
        B[indice] = 0;
        Na = Na + 1;
        Nb = Nb - 1;
      }
    }
  }
}
num_a = num_a.map(it => it / amostra_tot);
num_b = num_b.map(it => it / amostra_tot);

function getObjectConcentrationOfAandB() {
  return {
    concentrationOfA: [
      indiceX,
      num_a.shift()
    ],
    concentrationOfB: [
      indiceX++,
      num_b.shift()
    ]
  }
}

var concentrationOfAandB = [];
var data4 = [];
var data5 = [];
var indiceX = 0;

let option = {
  title: {
    text: 'Concentração de A e B em Função de passos Monte Carlo'
  },
  tooltip: {
    show: true,
    trigger: 'axis'
  },
  legend: {
    x: 220,
    y: 40,
    data: ['Concentração de A', 'Concentração de B']
  },
  toolbox: {
    show: true,
    feature: {
      dataView: {
        title: 'Tabela de Dados',
        lang: ['Concentração de A e B em Função de passos Monte Carlo', 'Voltar', 'Atualizar'],
        optionToContent: function(opt) {
          var axisData = opt.xAxis[0].data;
          var series = opt.series;
          var table = '<table style="width:100%;text-align:center"><tbody><tr>' +
            '<td>Passo Monte Carlo</td>' +
            '<td>' + series[0].name + '</td>' +
            '<td>' + series[1].name + '</td>' +
            '</tr>';
          for (var i = 0, l = axisData.length; i < l; i++) {
            table += '<tr>' +
              '<td>' + axisData[i] + '</td>' +
              '<td>' + series[0].data[i] + '</td>' +
              '<td>' + series[1].data[i] + '</td>' +
              '</tr>';
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
    type: 'value',
    scale: true,
    boundaryGap: false,
    min: 0,
    max: 20
  },
  yAxis: {
    name: 'Concentração',
    type: 'value',
    scale: true,
    min: 0,
    max: 1
  },
  series: [{
      name: 'Concentração de A',
      type: 'scatter',
      showSymbol: true,
      smooth: true,
      animationDuration: 1000
    },
    {
      name: 'Concentração de B',
      type: 'scatter',
      showSymbol: true,
      smooth: true,
      animationDuration: 1000
    }
  ]
};
let theme = {
  color: ['#26B99A', '#34495E', '#BDC3C7', '#3498DB'],
  title: {
    textStyle: {
      fontWeight: 'normal',
      color: '#408829'
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

// use configuration item and data specified to show chart
let myChart = echarts.init(document.getElementById('main'), theme);
myChart.setOption(option);
let intervalo = setInterval(function() {
  concentrationOfAandB = getObjectConcentrationOfAandB();
  data4.push(concentrationOfAandB.concentrationOfA);
  data5.push(concentrationOfAandB.concentrationOfB);
  myChart.setOption({
    series: [{
        data: data5
      },
      {
        data: data4
      }
    ]
  });
}, 1900);
setTimeout(function() {
  clearInterval(intervalo);
}, 2000 * num_a.length);
