"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactionAforBIreversible = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ReactionAforBIreversible =
/*#__PURE__*/
function () {
  function ReactionAforBIreversible(numberOfMolecules) {
    _classCallCheck(this, ReactionAforBIreversible);

    Object.defineProperty(this, "teta", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "frac_a", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "amostra_tot", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "t_max", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 20
    });
    Object.defineProperty(this, "N", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "P_AB", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "Na", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "Nb", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "A", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "B", {
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
    this.N = numberOfMolecules;
    this.Na = this.N;
    this.Nb = 0;
    this.A = new Array(this.N).fill(0);
    this.B = new Array(this.N).fill(0);
    this.num_a = new Array(this.t_max + 1).fill(0);
    this.num_b = new Array(this.t_max + 1).fill(0);
    this.P_AB = Math.exp(-1 / this.teta);
  }

  _createClass(ReactionAforBIreversible, [{
    key: "metropolis",
    value: function metropolis() {
      var random;
      var indice;

      for (var tm = 1; tm <= this.N; tm++) {
        random = Math.random() * this.N + 1;
        indice = Math.floor(random);

        if (this.A[indice] != 0) {
          random = Math.random();

          if (random <= this.P_AB) {
            this.A[indice] = 0;
            this.Na = this.Na - 1;
            this.B[indice] = 1;
            this.Nb = this.Nb + 1;
          }
        }
      }
    }
  }, {
    key: "monteCarloSimluation",
    value: function monteCarloSimluation() {
      var _this = this;

      var random;
      var indice;

      if (this.frac_a == 1) {
        this.A.fill(1);
        this.B.fill(0);
        this.num_a[0] = this.num_a[0] + this.Na / this.N;
        this.num_b[0] = this.num_b[0] + this.Nb / this.N;

        for (var j = 1; j <= this.t_max; j++) {
          this.metropolis();
          this.num_a[j] = this.num_a[j] + this.Na / this.N;
          this.num_b[j] = this.num_b[j] + this.Nb / this.N;
        }
      } else {
        this.A.fill(0);
        this.B.fill(1);
        this.Na = 0;
        this.Na = this.N;

        while (this.Na < this.frac_a * this.N) {
          random = Math.random() * this.N + 1;
          indice = Math.floor(random);

          if (this.A[indice] == 0) {
            this.A[indice] = 1;
            this.B[indice] = 0;
            this.Na = this.Na + 1;
            this.Nb = this.Nb - 1;
          }
        }
      }

      this.num_a = this.num_a.map(function (it) {
        return it / _this.amostra_tot;
      });
      this.num_b = this.num_b.map(function (it) {
        return it / _this.amostra_tot;
      });
    }
  }, {
    key: "startReaction",
    value: function startReaction() {
      this.monteCarloSimluation();
    }
  }, {
    key: "getConcetrations",
    value: function getConcetrations() {
      return [this.num_a, this.num_b];
    }
  }]);

  return ReactionAforBIreversible;
}();

exports.ReactionAforBIreversible = ReactionAforBIreversible;