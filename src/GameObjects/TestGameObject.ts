import { IGameObject } from './GameObject.interface';
import {IObserver} from '../Observer.interface';
import array = require('lodash/array');


export class TestGameObject implements IGameObject {

    private xPos: number = 0;
    private yPos: number = 0;
    private observers: IObserver[] = [];

    constructor(x: number, y: number) {
        this.xPos = x;
        this.yPos = y;
    }

    public getXPosition(){//still kinda looking for some bs swaggy js way to expose a getter to a private value
        return this.xPos;
    }

    public getYPosition(){
        return this.yPos;
    }

    public tick(){
        console.log('model',this.xPos, this.yPos);
        this.xPos += .1;
        this.yPos += .1;
        this.updateObservers();
    }

     /*
     * Register adds game objects to the list of observers
     * to be updated throught the game as time passes
     */
    public register(obj: IObserver){
        this.observers.push(obj);
    }
    /*
     * Unregister removes game objects from being updated as time
     * progresses in the game
     */
    public unregister(obj: IObserver){
        array.pull(this.observers, obj);
    }

    public updateObservers(){
            this.observers.forEach((obj: IObserver, index) => obj.update());
    }
}
