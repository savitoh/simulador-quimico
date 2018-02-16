let concentrationOfAandB = [];
let num_a = [];
let num_b = [];
let dataA = [];
let dataB = [];
let indiceX = 0;

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

function setVariable(numa, numb) {
  num_a = numa;
  num_b = numb;
}

class ChartController {

  constructor(chart, num_a, num_b) {
    this.mychart = chart;
    this.num_a = num_a;
    this.num_b = num_b;
    setVariable(num_a, num_b);
    this.animateChart = this.animateChart.bind(this);
  }

  animateChart() {
    let intervalo = setInterval(function() {
      concentrationOfAandB = getObjectConcentrationOfAandB();
      dataA.push(concentrationOfAandB.concentrationOfA);
      dataB.push(concentrationOfAandB.concentrationOfB);
      this.mychart.setOption({
        series: [{
            data: dataA,
            animationDuration: 1000
          },
          {
            data: dataB,
            animationDuration: 1000
          }
        ]
      });
    }.bind(this), 1900);
    setTimeout(function() {
      clearInterval(intervalo);
    }, 40000);
  }
}

export {
  ChartController
};
