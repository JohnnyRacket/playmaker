import { CollidableGameObject } from '../CollidableGameObject';
export class Endzone extends CollidableGameObject{

    collide(object: CollidableGameObject) {
        console.log("you win!!!!!!");
    }
    tick() {
        throw new Error("Method not implemented.");
    }

}