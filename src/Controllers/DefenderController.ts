import { MapObject } from '../GameObjects/MapObject';
import { GameMap } from '../Engines/GameMap';
import { RouteController } from './RouteController';
export class DefenderController extends RouteController{

    public decide(){
        if(!this.routeComplete()){
            this.followRoute();
        }else{
            //look for runner to tackle
            let runners = GameMap.getInstance().getAllOfType('runner');
            let target = runners[0];

            //target located now go towards it
            this.subject.angle = Math.atan2(target.object.y - this.subject.y, target.object.x - this.subject.x);

        }
    }

    public collide(){
        this.subject.speed = this.originalSpeed/2;
    }

    private calculateDistance(object: MapObject): number{
        return Math.sqrt(Math.pow(this.subject.x - object.object.x, 2) + Math.pow(this.subject.y - object.object.y, 2));
    }
}