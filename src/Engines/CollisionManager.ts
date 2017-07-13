import { CollidableGameObject } from '../GameObjects/CollidableGameObject';
import { IGameObject } from '../GameObjects/GameObject.interface';

export class CollisionManager implements IGameObject{


    private collidables: CollidableGameObject[] = [];
    private psuedoCollidables: CollidableGameObject[] = [];

    tick(): void {
        for(let i = 0; i < this.collidables.length; ++i){
            if()
        }
    }
}