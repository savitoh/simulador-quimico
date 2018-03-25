import { IReaction } from "./IReaction";
import { DefaultAttributesReaction } from "./DefaultAttributesReaction";
import { IAttributesReaction } from "./IAttributesReaction";

export class IreversibleFirstOrderReaction implements IReaction{

    private atributesReaction: IAttributesReaction;
    private P_AB: number;
    private Na: number;
    private Nb: number;
    private A: number[];
    private B: number[];
    private num_a: number[];
    private num_b: number[];

    constructor(atributesReaction: IAttributesReaction){
        this.atributesReaction = atributesReaction;
        this.Na = this.atributesReaction.numberOfMolecules;
        this.Nb = 0;
        this.A = new Array(this.atributesReaction.numberOfMolecules).fill(0);
        this.B = new Array(this.atributesReaction.numberOfMolecules).fill(0);
        this.num_a = new Array(DefaultAttributesReaction.t_max + 1).fill(0);
        this.num_b = new Array(DefaultAttributesReaction.t_max + 1).fill(0);
        this.P_AB = Math.exp(-1 / this.atributesReaction.temperatura);
    }

    private metropolis(): void {
        let random: number;
        let index: number;
        const length = this.atributesReaction.numberOfMolecules;
        for(let i = 1; i <= length; i++) {
            random = Math.random() * this.atributesReaction.numberOfMolecules + 1;
            index = Math.floor(random);
            if (this.A[index] != 0) {
                random = Math.random();
                if (random <= this.P_AB) {
                  this.A[index] = 0;
                  this.Na -= 1;
                  this.B[index] = 1;
                  this.Nb += 1;
                }
            }
        }
    }

    private monteCarloSimluation(): void {
        let random: number;
        let index: number;
        if(DefaultAttributesReaction.frac_a == 1) {
            this.A.fill(1);
            this.B.fill(0);
            this.num_a[0] +=  this.Na / this.atributesReaction.numberOfMolecules;
            this.num_b[0] +=  this.Nb / this.atributesReaction.numberOfMolecules;
            const length = DefaultAttributesReaction.t_max;
            for(let i = 1; i <= DefaultAttributesReaction.t_max; i++){
                this.metropolis();
                this.num_a[i] += this.Na / this.atributesReaction.numberOfMolecules;
                this.num_b[i] += this.Nb / this.atributesReaction.numberOfMolecules;
            }
        } else {
            this.A.fill(0);
            this.B.fill(1);
            this.Na = 0;
            this.Na = this.atributesReaction.numberOfMolecules;
            while(this.Na < (DefaultAttributesReaction.frac_a * this.atributesReaction.numberOfMolecules)){
                random = Math.random() * this.atributesReaction.numberOfMolecules + 1;
                index = Math.floor(random);
                if (this.A[index] == 0) {
                    this.A[index] = 1;
                    this.B[index] = 0;
                    this.Na += 1;
                    this.Nb -= 1;
                }
            }
        }
        this.num_a = this.num_a.map(it => it /DefaultAttributesReaction.amostra_tot);
        this.num_b = this.num_b.map(it => it /DefaultAttributesReaction.amostra_tot);
    }

    public startReaction(): void {
        this.monteCarloSimluation();
    }

    public getConcetrations(): Array<Array<number>>{
        return [this.num_a, this.num_b];
    }
}