import array = require('lodash/array');
import { IGameObject } from '../GameObjects/GameObject.interface';
import { CollisionManager } from './CollisionManager';

/*
* This class is a Singleton
*/

export class GameEngine{
    /*
     * Member variables
     */
    private interval;
    private isRunning: boolean = false;
    private observers: IGameObject[] = [];
    private tickLength: number = 33;
    public collisionManager: CollisionManager = new CollisionManager();

    private static _instance: GameEngine = new GameEngine();
  
    private constructor() {
        if(GameEngine._instance){
            throw new Error("Error: Instantiation failed: Use GameEngine.getInstance() instead of new.");
        }
        GameEngine._instance = this;
        this.register(this.collisionManager);
        //add collision manager to the ticks, add functions for adding and removing stuff
    }
 
    public static getInstance(): GameEngine
    {
        return GameEngine._instance;
    }

    /*
    * Starts the game loop
    */
    public start(){
        //start loop the calls tick on a set interval
        this.isRunning = true;
        this.run();
    }

    /*
    * stops the game loop
    */
    public stop(){
        //stop looping
        this.isRunning = false;
        clearInterval(this.interval);
    }

    /*
    * runs the game loop and sets the timing
    */
    private run(){
        this.interval = setInterval(() => {this.tick();}, this.tickLength);
    }

    /*
     * Tick represents the passing of time in the game
     * and is used to progress the game through it's sequence
     */
    public tick(){
        this.observers.forEach((obj: IGameObject, index) => obj.tick());
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
