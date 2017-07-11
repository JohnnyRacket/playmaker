import array = require('lodash/array');
import { IGameObject } from './GameObjects/GameObject.interface';

export class GameEngine{

    private observers: IGameObject[];
    private isRunning: boolean = false;

    /*
    * Starts the game loop
    */
    public start(){
        //start loop tha calls tick on a set interval
        this.isRunning = true;
    }

    /*
    * stops the game loop
    */
    public stop(){
        //stop looping
        this.isRunning = false;
    }

    /*
    * runs the game loop and sets the timing
    */
    private run(){

    }

    /*
     * Tick represents the passing of time in the game
     * and is used to progress the game through it's sequence
     */
    public tick(){
        this.observers.forEach((obj: IGameObject, index) => obj.update());
    }

    /*
     * Register adds game objects to the list of observers
     * to be updated throught the game as time passes
     */
    public register(obj: IGameObject){
        this.observers.push(obj);
    }
    /*
     * Unregister removes game objects from being updated as time
     * progresses in the game
     */
    public unregister(obj: IGameObject){
        array.pull(this.observers, obj);
    }
}
