import { CollidableGameObject } from '../CollidableGameObject';

export class NewFangledSample extends CollidableGameObject{

    collide(object: CollidableGameObject) {
        console.log("aye mate watch where youre goin ya cunt");
    }
    tick() {
        this.x += 1;
        this.updateObservers();
    }

}