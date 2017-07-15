import { Hitbox } from '../Collisions/Hitbox';
import { HitBoxFactory } from '../Collisions/HitBoxFactory';
import { PositionableGameObject } from './PositionableGameObject';

export abstract class CollidableGameObject extends PositionableGameObject{

    protected hitBoxes: Hitbox[] = [];

    public constructor (x: number, y: number, width: number, height: number){
        super(x,y,width,height);
    }
    
    abstract collide(object: CollidableGameObject);

    public addHitBox(hitbox: Hitbox){
        this.hitBoxes.push(hitbox);
    }
}