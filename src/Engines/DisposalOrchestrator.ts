import { IService } from "./IService";

export class DisposalOrchestrator {
    //can either make this coupled, or make it uncoupled, and register things to it thtough an interface
    //gonna try option 2, a little concerned but this monster has me lit ;)

    private static _instance: DisposalOrchestrator = new DisposalOrchestrator();
    //private objects: [string, Coordinate];
    private services: IService[] = [];
  
    private constructor() {
        if(DisposalOrchestrator._instance){
            throw new Error("Error: Instantiation failed: Use GameEngine.getInstance() instead of new.");
        }
        DisposalOrchestrator._instance = this;
    }
 
    public static getInstance(): DisposalOrchestrator
    {
        return DisposalOrchestrator._instance;
    }
}