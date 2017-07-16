import { GameEngine } from '../Engines/GameEngine';
import { CollidableGameObject } from '../GameObjects/CollidableGameObject';
import { Hitbox } from './Hitbox';

export class HitBoxFactory{

    public static CreateActiveSquareHitBox(width: number, height: number, subject: CollidableGameObject): Hitbox{
        let hitbox: Hitbox = new Hitbox(width, height, subject);
        GameEngine.getInstance().collisionManager.addActiveHitbox(hitbox);
        return hitbox;    
    }
    public static CreatePassiveSquareHitBox(width: number, height: number, subject: CollidableGameObject): Hitbox{
        let hitbox: Hitbox = new Hitbox(width, height, subject);
        GameEngine.getInstance().collisionManager.addPassiveHitbox(hitbox);
        return hitbox;
    }

    public CreateCircleHitBox(){ //future things
        throw Error("not yet implemented");
    }
}