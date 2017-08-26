import { Hitbox } from '../Collisions/Hitbox';
import { CollidableGameObject } from '../GameObjects/CollidableGameObject';
import { IGameObject } from '../GameObjects/GameObject.interface';

export class CollisionManager implements IGameObject{


    private activeCollidables: Hitbox[] = [];
    private passiveCollidables: Hitbox[] = [];

    // tick(): void {
    //     for(let i = 0; i < this.activeCollidables.length; ++i){
    //         let object1: Hitbox = this.activeCollidables[i];
    //         //active v passive collisions
    //         for(let j = 0; j < this.passiveCollidables.length; ++j){
    //             let object2: Hitbox = this.passiveCollidables[j];
    //             if (object1.x <= object2.x + object2.width  && object1.x + object1.width  >= object2.x &&
    //                 object1.y <= object2.y + object2.height && object1.y + object1.height >= object2.y){
    //                 // collision
    //                 console.log('collision with passive');
    //                 object1.collide(object2);
    //                 object2.collide(object1);
    //             }
    //         }
    //         //active v active collisions
    //         for(let j = i + 1; j < this.activeCollidables.length; ++j){
    //             let object2: Hitbox = this.activeCollidables[j];
    //             if (object1.x <= object2.x + object2.width  && object1.x + object1.width  >= object2.x &&
    //                 object1.y <= object2.y + object2.height && object1.y + object1.height >= object2.y){
    //                 // collision
    //                 console.log('collision with active');
    //                 object1.collide(object2);
    //                 object2.collide(object1);
    //             }
    //         }
    //     }
    // }

    tick(): void {
        for(let i = 0; i < this.activeCollidables.length; ++i){
            let object1: Hitbox = this.activeCollidables[i];
            //active v passive collisions
            for(let j = 0; j < this.passiveCollidables.length; ++j){
                let object2: Hitbox = this.passiveCollidables[j];
                var dx = object1.x - object2.x;
                var dy = object1.y - object2.y;
                var distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < object1.width/2 + object2.width/2 + 1) {
                    // collision detected!
                    // collision
                    //console.log('collision with passive');
                    object1.collide(object2);
                    object2.collide(object1);
                }
            }
            //active v active collisions
            for(let j = i + 1; j < this.activeCollidables.length; ++j){
                let object2: Hitbox = this.activeCollidables[j];
                var dx = object1.x - object2.x;
                var dy = object1.y - object2.y;
                var distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < object1.width/2 + object2.width/2 + 1) {
                    // collision detected!
                    // collision
                    //console.log('collision with active');
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

    public collisionCheckAtPosition(object: CollidableGameObject, x: number, y: number): boolean{
        //active v active collisions
        for(let i = 0; i < this.activeCollidables.length; ++i){
            let object2: Hitbox = this.activeCollidables[i];
            if(object.getHitbox() != object2){
                var dx = x - object2.x;
                var dy = y - object2.y;
                var distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < object.width/2 + object2.width/2) {
                    // collision detected!
                    // collision
                    //console.log('collision check came back as true');
                    return true;
                }
            }else{
                //console.log("omg im finding myself");
            }
        }
        return false;
    }
}