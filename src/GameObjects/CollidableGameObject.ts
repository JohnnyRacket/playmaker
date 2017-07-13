import { Hitbox } from '../Collisions/Hitbox';
import { PositionableGameObject } from './PositionableGameObject';

export abstract class CollidableGameObject extends PositionableGameObject{

    public constructor (x: number, y: number, protected width: number, protected height: number, protected hitbox: Hitbox){
        super(x,y);
        this.width = width;
        this.height = height;
        this.hitbox = hitbox;
    }
    
    abstract collide(object: CollidableGameObject);
}