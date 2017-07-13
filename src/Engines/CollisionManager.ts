import { ActiveHitbox } from '../Collisions/ActiveHitbox';
import { PassiveHitbox } from '../Collisions/PassiveHitbox';
import { CollidableGameObject } from '../GameObjects/CollidableGameObject';
import { IGameObject } from '../GameObjects/GameObject.interface';

export class CollisionManager implements IGameObject{


    private activeCcollidables: ActiveHitbox[] = [];
    private passiveCollidables: PassiveHitbox[] = [];

    tick(): void {
        for(let i = 0; i < this.activeCcollidables.length; ++i){
            let object1: ActiveHitbox = this.activeCcollidables[i];
            for(let j = 0; i < this.passiveCollidables.length; ++i){
                let object2: PassiveHitbox = this.passiveCollidables[j];
                if (object1.x < object2.x + object2.width  && object1.x + object1.width  > object2.x &&
                    object1.y < object2.y + object2.height && object1.y + object1.height > object2.y){
                    // collision
                    console.log('collision');
                    object1.collide(object2);
                    object2.collide(object1);
                }
            }
        }
    }
}