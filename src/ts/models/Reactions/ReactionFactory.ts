import { IReaction } from "./IReaction";
import { ReactionAforBIreversible} from './ReactionAforBIreversible';
import { ReactionAforBReversible} from './ReactionAforBReversible';
export class ReactionFactory {

    public getReaction(typeOfReaction: String, numberOfMolecules: number): IReaction{
        if(typeOfReaction=="reversibleFirstOrderReaction")
            return new ReactionAforBReversible(numberOfMolecules);
        else
            return new ReactionAforBIreversible(numberOfMolecules);
    }
}