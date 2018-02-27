import { IReaction } from "./IReaction";

export class ReactionAforB implements IReaction{

    private teta: number = 1;
    private frac_a: number = 1;
    private amostra_tot = 1;
    private t_max: number = 20;
    private N: number;
    private P_AB: number;
    private Na: number;
    private Nb: number;
    private A: number[];
    private B: number[];
    private num_a: number[];
    private num_b: number[];

    constructor(numberOfMolecules: number){
        this.N = numberOfMolecules;
        this.Na = this.N;
        this.Nb = 0;
        this.A = new Array(this.N).fill(0);
        this.B = new Array(this.N).fill(0);
        this.num_a = new Array(this.t_max + 1).fill(0);
        this.num_b = new Array(this.t_max + 1).fill(0);
        this.P_AB = Math.exp(-1 / this.teta);
    }

    private metropolis(): void {
        let random: number;
        let indice: number;
        for(let tm = 1; tm <= this.N; tm++) {
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

    private monteCarloSimluation(): void {
        let random: number;
        let indice: number;
        if(this.frac_a == 1) {
            this.A.fill(1);
            this.B.fill(0);
            this.num_a[0] = this.num_a[0] + (this.Na / this.N);
            this.num_b[0] = this.num_b[0] + (this.Nb / this.N);
            for(let j = 1; j <= this.t_max; j++){
                this.metropolis();
                this.num_a[j] = this.num_a[j] + (this.Na / this.N);
                this.num_b[j] = this.num_b[j] + (this.Nb / this.N);
            }
        } else {
            this.A.fill(0);
            this.B.fill(1);
            this.Na = 0;
            this.Na = this.N;
            while(this.Na < (this.frac_a * this.N)){
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
        this.num_a = this.num_a.map(it => it / this.amostra_tot);
        this.num_b = this.num_b.map(it => it / this.amostra_tot);
    }

    public startReaction(): void {
        this.monteCarloSimluation();
    }

    public getConcetrations(): Array<Array<number>>{
        return [this.num_a, this.num_b];
    }
}