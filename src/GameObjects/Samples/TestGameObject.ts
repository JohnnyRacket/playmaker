import { IGameObject } from './../GameObject.interface';
import {IObserver} from '../../Observables/Observer.interface';
import array = require('lodash/array');


export class TestGameObject implements IGameObject {
    // The set of things that are observing it
    private observers: IObserver[] = [];
    private incrementX: boolean = true;
    private incrementY: boolean = true;

    constructor(private xPos: number = 0, private yPos: number = 0, private maxX: number = 0, private maxY: number = 0, private speed: number = 1, private angle: number = 45) { }

    public getXPosition(){//still kinda looking for some bs swaggy js way to expose a getter to a private value <- make it public lmao
        return this.xPos;
    }

    public getYPosition(){
        return this.yPos;
    }

    public tick(){
        //console.log('model',this.xPos, this.yPos);

        const deltaX = Math.cos(this.angle * Math.PI / 180) * this.speed;
        const deltaY = Math.sin(this.angle * Math.PI / 180) * this.speed;

        this.updateIncrementModes(deltaX, deltaY);
        
        if( this.incrementX ) {
            this.xPos += deltaX;
        } else {
            this.xPos -= deltaX;
        }
        if( this.incrementY ) {
            this.yPos += deltaY;
        } else {
            this.yPos -= deltaY;
        }
        
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

    public dispose(): void {
        throw new Error('Not implemented yet.');
    }

    /*
     * Figure out if we should be incrementing or
     * decrementing
     */
    private updateIncrementModes(deltaX: number, deltaY: number) {
        if(this.xPos + deltaX >= this.maxX || this.xPos + deltaX <= 0) {
            this.incrementX = false;
        } else if (this.xPos - deltaX < 0 || this.xPos - deltaX >= this.maxX) {
            this.incrementX = true;
        }
        if(this.yPos + deltaY >= this.maxY || this.yPos + deltaY < 0) {
            this.incrementY = false;
        } else if (this.yPos - deltaY < 0 || this.yPos - deltaY >= this.maxY) {
            this.incrementY = true;
        }
    }
}
