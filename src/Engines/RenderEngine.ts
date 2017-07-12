import array = require('lodash/array');
import {IViewObject} from '../ViewObjects/ViewObject.interface';

export class RenderEngine{

    private observers: IViewObject[] = [];
    private isRunning: boolean = false;
    private context: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;

    public constructor(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement){
        this.context = context;
        this.canvas = canvas;
    }
    /*
    * starts the render loop
    */
    public start(){
        this.isRunning = true;
        requestAnimationFrame(() => {this.run();});
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
        if(this.isRunning){
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.tick();
            requestAnimationFrame(() => {this.run();});
        }
        
    }

    /*
    * updates all of the view objects
    */
    private tick(){
        this.observers.forEach((obj: IViewObject, index) => obj.render(this.context, this.canvas.width, this.canvas.height));
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