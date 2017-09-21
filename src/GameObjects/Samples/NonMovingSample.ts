import { CollidableGameObject } from '../CollidableGameObject';
import { Hitbox } from "../../Collisions/Hitbox";

export class NonMovingSample extends CollidableGameObject{
    public type: string;
    protected hitbox: Hitbox;

    collide(object: CollidableGameObject) {
        console.log("im a fuqing wall .-.");
    }
    tick() {
        this.updateObservers();
    }
    dispose(){}

}