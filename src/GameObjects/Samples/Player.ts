import { GameEngine } from '../../Engines/GameEngine';
import { CollidableGameObject } from '../CollidableGameObject';
import { ControllableGameObject } from '../ControllableGameObeject';

export class Player extends ControllableGameObject{

    collide(object: CollidableGameObject) {
        //console.log("colliding", this.x);
        //this.x = 100;
        //GameEngine.getInstance().stop();
        this.controller.collide(object);
    }
    tick() {
        //this.x += 1;
        this.updateObservers();
    }

}