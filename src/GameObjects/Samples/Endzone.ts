import { CollidableGameObject } from '../CollidableGameObject';
export class Endzone extends CollidableGameObject{

    collide(object: CollidableGameObject) {

        if(object.type == 'runner') console.log("TOUCHDOWN");
    }
    tick() {
        throw new Error("Method not implemented.");
    }

}