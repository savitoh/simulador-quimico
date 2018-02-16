const teta = 1,
  frac_a = 1;
const amostra_tot = 1,
  t_max = 20;
let N;
let P_AB, Na, Nb, amostra;
let i, j, tm, random;
let A = new Array(N).fill(0);
let B = new Array(N).fill(0);
let num_a = new Array(t_max + 1).fill(0);
let num_b = new Array(t_max + 1).fill(0);

function setVariable(numeroMoleculas){
  N = numeroMoleculas;
}
function calculateProbabilidadeAB() {
  P_AB = Math.exp(-1 / teta);
}

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


function monteCarloSimulation() {
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
}

class Simulator {

  constructor(N) {
    this.N = N;
    calculateProbabilidadeAB();
    setVariable(N);
  }
  execulteSimulation() {
    monteCarloSimulation();
  }

  getNum_a() {
    return num_a;
  }
  getNum_b() {
    return num_b;
  }
}
export {
  Simulator
};
