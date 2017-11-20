import { Hitbox } from '../../Collisions/Hitbox';
import { CollidableGameObject } from "../CollidableGameObject";

export class Wall extends CollidableGameObject{
    public type: string;
    protected hitbox: Hitbox;

    tick(){
        //do nothing right now
    }

    public collide(object: CollidableGameObject) {
       // throw new Error('Not implemented yet.');
    }
}