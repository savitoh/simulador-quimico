"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChartController = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ChartController =
/*#__PURE__*/
function () {
  function ChartController(chart, num_a, num_b) {
    _classCallCheck(this, ChartController);

    Object.defineProperty(this, "concentrationOfAandB", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "dataA", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "dataB", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "chart", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "num_a", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "num_b", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "indiceX", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 0
    });
    this.chart = chart;
    this.num_a = num_a;
    this.num_b = num_b;
  }

  _createClass(ChartController, [{
    key: "getConcetrationOfAandB",
    value: function getConcetrationOfAandB() {
      return {
        concentrationOfA: [this.indiceX, this.num_a.shift()],
        concentrationOfB: [this.indiceX++, this.num_b.shift()]
      };
    }
  }, {
    key: "sum",
    value: function sum() {
      this.concentrationOfAandB = this.getConcetrationOfAandB();
      this.dataA.push(this.concentrationOfAandB.concentrationOfA);
      this.dataB.push(this.concentrationOfAandB.concentrationOfB);
      this.chart.setOption({
        series: [{
          data: this.dataA,
          animationDuration: 1000
        }, {
          data: this.dataB,
          animationDuration: 1000
        }]
      });
      console.log("oi");
    }
  }, {
    key: "animateChart",
    value: function animateChart() {
      var intervalo = setInterval(this.sum.bind(this), 1900);
      setTimeout(function () {
        clearInterval(intervalo);
      }, 40000);
    }
  }]);

  return ChartController;
}();

exports.ChartController = ChartController;