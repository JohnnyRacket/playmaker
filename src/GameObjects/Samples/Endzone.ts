import { CollidableGameObject } from '../CollidableGameObject';
import { ScoreKeeper } from '../../Engines/ScoreKeeper';
export class Endzone extends CollidableGameObject{

    collide(object: CollidableGameObject) {

        if(object.type == 'runner'){
            ScoreKeeper.getInstance().incrementScore();
        }
    }
    tick() {
        throw new Error("Method not implemented.");
    }

}