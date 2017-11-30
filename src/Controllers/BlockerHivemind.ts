import { Player } from "../GameObjects/Samples/Player";
import { BottomLockPositioningDecorator } from "../ViewObjects/PositioningDecorators/BottomLockPositioningDecorator";

export class BlockerHivemind{
    private static _instance: BlockerHivemind = new BlockerHivemind();
    
            
            private blocks: Block[] = [];
            
        
            private constructor() {
                if(BlockerHivemind._instance){
                    throw new Error("Error: Instantiation failed: Use BlockerHivemind.getInstance() instead of new.");
                }
                BlockerHivemind._instance = this;
            }
        
            public static getInstance(): BlockerHivemind
            {
                return BlockerHivemind._instance;
            }

            public nowBlocking(blocker: Player, defender: Player){
                let alreadyInaBlock: boolean = false;
                this.blocks.forEach(block => {
                    if(block[0] == blocker){
                        alreadyInaBlock = true;
                    }
                    if(block[1] == defender){
                        alreadyInaBlock = true;
                    }
                });

                if(!alreadyInaBlock){
                    //console.log("BLOCK ADDED!!!");
                    this.blocks.push([blocker, defender]);
                    //console.log("blocks now",this.blocks);
                }
                //console.log("no add");
            }

            public removeBlock(blocker: Player){
                this.blocks = this.blocks.filter(block => {
                    if(block[0] != blocker) return block;
                })
            }

            public getBlockeesImNotBlocking(blocker: Player){
                //console.log("before", this.blocks);
                let blocks = this.blocks.filter(block => {
                    if(block[0] != blocker) return block;
                });
                //console.log("blocks", blocks);
                if(blocks.length > 0){
                    return blocks.map(block => {
                        return block[1];
                    });
                }else return [];
            }
    
}
export type Block = [Player, Player];