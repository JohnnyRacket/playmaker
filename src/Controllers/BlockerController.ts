import { MapObject } from '../GameObjects/MapObject';
import { GameMap } from '../Engines/GameMap';
import { RouteController } from './RouteController';
import { CollidableGameObject } from "../GameObjects/CollidableGameObject";
export class BlockerController extends RouteController {

    public decide(){
        if(this.colliding == false) this.subject.speed = this.originalSpeed;
        if(!this.routeComplete()){
            this.followRoute();
        }else{
            //look for defenders to tackle
            let defenders = GameMap.getInstance().getAllOfType('defender');
            //console.log(defenders);
            let min = Number.MAX_VALUE;
            let target;
            defenders.forEach(element => {
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
            this.endRoute();
            //console.log('harassing a defender!');
        }
    }

    private calculateDistance(object: MapObject): number{
        return Math.sqrt(Math.pow(this.subject.x - object.object.x, 2) + Math.pow(this.subject.y - object.object.y, 2));
    }
}