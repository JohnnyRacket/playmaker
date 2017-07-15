import { CollidableGameObject } from '../CollidableGameObject';

export class NonMovingSample extends CollidableGameObject{

    collide(object: CollidableGameObject) {
        console.log("im a fuqing wall .-.");
    }
    tick() {
        this.updateObservers();
    }

}