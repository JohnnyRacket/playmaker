import { StagedReference } from './StagedReference';
export class ReferenceManager{
    private static _instance: ReferenceManager = new ReferenceManager();
    private stagedReferences: StagedReference[] =  [];

    private constructor(){
        if(ReferenceManager._instance){
            throw new Error("Error: Instantiation failed: .getInstance() instead of new.");
        }
        ReferenceManager._instance = this;
    }

    public static getInstance(): ReferenceManager{
        return ReferenceManager._instance;
    }

    public getReferencesForStage(stage: string){//accessing these refs will remove them
        let stageReferences = this.stagedReferences.filter( object => {
            if(object.stage == stage) return object;
        });
        //remove the refs
        let newStagedRefs: StagedReference[] = this.stagedReferences.filter( object => {
            if(object.stage != stage) return object;
        });
        this.stagedReferences = newStagedRefs;
        return stageReferences.map(object => {
            return object.object;
        });
    }

    public addReferenceToStage(object: Object, stage: string){
        let reference = new StagedReference(object,stage);//might need to rework this to pass in a SR to start to properly link
        this.stagedReferences.push(reference);
    }
}