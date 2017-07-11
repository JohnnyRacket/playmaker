import array = require('lodash/array');
import { GameObject } from './GameObjects/GameObject';

export class GameEngine{

    private observers: GameObject[];

    /*
     * Tick represents the passing of time in the game
     * and is used to progress the game through it's sequence
     */
    public tick(){
        this.observers.forEach((obj: GameObject, index) => obj.update());
    }

    /*
     * Register adds game objects to the list of observers
     * to be updated throught the game as time passes
     */
    public register(obj: GameObject){
        this.observers.push(obj);
    }
    /*
     * Unregister removes game objects from being updated as time
     * progresses in the game
     */
    public unregister(obj: GameObject){
        array.pull(this.observers, obj);
    }
}
