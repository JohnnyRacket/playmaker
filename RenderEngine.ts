import array = require('lodash/array');
import {IViewObject} from './ViewObjects/ViewObject.interface';

export class RenderEngine{

    private observers: IViewObject[];
    private isRunning: boolean = false;

    /*
    * starts the render loop
    */
    public start(){
        this.isRunning = true;
    }

    /*
    * stops the render loop
    */
    public stop(){
        this.isRunning = false;
    }

    /*
    * controls the timing at which the tick is called,
    * for visuals we will relyon the screenrefreshrate from the browser
    */
    private run(){
        //do the timing and call tick a lot
    }

    /*
    * updates all of the view objects
    */
    private tick(){
        this.observers.forEach((obj: IViewObject, index) => obj.render());
    }

    /*
    * register a view object to be updated by the game engine
    */
    public register(obj: IViewObject){
        this.observers.push(obj);
    }

    /*
    * unregister a view object to be updated by the game engine
    */
    public unregister(obj: IViewObject){
        array.pull(this.observers, obj);
    }
}