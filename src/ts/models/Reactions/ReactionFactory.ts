import { IReaction } from "./IReaction";
import { IAttributesReaction } from "./IAttributesReaction";
import { IreversibleFirstOrderReaction } from "./IreversibleFirstOrderReaction";
import { ReversibleFirstOrderReaction } from "./ReversibleFirstOrderReaction";

export class ReactionFactory {

    public getReaction(typeOfReaction: String, atributesReaction: IAttributesReaction): IReaction{
        if(typeOfReaction=="reversibleFirstOrderReaction")
            return new ReversibleFirstOrderReaction(atributesReaction);
        else if (typeOfReaction=="ireversibleFirstOrderReaction")
            return new IreversibleFirstOrderReaction(atributesReaction);
        throw new Error('not implemented');
    }
}