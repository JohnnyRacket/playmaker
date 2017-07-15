import { Hitbox } from '../Collisions/Hitbox';
import { CollidableGameObject } from '../GameObjects/CollidableGameObject';
import { IGameObject } from '../GameObjects/GameObject.interface';

export class CollisionManager implements IGameObject{


    private activeCollidables: Hitbox[] = [];
    private passiveCollidables: Hitbox[] = [];

    tick(): void {
        for(let i = 0; i < this.activeCollidables.length; ++i){
            let object1: Hitbox = this.activeCollidables[i];
            //active v passive collisions
            for(let j = 0; i < this.passiveCollidables.length; ++i){
                let object2: Hitbox = this.passiveCollidables[j];
                if (object1.x <= object2.x + object2.width  && object1.x + object1.width  >= object2.x &&
                    object1.y <= object2.y + object2.height && object1.y + object1.height >= object2.y){
                    // collision
                    console.log('collision');
                    object1.collide(object2);
                    object2.collide(object1);
                }
            }
            //active v active collisions
            for(let j = i + 1; i < this.activeCollidables.length; ++i){
                let object2: Hitbox = this.activeCollidables[j];
                if (object1.x <= object2.x + object2.width  && object1.x + object1.width  >= object2.x &&
                    object1.y <= object2.y + object2.height && object1.y + object1.height >= object2.y){
                    // collision
                    console.log('collision');
                    object1.collide(object2);
                    object2.collide(object1);
                }
            }
        }
    }

    public addActiveHitbox(hitbox: Hitbox){
        this.activeCollidables.push(hitbox);
    }

    public addPassiveHitbox(hitbox: Hitbox){
        this.passiveCollidables.push(hitbox);
    }
}