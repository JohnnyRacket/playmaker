import { Hitbox } from '../Collisions/Hitbox';
import { HitBoxFactory } from '../Collisions/HitBoxFactory';
import { PositionableGameObject } from './PositionableGameObject';

export abstract class CollidableGameObject extends PositionableGameObject{

    protected hitbox;

    public constructor (x: number, y: number, width: number, height: number){
        super(x,y,width,height);
    }
    
    abstract collide(object: CollidableGameObject);

    public setHitbox(hitbox: Hitbox){
        this.hitbox = hitbox;
    }
    public removeHitbox(){
        this.hitbox = null;
    }
}