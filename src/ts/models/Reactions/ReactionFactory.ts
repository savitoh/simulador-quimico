import { IReaction } from "./IReaction";
import { IreversibleFirstOrderReaction } from './IreversibleFirstOrderReaction';
import { ReversibleFirstOrderReaction } from './ReversibleFirstOrderReaction';
export class ReactionFactory {

    public getReaction(typeOfReaction: String, numberOfMolecules: number): IReaction{
        if(typeOfReaction=="reversibleFirstOrderReaction")
            return new ReversibleFirstOrderReaction(numberOfMolecules);
        else
            return new IreversibleFirstOrderReaction(numberOfMolecules);
    }
}