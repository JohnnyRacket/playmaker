import { ActiveHitbox } from '../Collisions/ActiveHitbox';
import { ColliableHitbox } from '../Collisions/CollidableHitbox';
import { CollidableGameObject } from '../GameObjects/CollidableGameObject';
import { IGameObject } from '../GameObjects/GameObject.interface';

export class CollisionManager implements IGameObject{


    private collidables: ActiveHitbox[] = [];
    private psuedoCollidables: ColliableHitbox[] = [];

    tick(): void {
        for(let i = 0; i < this.collidables.length; ++i){
            
        }
    }
}