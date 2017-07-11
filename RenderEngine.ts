import array = require('lodash/array');
import {GameObject} from './Gameobjects/GameObject';
export class RenderEngine{
    private observers: GameObject[];
    private isRunning: boolean = false;

    public start(){
        //start loop tha calls tick on a set interval
        this.isRunning = true;
    }
    public stop(){
        //stop looping
        this.isRunning = false;
    }

    private run(){
        //do the timing and call tick a lot
    }

    //for observers to be updated by the engine
    private tick(){
        this.observers.forEach((obj: GameObject, index) => obj.update());
    }

    public register(obj: GameObject){
        this.observers.push(obj);
    }
    public unregister(obj: GameObject){
        array.pull(this.observers, obj);
    }
}