import { MapObject } from '../GameObjects/MapObject';
import { GameMap } from '../Engines/GameMap';
import { RouteController } from './RouteController';
import { CollidableGameObject } from "../GameObjects/CollidableGameObject";
import { BlockerHivemind } from './BlockerHivemind';
import { Player } from '../GameObjects/Samples/Player';
export class BlockerController extends RouteController {

    public decide(){
        if(this.colliding == false) {
            this.subject.speed = this.originalSpeed;
            BlockerHivemind.getInstance().removeBlock(this.subject);
        }
        if(!this.routeComplete()){
            this.followRoute();
        }else{
            //look for defenders to tackle
            let defenders = GameMap.getInstance().getAllOfType('defender');
            //remove all already blocked ones here
            let blockedDefenders: Player[] = BlockerHivemind.getInstance().getBlockeesImNotBlocking(this.subject);
            //console.log("blocked", blockedDefenders);
            let unblockedDefenders = defenders.filter(x => blockedDefenders.indexOf((x.object as Player)) == -1);

            //console.log(defenders);
            //console.log("unblocked", unblockedDefenders);
            
            let min = Number.MAX_VALUE;
            let target;
            unblockedDefenders.forEach(element => {
                let tmp = this.calculateDistance(element);
                if (tmp < min){
                    min = tmp;
                    target = element;
                }
            });

            //target located now go towards it
            this.subject.angle = Math.atan2(target.object.y - this.subject.y, target.object.x - this.subject.x);

        }
    }

    public collide(object: CollidableGameObject){
        if(object.type == 'defender'){
            this.colliding = true;
            this.subject.speed = this.originalSpeed/2;
            BlockerHivemind.getInstance().nowBlocking(this.subject, object as Player);
            this.endRoute();
            //console.log('harassing a defender!');
        }
        if(object.type == 'blocker'){
            this.endRoute();
            //console.log('harassing a defender!');
        }
    }

    
}