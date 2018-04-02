import { IReaction } from "./IReaction";
import { IAttributesReaction } from "./IAttributesReaction";
import { IreversibleFirstOrderReaction } from "./IreversibleFirstOrderReaction";
import { ReversibleFirstOrderReaction } from "./ReversibleFirstOrderReaction";

export class ReactionFactory {

    public getReaction(typeOfReaction: String, atributesReaction: IAttributesReaction): IReaction{
        if(typeOfReaction=="reversibleFirstOrderReaction" || 
                    typeOfReaction=="logreversibleFirstOrderReaction")
            return new ReversibleFirstOrderReaction(atributesReaction);

        else if (typeOfReaction=="ireversibleFirstOrderReaction" || 
                    typeOfReaction=="logireversibleFirstOrderReaction")
            return new IreversibleFirstOrderReaction(atributesReaction);
            
        throw new Error('not implemented');
    }
}