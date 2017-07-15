import { GameEngine } from '../../Engines/GameEngine';
import { CollidableGameObject } from '../CollidableGameObject';

export class NewFangledSample extends CollidableGameObject{

    collide(object: CollidableGameObject) {
        console.log("colliding", this.x);
        //this.x = 100;
        GameEngine.getInstance().stop();
    }
    tick() {
        this.x += 1;
        this.updateObservers();
    }

}