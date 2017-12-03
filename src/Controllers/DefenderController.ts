import { ScoreKeeper } from '../Engines/ScoreKeeper';
import { GameEngine } from '../Engines/GameEngine';
import { MapObject } from '../GameObjects/MapObject';
import { GameMap } from '../Engines/GameMap';
import { RouteController } from './RouteController';
import { CollidableGameObject } from "../GameObjects/CollidableGameObject";
export class DefenderController extends RouteController {
    private speed: number = 1;
    private fps: number = 5;
    private counter: number = 0;
    public juked: number = 0;

    public decide(){
        if(this.colliding == false) {this.subject.speed = this.originalSpeed;}
        if(this.counter % this.fps == 0){
            if(!this.routeComplete()){
                this.followRoute();
            }else{
                if(this.juked <= 0){
                    //look for runner to tackle
                    let runners = GameMap.getInstance().getAllOfType('runner');
                    let target = runners[0];

                    let distance = this.calculateDistance(target);
                    console.log(distance);
                    //based on distance we want to aim in front of the runner
                    //add some randomness into how good the players are at estimating maybe?
                    let newTargetX =  distance/2.5 * Math.cos(target.object.angle);
                    let newTargetY =  distance/2.5 * Math.sin(target.object.angle);
                    

                    //target located now go towards it
                    this.subject.angle = Math.atan2((target.object.y + newTargetY) - this.subject.y, (target.object.x + newTargetX) - this.subject.x);
                }
            }
        }
        if(this.juked > 0) this.juked--;
    }

    public collide(object: CollidableGameObject){
        if(object.type == 'blocker'){
            this.colliding = true;
            this.subject.speed = this.originalSpeed/3;
            this.endRoute();
            //console.log('being slowed by a blocker!');
        }
        if(object.type == 'defender'){
            this.endRoute();
            //console.log('being slowed by a blocker!');
        }
        if(object.type == 'runner'){
            GameEngine.getInstance().stop();
            ScoreKeeper.getInstance().resetScore();
        }
    }

}