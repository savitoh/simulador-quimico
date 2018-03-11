import { IReaction } from "./IReaction";
import { IAttributesReaction } from "./IAttributesReaction";


export class ReversibleFirstOrderReaction implements IReaction {

    private atributesReaction: IAttributesReaction
    private E_ba: number = 2;
    private tetaB: number;
    private frac_a: number = 1;
    private amostra_tot = 1;
    private t_max: number = 20;
    private P_AB: number;
    private P_BA: number;
    private Na: number;
    private Nb: number;
    private A: number[];
    private B: number[];
    private num_a: number[];
    private num_b: number[];

    constructor(atributesReaction: IAttributesReaction){
        this.atributesReaction = atributesReaction;
        this.Na = this.atributesReaction.numberOfMolecules;
        this.tetaB = this.atributesReaction.temperatura/this.E_ba;
        this.Na = this.atributesReaction.numberOfMolecules;
        this.Nb = 0;
        this.A = new Array(this.atributesReaction.numberOfMolecules).fill(0);
        this.B = new Array(this.atributesReaction.numberOfMolecules).fill(0);
        this.num_a = new Array(this.t_max + 1).fill(0);
        this.num_b = new Array(this.t_max + 1).fill(0);
        this.P_AB = Math.exp(-1 / this.atributesReaction.temperatura);
        this.P_BA = Math.exp(-1 / this.tetaB);
    }

    private metropolis(): void {
        let random: number;
        let indice: number;
        const tamanho = this.atributesReaction.numberOfMolecules;
        for(let i = 1; i <= tamanho; i++) {
            random = Math.random() * this.atributesReaction.numberOfMolecules + 1;
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
            random = Math.random() * this.atributesReaction.numberOfMolecules + 1;
            indice = Math.floor(random);
            if(this.B[indice] != 0) {
                random = Math.random();
                if (random <= this.P_BA) {
                  this.A[indice] = 1;
                  this.Na = this.Na + 1;
                  this.B[indice] = 0;
                  this.Nb = this.Nb - 1;
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
            this.num_a[0] = this.num_a[0] + (this.Na / this.atributesReaction.numberOfMolecules);
            this.num_b[0] = this.num_b[0] + (this.Nb / this.atributesReaction.numberOfMolecules);
            const tamanho = this.t_max;
            for(let i = 1; i <= tamanho; i++){
                this.metropolis();
                this.num_a[i] = this.num_a[i] + (this.Na / this.atributesReaction.numberOfMolecules);
                this.num_b[i] = this.num_b[i] + (this.Nb / this.atributesReaction.numberOfMolecules);
            }
        } else {
            this.A.fill(0);
            this.B.fill(1);
            this.Na = 0;
            this.Na = this.atributesReaction.numberOfMolecules;
            while(this.Na < (this.frac_a * this.atributesReaction.numberOfMolecules)){
                random = Math.random() * this.atributesReaction.numberOfMolecules + 1;
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