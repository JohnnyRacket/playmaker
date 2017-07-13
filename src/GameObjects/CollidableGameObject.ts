import { Hitbox } from '../Collisions/Hitbox';
import { PositionableGameObject } from './PositionableGameObject';

export abstract class CollidableGameObject extends PositionableGameObject{
    
    protected width: number;
    protected height: number;
    protected hitbox: Hitbox;

    public constructor (x: number, y: number, width: number, height: number, hitbox: Hitbox){
        super(x,y);
        this.width = width;
        this.height = height;
        this.hitbox = hitbox;
    }
    
    abstract collide(object: CollidableGameObject);
}